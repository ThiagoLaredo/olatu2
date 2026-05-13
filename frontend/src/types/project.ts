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

export type Project = {
  id: string;
  title: string;
  type: string;
  segment: ProjectSegment;
  description: string;
  image: string;
  otherimages: string[];
  link: string;
  technologies: string[];
};
