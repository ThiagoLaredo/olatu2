import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FooterSection from '../components/HomeSections/FooterSection';
import '../components/CtaLinkButton/CtaLinkButton.css';
import InternalPageSection from '../components/InternalPageSection/InternalPageSection';
import { getProjectById } from '../services/projects';
import type { Project } from '../types/project';
import { getWebpSrcSetFromBaseImage } from '../utils/responsiveImages';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const projectId = Number(id);

    if (!projectId || Number.isNaN(projectId)) {
      setError('Projeto invalido.');
      setLoading(false);
      return;
    }

    getProjectById(projectId)
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <InternalPageSection className="project-details">
          <div className="project-details__container">
            <p className="project-details__feedback internal-fade fade-delay-1">Carregando projeto...</p>
          </div>
        </InternalPageSection>
        <FooterSection />
      </>
    );
  }

  if (error || !project) {
    return (
      <>
        <InternalPageSection className="project-details">
          <div className="project-details__container">
            <p className="project-details__feedback internal-fade fade-delay-1">Erro: {error || 'Projeto nao encontrado.'}</p>
            <Link className="project-details__back-link internal-fade fade-delay-2" to="/portfolio">Voltar para portfolio</Link>
          </div>
        </InternalPageSection>
        <FooterSection />
      </>
    );
  }

  const galleryImages = project.otherimages.filter((image) => image !== project.image);

  return (
    <>
      <InternalPageSection className="project-details" ariaLabelledby="project-details-title">
        <div className="project-details__container">
          <div className="project-details__layout">
            <aside className="project-details__info">
              <p className="project-details__type internal-fade fade-delay-1">{project.type}</p>
              <h1 className="internal-page-title internal-fade fade-delay-2" id="project-details-title">{project.title}</h1>
              <p className="project-details__description internal-fade fade-delay-3">{project.description}</p>

              <h2 className="internal-fade fade-delay-3">Tecnologias</h2>
              <ul className="project-details__technologies internal-fade fade-delay-4">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-details__actions internal-fade fade-delay-5">
                <a href={project.link} target="_blank" rel="noreferrer" className="cta-link-button project-details__visit">
                  <span className="cta-link-button__label">Visitar projeto</span>
                  <span className="cta-link-button__icon" aria-hidden="true">+</span>
                </a>
                <Link className="project-details__back-link" to="/portfolio">Voltar para portfolio</Link>
              </div>
            </aside>

            <div className="project-details__gallery internal-fade fade-delay-4" aria-label="Galeria do projeto">
              {galleryImages.map((image, index) => (
                <figure className="project-details__image-wrap" key={`${image}-${index}`}>
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={getWebpSrcSetFromBaseImage(image)}
                      sizes="(max-width: 980px) 100vw, 58vw"
                    />
                    <img
                      src={image}
                      alt={`${project.title} - imagem ${index + 1}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      sizes="(max-width: 980px) 100vw, 58vw"
                    />
                  </picture>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </InternalPageSection>
      <FooterSection />
    </>
  );
};

export default ProjectDetails;
