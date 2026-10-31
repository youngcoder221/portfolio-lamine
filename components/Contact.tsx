"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const subject = encodeURIComponent(`Nouveau contact portfolio de ${(form.elements.namedItem("name") as HTMLInputElement).value}`);
    const body = encodeURIComponent((form.elements.namedItem("message") as HTMLTextAreaElement).value);
    
    // Déclenche l'envoi d'email directement via le client de messagerie
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Colonne Gauche : Coordonnées & Message d'accroche */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 mb-4">
              Discutons d&apos;un <span className="text-emerald-400">projet</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Vous êtes à la recherche d&apos;un profil rigoureux en développement logiciel, 
              d&apos;un renfort frontend React ou full-stack ? N&apos;hésitez pas à m&apos;écrire.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium hover:text-emerald-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Localisation</p>
                <p className="text-sm font-medium">{personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Formulaire interactif */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Votre Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Ex. Amadou Diallo"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Votre Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="nom@entreprise.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Votre message ici..."
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-600 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
            >
              Envoyer le message
            </button>

            {submitted && (
              <p className="text-center text-xs text-emerald-400 pt-2 animate-fade-in">
                ✓ Préparation de votre message dans votre messagerie...
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}