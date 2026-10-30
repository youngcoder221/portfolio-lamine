import { projects } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6 max-w-5xl mx-auto">
      {/* En-tête de section */}
      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">
          Projets <span className="text-emerald-400">réalisés</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
          Une sélection de projets académiques et personnels illustrant mes compétences
          en conception logicielle, développement full-stack et intégration d&apos;APIs.
        </p>
      </div>

      {/* Grille des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-7 transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-emerald-500/5 ${
              project.featured ? "md:col-span-2 md:p-8 border-emerald-500/30 bg-slate-900/80" : ""
            }`}
          >
            <div>
              {/* En-tête de la carte */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                  {project.tagline}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    Projet Phare
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-3 hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Liste des tags technologiques */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Boutons d'action (Code GitHub & Démo) */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 text-sm font-medium">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Code source
                  </a>
                )}

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Voir la démo
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 italic">
                    Déploiement en cours
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}