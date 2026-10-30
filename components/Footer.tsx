import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-slate-900 bg-slate-950 text-slate-500 text-xs">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p>© 2026 {personalInfo.name}. Tous droits réservés.</p>
        </div>

        <div>
          <p className="flex items-center gap-1">
            Conçu & développé avec{" "}
            <span className="text-slate-300 font-medium">Next.js</span> &{" "}
            <span className="text-slate-300 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}