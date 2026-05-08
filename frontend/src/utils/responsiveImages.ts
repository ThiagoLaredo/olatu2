const stripExtension = (imagePath: string) => imagePath.replace(/\.[^/.]+$/, '');

export const getWebpSrcSetFromBaseImage = (
  imagePath: string,
  widths: number[] = [640, 960]
) => {
  const basePath = stripExtension(imagePath);
  return widths.map((width) => `${basePath}-w${width}.webp ${width}w`).join(', ');
};
