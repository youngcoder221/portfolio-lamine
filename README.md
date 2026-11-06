# Portfolio Professionnel — Lamine Ndong

[![Production](https://img.shields.io/badge/Status-Production%20Live-emerald?style=for-the-badge)](https://portfolio-lamine-eta.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16%2B-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com/)

Vitrine technique et portfolio personnel de **Lamine Ndong**, étudiant en double cursus Licence 3 (Génie Logiciel & Développement Web), développeur Full-Stack orienté performances, conception logicielle et écosystème JavaScript moderne.

🌐 **Lien en production** : [https://portfolio-lamine-eta.vercel.app](https://portfolio-lamine-eta.vercel.app)

---

## 🎯 Objectifs & Principes de Conception

Ce projet a été conçu selon les standards des portfolios d'ingénieurs les plus reconnus (répertoire *emmabostian/developer-portfolios*) :

- **Performance brute (Core Web Vitals)** : Rendu statique pré-compilé (SSG) via Next.js App Router pour un chargement instantané.
- **Séparation des responsabilités (SoC)** : Données centralisées dans une source de vérité unique (`data/portfolioData.ts`), découplée de la couche de rendu.
- **Accessibilité (A11y)** : Respect des contrastes WCAG AA, balisage sémantique strict et focus states visibles pour la navigation au clavier.
- **Responsive Mobile-First** : Grilles fluides et adaptatives calibrées pour tout type d'écran.
- **Zéro dépendance superflue** : Architecture légère, sans backend lourd inutile, formulaires traités nativement.

---

## 🛠️ Stack Technologique

| Domaine | Outil / Technologie | Justification Technique |
| :--- | :--- | :--- |
| **Framework** | **Next.js (App Router)** | Génération de site statique (SSG), SEO optimisé et routage moderne. |
| **Styling** | **Tailwind CSS** | Design system utilitaire, compilation CSS purgée et maintenance facilitée. |
| **Langage** | **TypeScript / JavaScript ES6+** | Typage statique des modèles de données et rigueur syntaxique. |
| **Hébergement** | **Vercel Edge Network** | Déploiement continu (CI/CD) synchronisé sur la branche de production. |
| **Gestion de versions** | **Git / GitHub** | Stratégie de branches d'équipe avec Pull Requests et Conventional Commits. |

---

## 🌳 Stratégie de Branches (Git Workflow)

Ce projet applique un **GitHub Flow rigoureux** simulant le fonctionnement d'une équipe d'ingénierie logicielle :

```text
main (Production déployée sur Vercel)
  ▲
  │ Pull Request (Releases stables)
  │
develop (Intégration continue)
  ▲
  ├── feature/hero-section
  ├── feature/projects-section
  ├── feature/skills-and-education
  ├── feature/contact-and-footer
  └── chore/technical-readme
```

- `main` : Branche protégée, reflétant exactement la production en ligne.
- `develop` : Branche d'intégration où sont fusionnées les fonctionnalités validées.
- `feature/*` & `chore/*` : Branches de travail isolées, fusionnées uniquement via Pull Requests relues.

---

## 🚀 Installation & Lancement en Local

### Prérequis
- **Node.js** version 20+ (recommandé v22)
- **npm** ou **yarn**

### Étapes d'installation

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/youngcoder221/portfolio-lamine.git
   cd portfolio-lamine
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement local :**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:3000`.

4. **Tester le build de production :**
   ```bash
   npm run build
   ```

---

## 📁 Architecture du Projet

```text
portfolio-lamine/
├── app/                  # Next.js App Router (pages, layout global, styles)
│   ├── globals.css       # Définition des variables de thème et Tailwind
│   ├── layout.tsx        # Métadonnées SEO, typographie et conteneur HTML racine
│   └── page.tsx          # Composition modulaire de la page d'accueil
├── components/           # Composants d'interface isolés et réutilisables
│   ├── Navbar.tsx        # Navigation principale fixe avec backdrop-blur
│   ├── Hero.tsx          # Section d'accroche avec CTA et liens sociaux
│   ├── Projects.tsx      # Grille des réalisations avec statut et tags
│   ├── SkillsEducation.tsx # Matrice des compétences & Timeline de formation
│   ├── Contact.tsx       # Formulaire interactif et coordonnées directes
│   └── Footer.tsx        # Pied de page avec liens d'accessibilité et copyright
├── data/                 # Modèle de données centralisé
│   └── portfolioData.ts  # Source de vérité (projets, formations, coordonnées)
└── public/               # Ressources statiques (CV PDF, favicon, assets)
```

---

## 👤 Auteur

**Lamine Ndong**
- **GitHub** : [@youngcoder221](https://github.com/youngcoder221)
- **LinkedIn** : [Lamine Ndong](https://www.linkedin.com/in/lamine-ndong7)
- **Email** : [laminendong087@gmail.com](mailto:laminendong087@gmail.com)