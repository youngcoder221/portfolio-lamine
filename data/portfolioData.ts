export interface Project {
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  type: string;
}

export const personalInfo = {
  name: "Lamine Ndong",
  role: "Développeur Full-Stack & Génie Logiciel",
  location: "Dakar, Sénégal",
  bio: "Étudiant en double cursus Licence 3 (Génie Logiciel & Développement Web). Passionné par la conception d'architectures applicatives modernes, de l'UI/UX soignée jusqu'au déploiement cloud performant.",
  email: "laminendong087@gmail.com",
  github: "https://github.com/TON-PSEUDO-GITHUB", // N'oublie pas de mettre ton vrai pseudo
  linkedin: "https://www.linkedin.com/in/ton-profil", // À mettre à jour si tu en as un
  resumePath: "/resume.pdf", // Emplacement de ton CV pour le bouton de téléchargement
};

export const skills = {
  frontend: ["React.js", "Angular", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5/CSS3"],
  backend: ["Node.js", "Express.js", "Java", "C/C++", "Python (Bases)"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Modélisation UML / Merise"],
  cloudDevops: ["Git / GitHub", "Vercel", "Render", "Railway", "Aiven", "Linux (Ubuntu/Debian)"],
};

export const projects: Project[] = [
  {
    title: "ATS Intelligent - Analyseur de CV",
    tagline: "Projet de fin d'études Licence 3 - Génie Logiciel",
    description: "Application d'analyse automatique de CV basée sur une stack MERN couplée à une API d'Intelligence Artificielle pour le matching de compétences et l'aide au recrutement.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "AI API", "Tailwind CSS"],
    githubUrl: "https://github.com/TON-PSEUDO-GITHUB",
    liveUrl: "", // Sera mis à jour une fois déployé
    featured: true,
  },
  {
    title: "Application Web de Gestion Scolaire",
    tagline: "Plateforme de gestion administrative & académique",
    description: "Système complet de suivi académique, gestion des inscriptions, notes et rôles d'utilisateurs avec authentification sécurisée par JWT et base relationnelle.",
    tags: ["React.js", "Express.js", "MySQL", "JWT", "Tailwind CSS"],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Application Météo Interactive",
    tagline: "Dashboard météo temps réel",
    description: "Application dynamique consommant une API tierce pour afficher les prévisions météorologiques géolocalisées avec gestion des états asynchrones.",
    tags: ["Angular", "TypeScript", "REST API", "Tailwind CSS"],
    githubUrl: "https://github.com/TON-PSEUDO-GITHUB",
    liveUrl: "",
    featured: false,
  },
];

export const educations: Education[] = [
  {
    degree: "Licence 3 Informatique - Génie Logiciel",
    institution: "ICAGI Amadou Mahtar Mbow",
    period: "2023 - 2026",
    type: "Cursus Privé",
  },
  {
    degree: "Licence 3 Informatique - Développement Web",
    institution: "Université Numérique Cheikh Hamidou Kane",
    period: "2023 - 2026",
    type: "Cursus Public",
  },
  {
    degree: "Certificat Développeur FRONT-END",
    institution: "FORCE-N",
    period: "2025",
    type: "Certification",
  },
];