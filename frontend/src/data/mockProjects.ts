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
      '/images/works/abofilmes/abo-filmes-5.webp'
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
];
