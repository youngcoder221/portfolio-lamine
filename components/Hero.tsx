import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="a-propos" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Disponible pour de nouvelles opportunités
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100">
            Bonjour, je suis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {personalInfo.name}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
            {personalInfo.role}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>

          {/* Boutons d'action et Liens Réseaux Sociaux */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <Link
              href="#projets"
              className="px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              Découvrir mes projets
            </Link>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-semibold text-sm transition-all"
            >
              Télécharger mon CV
            </a>

            {/* Liens Réseaux Sociaux GitHub & LinkedIn */}
            <div className="flex items-center gap-3 pl-2">
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800 transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}

              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-800 transition-all"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}