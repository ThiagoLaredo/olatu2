import type { Project } from '../types/project';

export const getProjects = async (): Promise<Project[]> => {
  const response = await fetch('/api/projects');

  if (!response.ok) {
    throw new Error('Erro ao carregar projetos');
  }

  return response.json() as Promise<Project[]>;
};

export const getProjectById = async (id: number): Promise<Project> => {
  const response = await fetch(`/api/projects/${id}`);

  if (!response.ok) {
    throw new Error('Projeto nao encontrado');
  }

  return response.json() as Promise<Project>;
};
