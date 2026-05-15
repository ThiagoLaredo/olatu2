export type ProjectSegment =
  | 'moda'
  | 'saúde'
  | 'financeiro'
  | 'marketing'
  | 'arquitetura'
  | 'audiovisual'
  | 'educação'
  | 'tecnologia'
  | 'turismo';

export interface Project {
  id: string;
  title: string;
  type: string;
  segment: ProjectSegment;
  description: string;
  image: string;
  otherimages: string[];
  link: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 'abo-filmes',
    title: 'Abó Filmes',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site institucional com foco em narrativa visual para um estúdio de produção audiovisual que cria campanhas, arte e filmes cinematográficos para marcas e artistas.',
    image: '/images/works/abofilmes/abo-filmes-capa.jpg',

    otherimages: [
      '/images/works/abofilmes/abo-filmes-capa.jpg',
      '/images/works/abofilmes/abo-filmes-1.webp',
      '/images/works/abofilmes/abo-filmes-2.webp',
      '/images/works/abofilmes/abo-filmes-3.webp',
      '/images/works/abofilmes/abo-filmes-4.webp',
      '/images/works/abofilmes/abo-filmes-5.webp',
    ],
    link: 'https://abofilmes.com',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: '3v-capital',
    title: '3V Capital',
    type: 'Website',
    segment: 'financeiro',
    description: 'Website corporativo para empresa de investimentos, com foco em portfólio de empresas investidas e contato comercial.',
    image: '/images/works/3vcapital/3v-capital-capa.jpg',
    otherimages: [
      '/images/works/3vcapital/3v-capital-1.webp',
      '/images/works/3vcapital/3v-capital-2.webp',
      '/images/works/3vcapital/3v-capital-3.webp',
      '/images/works/3vcapital/3v-capital-4.webp',
    ],
    link: 'https://3vcapital.com.br',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 'ivan-ventura',
    title: 'Ivan Ventura',
    type: 'Website',
    segment: 'arquitetura',
    description: 'Website com gerenciador de conteúdo de portfólio pessoal de projetos de arquitetura e design.',
    image: '/images/works/ivanventura/ivan-ventura.webp',
    otherimages: [
      '/images/works/ivanventura/ivan-ventura-1.webp',
      '/images/works/ivanventura/ivan-ventura-2.webp',
      '/images/works/ivanventura/ivan-ventura-3.webp',
      '/images/works/ivanventura/ivan-ventura-4.webp',
    ],
    link: 'https://ivanventura.com.br/',
    technologies: ['HTML', 'CSS', 'JS', 'JSON Server']
  },
  {
    id: 'storrer-tamburus',
    title: 'Storrer Tamburus',
    type: 'Website',
    segment: 'arquitetura',
    description: 'Website Corporativo com gerenciador de conteúdo para escritório de arquitetura e design. Projetos residenciais, comerciais e corporativos com excelência e inovação.',
    image: '/images/works/storrertamburus/storrer-tamburus.webp',
    otherimages: [
      '/images/works/storrertamburus/storrer-tamburus-1.webp',
      '/images/works/storrertamburus/storrer-tamburus-3.webp',
      '/images/works/storrertamburus/storrer-tamburus-2.webp',
    ],
    link: 'https://storrertamburus.com.br',
    technologies: ['React', 'TypeScript', 'Node.js', 'Contentful']
  },
  {
    id: 'golden-capital',
    title: 'Golden Capital',
    type: 'Website',
    segment: 'financeiro',
    description: 'Website Corporativo com gerenciador de conteúdo para escritório de arquitetura e design. Projetos residenciais, comerciais e corporativos com excelência e inovação.',
    image: '/images/works/goldencapital/golden-capital-capa.jpg',
    otherimages: [
      '/images/works/goldencapital/golden-capital-capa.jpg',
      '/images/works/goldencapital/golden-capital-1.webp',
      '/images/works/goldencapital/golden-capital-2.webp',
      '/images/works/goldencapital/golden-capital-3.webp',
      '/images/works/goldencapital/golden-capital-4.webp'
    ],
    link: 'https://goldencapital.com.br',
    technologies: ['React', 'TypeScript', 'Node.js', 'JSON Server']
  },
  {
    id: 'kottler',
    title: 'Kottler',
    type: 'Website',
    segment: 'marketing',
    description: 'Site institucional com gerenciador de conteúdo para agência de marketing, com foco em portfólio de projetos, cases e contato comercial.',
    image: '/images/works/kottler/kottler-capa.webp',
    otherimages: [
      '/images/works/kottler/agencia-kottler-1.webp',
      '/images/works/kottler/agencia-kottler-2.webp',
      '/images/works/kottler/agencia-kottler-3.webp',
      '/images/works/kottler/agencia-kottler-4.webp',
    ],
    link: 'https://agenciakottler.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
  },
  {
    id: 'alpargatas',
    title: 'Trainee Alpargatas',
    type: 'Website',
    segment: 'moda',
    description: 'Landing page para programa de talentos da Alpargatas, com foco em apresentar o programa, depoimentos e formulário de inscrição.',
    image: '/images/works/alpargatas/alpargatas-capa.webp',
    otherimages: [
      '/images/works/alpargatas/alpargatas-2.webp',
      '/images/works/alpargatas/alpargatas-1.webp',
      '/images/works/alpargatas/alpargatas-3.webp',
      '/images/works/alpargatas/alpargatas-4.webp',
    ],
    link: 'http://ciadetalentos.com.br/traineealpargatas',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   },
   {
    id: 'womanlab',
    title: 'WomanLab',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/womanlab/womanlab-capa.webp',
    otherimages: [
      '/images/works/womanlab/womanlab-1.webp',
      '/images/works/womanlab/womanlab-2.webp',
      '/images/works/womanlab/womanlab-3.webp',
      '/images/works/womanlab/womanlab-4.webp'
    ],
    link: 'https://womanlab.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   },
      {
    id: 'pluug-ai',
    title: 'Pluug.Ai',
    type: 'Website',
    segment: 'tecnologia',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/pluugai/pluug-ai-capa.webp',
    otherimages: [
      '/images/works/pluugai/pluug.ai-1.webp',
      '/images/works/pluugai/pluug.ai-2.webp',
      '/images/works/pluugai/pluug.ai-3.webp',
      '/images/works/pluugai/pluug.ai-4.webp'
    ],
    link: 'https://pluugai.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript']    
   },
  {
    id: 'virginiamuller',
    title: 'Dra Virginia Muller',
    type: 'Website',
    segment: 'saúde',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/virginiamuller/virginia-muller-capa.webp',
    otherimages: [
      '/images/works/virginiamuller/virginia-muller1.webp',
      '/images/works/virginiamuller/virginia-muller2.webp',
      '/images/works/virginiamuller/virginia-muller3.webp'
    ],
    link: 'https://virginiamuller.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   },
      {
    id: 'triuscapital',
    title: 'Trius Capital',
    type: 'Website',
    segment: 'financeiro',
    description: 'Site institucional para empresa de investimentos, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/triuscapital/trius-capital-capa.webp',
    otherimages: [
      '/images/works/triuscapital/trius-capital-1.webp',
      '/images/works/triuscapital/trius-capital-2.webp',
      '/images/works/triuscapital/trius-capital-3.webp',
      '/images/works/triuscapital/trius-capital-4.webp'
    ],
    link: 'https://triuscapital.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   }, 
      {
    id: 'grupoacolher',
    title: 'Grupo Acolher',
    type: 'Website',
    segment: 'saúde',
    description: 'Site institucional para grupo de acolhimento, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/grupoacolher/grupo-acolher-capa.webp',
    otherimages: [
      '/images/works/grupoacolher/grupo-acolher-1.webp',
      '/images/works/grupoacolher/grupo-acolher-2.webp',
      '/images/works/grupoacolher/grupo-acolher-3.webp',
      '/images/works/grupoacolher/grupo-acolher-4.webp'
    ],
    link: 'https://grupoacolher.com',
    technologies: ['HTML', 'CSS', 'JavaScript']    
   }, 
  {
    id: 'clinicapace',
    title: 'Clinica Pace',
    type: 'Website',
    segment: 'saúde',
    description: 'Site institucional para clínica de saúde, com foco em portfólio de serviços e contato comercial.',
    image: '/images/works/clinicapace/clinica-pace-capa.webp',
    otherimages: [
      '/images/works/clinicapace/clinica-pace-1.webp',
      '/images/works/clinicapace/clinica-pace-2.webp',
      '/images/works/clinicapace/clinica-pace-3.webp',
      '/images/works/clinicapace/clinica-pace-4.webp'
    ],
    link: 'https://clinicapace.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
  {
    id: 'taispacheco',
    title: 'Taís Pacheco',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site de portfólio pessoal para artista visual, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/taispacheco/tais-pacheco-capa.webp',
    otherimages: [
      '/images/works/taispacheco/taispacheco-1.webp',
      '/images/works/taispacheco/taispacheco-2.webp',
      '/images/works/taispacheco/taispacheco-3.webp',
      '/images/works/taispacheco/taispacheco-4.webp'
    ],
    link: 'https://taispacheco.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
 
     {
    id: 'glue',
    title: 'Glue',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site de portfólio pessoal para um selo de gestão de carreira para talentos do audiovisual.',
    image: '/images/works/glue/glue-capa.webp',
    otherimages: [
      '/images/works/glue/glue-1.webp',
      '/images/works/glue/glue-2.webp',
      '/images/works/glue/glue-3.webp',
      '/images/works/glue/glue-4.webp'
    ],
    link: 'https://gluehere.co/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
{
    id: 'cibelegarcia',
    title: 'Cibele Garcia',
    type: 'Website',
    segment: 'educação',
    description: 'Site de portfólio pessoal para Cibele Garcia, professora de inglês, com foco em apresentação, serviços e contato comercial.',
    image: '/images/works/cibelegarcia/cibele-garcia-capa.webp',
    otherimages: [
      '/images/works/cibelegarcia/cibele-garcia-1.webp',
      '/images/works/cibelegarcia/cibele-garcia-2.webp',
      '/images/works/cibelegarcia/cibele-garcia-3.webp',
      '/images/works/cibelegarcia/cibele-garcia-4.webp'
    ],
    link: 'https://cibelegarcia.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },
   {
    id: 'katiavardanega',
    title: 'Dra Kátia Vardanega',
    type: 'Website',
    segment: 'saúde',
    description: 'Site de portfólio pessoal para Dra Kátia Vardanega, professora de inglês, com foco em apresentação, serviços e contato comercial.',
    image: '/images/works/katiavardanega/katia-vardanega-capa.webp',
    otherimages: [
      '/images/works/katiavardanega/katia-vardanega-1.webp',
      '/images/works/katiavardanega/katia-vardanega-2.webp',
      '/images/works/katiavardanega/katia-vardanega-3.webp',
      '/images/works/katiavardanega/katia-vardanega-4.webp'
    ],
    link: 'https://katiavardanega.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },
  {
    id: 'onmywaytravel',
    title: 'On My Way Travel',
    type: 'Website',
    segment: 'turismo',
    description: 'Site de portfólio pessoal para On My Way Travel, agência de viagens, com foco em apresentação, serviços e contato comercial.',
    image: '/images/works/onmywaytravel/on-my-way-travel-capa.webp',
    otherimages: [
      '/images/works/onmywaytravel/on-my-way-travel-1.webp',
      '/images/works/onmywaytravel/on-my-way-travel-2.webp',
      '/images/works/onmywaytravel/on-my-way-travel-3.webp',
      '/images/works/onmywaytravel/on-my-way-travel-4.webp'
    ],
    link: 'https://omwtravel.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },  
     {
    id: 'probene',
    title: 'Probene',
    type: 'E-commerce',
    segment: 'saúde',
    description: 'E-commerce para a empresa Probene, desde 2002 especialistas em desenvolver e produzir alimentos e suplementos saudáveis, nutricionalmente elaborados e que promovem a saúde e o bem-estar.',
    image: '/images/works/probene/probene-capa.webp',
    otherimages: [
      '/images/works/probene/probene-1.webp',
      '/images/works/probene/probene-2.webp',
      '/images/works/probene/probene-3.webp',
      '/images/works/probene/probene-4.webp'
    ],
    link: 'https://probene.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WooCommerce']    
   }, 
        {
    id: 'myaswimwear',
    title: 'MYA swimwear',
    type: 'E-commerce',
    segment: 'moda',
    description: 'E-commerce para a empresa MYA swimwear, especializada em moda praia, oferecendo produtos de alta qualidade e design exclusivo.',
    image: '/images/works/myaswimwear/mya-swimwear-capa.webp',
    otherimages: [
      '/images/works/myaswimwear/myaswimwear-1.webp',
      '/images/works/myaswimwear/myaswimwear-2.webp',
      '/images/works/myaswimwear/myaswimwear-3.webp',
      '/images/works/myaswimwear/myaswimwear-4.webp'
    ],
    link: 'https://myaswimwear.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WooCommerce']    
   }, 
           {
    id: 'territorioemocional',
    title: 'Território Emocional',
    type: 'Website',
    segment: 'saúde',
    description: 'Website para a empresa Território Emocional, especializada em saúde emocional, oferecendo conteúdos e serviços de alta qualidade.',
    image: '/images/works/territorioemocional/territorio-emocional-capa.webp',
    otherimages: [
      '/images/works/territorioemocional/territorio-emocional-1.webp',
      '/images/works/territorioemocional/territorio-emocional-2.webp',
      '/images/works/territorioemocional/territorio-emocional-3.webp',
      '/images/works/territorioemocional/territorio-emocional-4.webp'
    ],
    link: 'https://territorioemocional.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
]