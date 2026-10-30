import Link from "next/link";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-lg tracking-wider text-slate-100 hover:text-emerald-400 transition-colors"
        >
          LN<span className="text-emerald-400">.</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <Link href="#a-propos" className="hover:text-slate-100 transition-colors">
            À propos
          </Link>
          <Link href="#projets" className="hover:text-slate-100 transition-colors">
            Projets
          </Link>
          <Link href="#competences" className="hover:text-slate-100 transition-colors">
            Compétences
          </Link>
          <Link href="#formation" className="hover:text-slate-100 transition-colors">
            Parcours
          </Link>
        </nav>

        <div>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 border border-emerald-400/30 rounded-lg hover:bg-emerald-400/10 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </header>
  );
}