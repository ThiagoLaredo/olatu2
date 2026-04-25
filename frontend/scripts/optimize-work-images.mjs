import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

const WORKS_ROOT = path.resolve(process.cwd(), 'public/images/works');
const TARGET_WIDTHS = [640, 960, 1280, 1600];
const WEBP_QUALITY = 78;
const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);
const GENERATED_PATTERN = /-w\d+\.webp$/i;
const DERIVED_IMAGE_PATTERN = /-(?:w\d+|\d{3,4})$/i;

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(2)} MB`;
};

const getClientFolders = async () => {
  const entries = await fs.readdir(WORKS_ROOT, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(WORKS_ROOT, entry.name));
};

const getSourceImages = async (folderPath) => {
  const entries = await fs.readdir(folderPath, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => {
      const ext = path.extname(name).toLowerCase();
      const baseName = path.basename(name, ext);
      return (
        SUPPORTED_EXTENSIONS.has(ext)
        && !GENERATED_PATTERN.test(name)
        && !DERIVED_IMAGE_PATTERN.test(baseName)
      );
    })
    .map((name) => path.join(folderPath, name));
};

const optimizeImage = async (sourcePath) => {
  const sourceMeta = await sharp(sourcePath).metadata();

  if (!sourceMeta.width) {
    throw new Error(`Nao foi possivel ler largura de ${sourcePath}`);
  }

  const sourceStats = await fs.stat(sourcePath);
  const sourceDir = path.dirname(sourcePath);
  const sourceExt = path.extname(sourcePath);
  const sourceBase = path.basename(sourcePath, sourceExt);

  let generatedCount = 0;
  let bytesBefore = sourceStats.size;
  let bytesAfter = 0;

  for (const width of TARGET_WIDTHS) {
    if (width > sourceMeta.width) {
      continue;
    }

    const outputPath = path.join(sourceDir, `${sourceBase}-w${width}.webp`);

    await sharp(sourcePath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(outputPath);

    const outStats = await fs.stat(outputPath);
    bytesAfter += outStats.size;
    generatedCount += 1;
  }

  return {
    sourcePath,
    generatedCount,
    bytesBefore,
    bytesAfter,
  };
};

const main = async () => {
  console.log(`Iniciando otimizacao em ${WORKS_ROOT}`);

  const folders = await getClientFolders();

  if (folders.length === 0) {
    console.log('Nenhuma pasta de cliente encontrada em public/images/works.');
    return;
  }

  let totalSources = 0;
  let totalGenerated = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const folder of folders) {
    const images = await getSourceImages(folder);

    if (images.length === 0) {
      continue;
    }

    console.log(`\nCliente: ${path.basename(folder)}`);

    for (const imagePath of images) {
      const result = await optimizeImage(imagePath);
      totalSources += 1;
      totalGenerated += result.generatedCount;
      totalBefore += result.bytesBefore;
      totalAfter += result.bytesAfter;

      console.log(
        `- ${path.basename(result.sourcePath)} -> ${result.generatedCount} arquivos WebP gerados`
      );
    }
  }

  console.log('\nResumo:');
  console.log(`- Imagens base processadas: ${totalSources}`);
  console.log(`- Variantes WebP geradas: ${totalGenerated}`);
  console.log(`- Tamanho total originais: ${formatBytes(totalBefore)}`);
  console.log(`- Tamanho total variantes: ${formatBytes(totalAfter)}`);
};

main().catch((error) => {
  console.error('Falha ao otimizar imagens:', error);
  process.exit(1);
});
