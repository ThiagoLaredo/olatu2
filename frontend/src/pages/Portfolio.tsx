import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../components/HomeSections/FooterSection';
import InternalPageSection from '../components/InternalPageSection/InternalPageSection';
import { getProjects } from '../services/projects';
import type { Project, ProjectSegment } from '../types/project';
import { getWebpSrcSetFromBaseImage } from '../utils/responsiveImages';
import './Portfolio.css';

type ProjectTypeFilter = 'all' | 'website' | 'ecommerce';
type SegmentFilter = 'all' | ProjectSegment;

const typeFilters: Array<{ value: ProjectTypeFilter; label: string }> = [
  { value: 'all', label: 'Todos' },
  { value: 'website', label: 'Websites' },
  { value: 'ecommerce', label: 'E-commerces' },
];

const segmentFilters: Array<{ value: SegmentFilter; label: string }> = [
  { value: 'all', label: 'Todos os segmentos' },
  { value: 'moda', label: 'Moda' },
  { value: 'saúde', label: 'Saúde' },
  { value: 'financeiro', label: 'Financeiro' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'arquitetura', label: 'Arquitetura' },
  { value: 'audiovisual', label: 'Audiovisual' },
  { value: 'educação', label: 'Educação' },
  { value: 'tecnologia', label: 'Tecnologia' },
  { value: 'turismo', label: 'Turismo' }
];

const extractClientName = (title: string) => {
  const match = title.match(/para\s+(.+)$/i);
  if (match?.[1]) {
    return match[1].trim();
  }

  return title;
};

const filterProjectsByType = (items: Project[], filter: ProjectTypeFilter) => {
  if (filter === 'website') {
    return items.filter((project) => project.type === 'Website');
  }

  if (filter === 'ecommerce') {
    return items.filter((project) => project.type === 'E-commerce');
  }

  return items;
};

const getSegmentLabel = (segment: ProjectSegment) => {
  return segmentFilters.find((filter) => filter.value === segment)?.label ?? segment;
};

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [activeTypeFilter, setActiveTypeFilter] = useState<ProjectTypeFilter>('all');
  const [activeSegmentFilter, setActiveSegmentFilter] = useState<SegmentFilter>('all');

  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    getProjects()
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || error || projects.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px 20% 0px',
      }
    );

    mediaRefs.current = [];
    const mediaElements = document.querySelectorAll('.portfolio-card__media');
    mediaElements.forEach((media) => {
      observer.observe(media);
    });

    return () => observer.disconnect();
  }, [loading, error, projects, activeTypeFilter, activeSegmentFilter]);

  const filteredByType = filterProjectsByType(projects, activeTypeFilter);
  const filteredProjects = filteredByType.filter((project) => {
    if (activeSegmentFilter === 'all') return true;
    return project.segment === activeSegmentFilter;
  });

  const getTypeCount = (filter: ProjectTypeFilter) => {
    const projectsInSegment =
      activeSegmentFilter === 'all'
        ? projects
        : projects.filter((project) => project.segment === activeSegmentFilter);

    return filterProjectsByType(projectsInSegment, filter).length;
  };

  const getSegmentCount = (segment: SegmentFilter) => {
    const projectsInType = filterProjectsByType(projects, activeTypeFilter);

    if (segment === 'all') {
      return projectsInType.length;
    }

    return projectsInType.filter((project) => project.segment === segment).length;
  };

  return (
    <>
      <InternalPageSection className="portfolio-page" ariaLabelledby="portfolio-title">
        <div className="portfolio-page__container">
          <h1 className="internal-page-title internal-fade fade-delay-1" id="portfolio-title">Portfólio</h1>
          <p className="portfolio-page__intro internal-fade fade-delay-2">
            Conheça todos os projetos desenvolvidos pela nossa equipe.
          </p>

          {loading && <p className="portfolio-feedback internal-fade fade-delay-3">Carregando projetos...</p>}
          {error && <p className="portfolio-feedback internal-fade fade-delay-3">Erro: {error}</p>}

          {!loading && !error && (
            <>
              <div className="portfolio-filter-groups internal-fade fade-delay-3">
                <h2 className="portfolio-filters-title">Filtrar por</h2>
                <div className="portfolio-filters-wrapper">
                  <div className="portfolio-filter-group">
                    <p className="portfolio-filter-label">Tipo do projeto</p>
                    <div className="portfolio-filters tipo-filters">
                      {typeFilters.map((filter) => (
                        <button
                          key={filter.value}
                          type="button"
                          className={`portfolio-filter-btn${activeTypeFilter === filter.value ? ' is-active' : ''}`}
                          onClick={() => setActiveTypeFilter(filter.value)}
                        >
                          {filter.label} ({getTypeCount(filter.value)})
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio-filter-group">
                    <p className="portfolio-filter-label">Segmento da empresa</p>
                    <div className="portfolio-filters segmento-filters">
                      {segmentFilters.map((filter) => (
                        <button
                          key={filter.value}
                          type="button"
                          className={`portfolio-filter-btn${activeSegmentFilter === filter.value ? ' is-active' : ''}`}
                          onClick={() => setActiveSegmentFilter(filter.value)}
                        >
                          {filter.label} ({getSegmentCount(filter.value)})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="portfolio-grid internal-fade fade-delay-4">
                {filteredProjects.map((project, index) => (
                  <article className="portfolio-card" key={project.id}>
                    <Link
                      className="portfolio-card__link"
                      to={`/portfolio/${project.id}`}
                      aria-label={`Abrir projeto ${extractClientName(project.title)}`}
                    >
                      <div
                        className="portfolio-card__media fade-up-enter"
                        style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
                        ref={(el) => {
                          mediaRefs.current[index] = el;
                        }}
                      >
                        <picture>
                          <source
                            type="image/webp"
                            srcSet={getWebpSrcSetFromBaseImage(project.image)}
                            sizes="(max-width: 900px) 100vw, 50vw"
                          />
                          <img
                            className="portfolio-card__image"
                            src={project.image}
                            alt={`${extractClientName(project.title)} - ${project.type}`}
                            loading="lazy"
                            decoding="async"
                            sizes="(max-width: 900px) 100vw, 50vw"
                          />
                        </picture>
                      </div>
                    </Link>
                    <div className="portfolio-card__content">
                      <h3 className="portfolio-card__title">{extractClientName(project.title)}</h3>
                      <p className="portfolio-card__type">
                        {project.type} • {getSegmentLabel(project.segment)}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <p className="portfolio-feedback internal-fade fade-delay-4">Nenhum projeto encontrado nessa categoria.</p>
              )}
            </>
          )}
        </div>
      </InternalPageSection>
      <FooterSection />
    </>
  );
};

export default Portfolio;
