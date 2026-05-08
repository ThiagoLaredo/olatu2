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
  id: number;
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
    id: 1,
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
    link: 'https://abofilmes.com.br',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 2,
    title: '3V Capital',
    type: 'Website',
    segment: 'financeiro',
    description: 'Website corporativo para empresa de investimentos, com foco em portfólio de empresas investidas e contato comercial.',
    image: '/images/works/3vcapital/3v-capital-capa.jpg',
    otherimages: [
      '/images/works/3vcapital/3v-capital-capa.jpg',
      '/images/works/3vcapital/3v-capital-1.webp',
      '/images/works/3vcapital/3v-capital-2.webp',
      '/images/works/3vcapital/3v-capital-3.webp',
      '/images/works/3vcapital/3v-capital-4.webp',
      '/images/works/3vcapital/3v-capital-5.webp'
    ],
    link: 'https://3vcapital.com.br',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    id: 3,
    title: 'Ivan Ventura',
    type: 'Website',
    segment: 'arquitetura',
    description: 'Website com gerenciador de conteúdo de portfólio pessoal de projetos de arquitetura e design.',
    image: '/images/works/ivanventura/ivan-ventura.webp',
    otherimages: [
      '/images/works/ivanventura/ivan-ventura.webp',
      '/images/services/design.webp',
      '/images/services/estrategia.webp'
    ],
    link: 'https://ivanventura.com',
    technologies: ['HTML', 'CSS', 'JS', 'JSON Server']
  },
  {
    id: 4,
    title: 'Storrer Tamburus',
    type: 'Website',
    segment: 'arquitetura',
    description: 'Website Corporativo com gerenciador de conteúdo para escritório de arquitetura e design. Projetos residenciais, comerciais e corporativos com excelência e inovação.',
    image: '/images/works/storrertamburus/storrer-tamburus.webp',
    otherimages: [
      '/images/works/storrertamburus/storrer-tamburus.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://storrertamburus.com',
    technologies: ['React', 'TypeScript', 'Node.js', 'Contentful']
  },
  {
    id: 5,
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
    id: 6,
    title: 'Kottler',
    type: 'Website',
    segment: 'marketing',
    description: 'Site institucional com gerenciador de conteúdo para agência de marketing, com foco em portfólio de projetos, cases e contato comercial.',
    image: '/images/works/kottler/kottler-capa.webp',
    otherimages: [
      '/images/works/kottler/kottler-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://kottler.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
  },
  {
    id: 7,
    title: 'Trainee Alpargatas',
    type: 'Website',
    segment: 'moda',
    description: 'Landing page para programa de talentos da Alpargatas, com foco em apresentar o programa, depoimentos e formulário de inscrição.',
    image: '/images/works/alpargatas/alpargatas-capa.webp',
    otherimages: [
      '/images/works/alpargatas/alpargatas-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'http://ciadetalentos.com.br/traineealpargatas',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   },
   {
    id: 8,
    title: 'WomanLab',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/womanlab/womanlab-capa.webp',
    otherimages: [
      '/images/works/womanlab/womanlab-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://womanlab.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   },
      {
    id: 9,
    title: 'Pluug.Ai',
    type: 'Website',
    segment: 'tecnologia',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/pluugai/pluug-ai-capa.webp',
    otherimages: [
      '/images/works/pluugai/pluug-ai-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://pluugai.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript']    
   },
   {
    id: 10,
    title: 'Redway',
    type: 'Website',
    segment: 'tecnologia',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/redway/redway-capa.webp',
    otherimages: [
      '/images/works/redway/redway-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://redway.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   }, 
      {
    id: 11,
    title: 'Dra Virginia Muller',
    type: 'Website',
    segment: 'saúde',
    description: 'Site institucional para produtora de filmes, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/virginiamuller/virginia-muller-capa.webp',
    otherimages: [
      '/images/works/virginiamuller/virginia-muller.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://virginiamuller.com/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   },
      {
    id: 12,
    title: 'Trius Capital',
    type: 'Website',
    segment: 'financeiro',
    description: 'Site institucional para empresa de investimentos, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/triuscapital/trius-capital-capa.webp',
    otherimages: [
      '/images/works/triuscapital/trius-capital-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://triuscapital.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   }, 
      {
    id: 13,
    title: 'Grupo Acolher',
    type: 'Website',
    segment: 'saúde',
    description: 'Site institucional para grupo de acolhimento, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/grupoacolher/grupo-acolher-capa.webp',
    otherimages: [
      '/images/works/grupoacolher/grupo-acolher-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://grupoacolher.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Contentful']    
   }, 
  {
    id: 14,
    title: 'Clinica Pace',
    type: 'Website',
    segment: 'saúde',
    description: 'Site institucional para clínica de saúde, com foco em portfólio de serviços e contato comercial.',
    image: '/images/works/clinicapace/clinica-pace-capa.webp',
    otherimages: [
      '/images/works/clinicapace/clinica-pace-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://clinicapace.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
  {
    id: 15,
    title: 'Taís Pacheco',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site de portfólio pessoal para artista visual, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/taispacheco/tais-pacheco-capa.webp',
    otherimages: [
      '/images/works/taispacheco/tais-pacheco-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://taispacheco.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
    {
    id: 16,
    title: 'Grupo Papaki',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site institucional para grupo Papaki, empresa de produção audiovisual, com foco em portfólio de projetos e contato comercial.',
    image: '/images/works/grupopapaki/grupo-papaki-capa.webp',
    otherimages: [
      '/images/works/grupopapaki/grupo-papaki-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://grupopapaki.com.br',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },  
     {
    id: 17,
    title: 'Glue',
    type: 'Website',
    segment: 'audiovisual',
    description: 'Site de portfólio pessoal para um selo de gestão de carreira para talentos do audiovisual.',
    image: '/images/works/glue/glue-capa.webp',
    otherimages: [
      '/images/works/glue/glue-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://gluehere.co/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   }, 
{
    id: 18,
    title: 'Cibele Garcia',
    type: 'Website',
    segment: 'educação',
    description: 'Site de portfólio pessoal para Cibele Garcia, professora de inglês, com foco em apresentação, serviços e contato comercial.',
    image: '/images/works/cibelegarcia/cibele-garcia-capa.webp',
    otherimages: [
      '/images/works/cibelegarcia/cibele-garcia-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://cibelegarcia.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },
   {
    id: 19,
    title: 'Dra Kátia Vardanega',
    type: 'Website',
    segment: 'saúde',
    description: 'Site de portfólio pessoal para Dra Kátia Vardanega, professora de inglês, com foco em apresentação, serviços e contato comercial.',
    image: '/images/works/katiavardanega/katia-vardanega-capa.webp',
    otherimages: [
      '/images/works/katiavardanega/katia-vardanega-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://katiavardanega.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },
  {
    id: 20,
    title: 'On My Way Travel',
    type: 'Website',
    segment: 'turismo',
    description: 'Site de portfólio pessoal para On My Way Travel, agência de viagens, com foco em apresentação, serviços e contato comercial.',
    image: '/images/works/onmywaytravel/on-my-way-travel-capa.webp',
    otherimages: [
      '/images/works/onmywaytravel/on-my-way-travel-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://onmywaytravel.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Wordpress']    
   },  
     {
    id: 21,
    title: 'Probene',
    type: 'E-commerce',
    segment: 'saúde',
    description: 'E-commerce para a empresa Probene, desde 2002 especialistas em desenvolver e produzir alimentos e suplementos saudáveis, nutricionalmente elaborados e que promovem a saúde e o bem-estar.',
    image: '/images/works/probene/probene-capa.webp',
    otherimages: [
      '/images/works/probene/probene-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://probene.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WooCommerce']    
   }, 
        {
    id: 22,
    title: 'MYA swimwear',
    type: 'E-commerce',
    segment: 'moda',
    description: 'E-commerce para a empresa MYA swimwear, especializada em moda praia, oferecendo produtos de alta qualidade e design exclusivo.',
    image: '/images/works/myaswimwear/mya-swimwear-capa.webp',
    otherimages: [
      '/images/works/myaswimwear/mya-swimwear-capa.webp',
      '/images/services/websites.webp',
      '/images/services/design.webp'
    ],
    link: 'https://myaswimwear.com.br/',
    technologies: ['HTML', 'CSS', 'JavaScript', 'WooCommerce']    
   }, 
]