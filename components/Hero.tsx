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
            Bonjour, je suis <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{personalInfo.name}</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-300">
            {personalInfo.role}
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>

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
          </div>
        </div>
      </div>
    </section>
  );
}