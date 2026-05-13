import { projects } from '../data/mockProjects';
import type { Project } from '../types/project';

export const getProjects = async (): Promise<Project[]> => {
  return Promise.resolve(projects);
};

export const getProjectById = async (id: string): Promise<Project> => {
  const project = projects.find(p => p.id === id);
  if (project) {
    return Promise.resolve(project);
  }
  throw new Error('Projeto não encontrado');
};
