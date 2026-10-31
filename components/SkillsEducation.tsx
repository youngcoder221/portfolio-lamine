import { skills, educations } from "@/data/portfolioData";

export default function SkillsEducation() {
  return (
    <section id="competences" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900">
      
      {/* 1. SECTION COMPÉTENCES */}
      <div className="mb-24">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">
            Compétences <span className="text-emerald-400">techniques</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Un socle solide entre conception logicielle, développement applicatif et culture du déploiement cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bloc Frontend */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Développement Front-End
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bloc Backend & Langages */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Back-End & Génie Logiciel
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-emerald-300 border border-slate-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bloc Bases de données */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Données & Conception
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-amber-300 border border-slate-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bloc Cloud & Outils */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors">
            <h3 className="text-lg font-bold text-slate-100 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-400"></span>
              Cloud, DevOps & Outils
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.cloudDevops.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/80 text-violet-300 border border-slate-700/50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. SECTION FORMATIONS & PARCOURS */}
      <div id="formation">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">
            Parcours & <span className="text-emerald-400">Formations</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            L&apos;alliance d&apos;une double formation universitaire pour conjuguer vision logicielle et expertise web.
          </p>
        </div>

        {/* Timeline verticale */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-800">
          {educations.map((edu, idx) => (
            <div key={idx} className="relative flex items-start gap-6 pl-10">
              {/* Puce lumineuse de la timeline */}
              <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-slate-950"></div>
              
              <div className="flex-1 rounded-xl border border-slate-800/80 bg-slate-900/30 p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-slate-100">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-1">{edu.institution}</p>
                <span className="text-xs text-slate-500 font-medium">{edu.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}