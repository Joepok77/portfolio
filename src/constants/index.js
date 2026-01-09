import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  //reactjs,
  //redux,
  //tailwind,
  nodejs,
  alpinejs,
  angular,
  c,
  github,
  googleCloud,
  //intellij,
  intellijIdea,
  java,
  kotlin,
  mysql,
  php,
  postgresql,
  python,
  sql,
  symfony,
  vscode,
  vuejs,

  mongodb,
  git,
  figma,
  docker,


  //meta,
  //starbucks,
  //tesla,
  //shopify,
  Redland,
  kiiCoaching,
  scor,

  //carrent,
  //jobit,
  //tripguide,
  pong,
  extraplay,
  xamaflix,
  threejs,
  pubcoder,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "projet réalisé",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur Web",
    icon: web,
  },
  {
    title: "Développeur Frontend",
    icon: mobile,
  },
  {
    title: "Développeur Backend",
    icon: backend,
  },
  {
    title: "Développeur d'Applications en JavaScript",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: "Avancé",
  },
  {
    name: "CSS 3",
    icon: css,
    level: "Avancé",
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: "Intermédiaire",
  },
  {
    name: "TypeScript",
    icon: typescript,
    level: "en Apprentissage",
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: "en Apprentissage ",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: "Intermédiaire",
  },
  {
    name: "Three JS",
    icon: threejs,
    level: "Intermédiaire",
  },
  {
    name: "Git",
    icon: git,
    level: "Avancé",
  },
  {
    name: "GitHub",
    icon: github,
    level: "Avancé",
  },
  {
    name: "Figma",
    icon: figma,
    level: "Intermédiaire",
  },
  {
    name: "Docker",
    icon: docker,
    level: "Intermédiaire",
  },
  {
    name: "Alpine.js",
    icon: alpinejs,
    level: "Intermédiaire",
  },
  {
    name: "Vue.js",
    icon: vuejs,
    level: "en Apprentissage",
  },
  {
    name: "Angular",
    icon: angular,
    level: "en Apprentissage",
  },
  {
    name: "PHP",
    icon: php,
    level: "Intermédiaire",
  },
  {
    name: "MySQL",
    icon: mysql,
    level: "Avancé",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    level: "Intermédiaire",
  },
  {
    name: "Python",
    icon: python,
    level: "Débutant",
  },
  {
    name: "Symfony",
    icon: symfony,
    level: "Débutant",
  },
  {
    name: "C",
    icon: c,
    level: "Intermédiaire",
  },
  {
    name: "Kotlin",
    icon: kotlin,
    level: "en Apprentissage",
  },
 
  {
    name: "Google Cloud",
    icon: googleCloud,
    level: "Débutant",
  },
  {
    name: "VS Code",
    icon: vscode,
    level: "Avancé",
  },
  {
    name: "Java",
    icon: java,
    level: "Intermédiaire",
  },
  {
    name: "SQL",
    icon: sql,
    level: "Avancé",
  },
  {
    name: "IntelliJ IDEA",
    icon: intellijIdea,
    level: "Avancé",
  },
];


const experiences = [
  {
    title: "Alternant Développeur Full-Stack",
    company_name: "SCOR",
    icon: scor,
    iconBg: "#E6DEDD",
    date: "septembre 2025 - août 2026",
    points: [
      "IT Functional – Industrialization & Automation : développement d'applications internes et d'outils d'automatisation.",
      "Développement front-end (React, TypeScript) et back-end (Node.js) sur des applications internes.",
      "Mise en place de solutions d'automatisation avec intégration d'agents IA.",
      "Contribution à la création d'interfaces et d'outils pour améliorer la productivité interne.",
    ],
  },

  {
    title: "Stage de Développeur Web",
    company_name: "EP Conseil – Kii Coaching",
    icon: kiiCoaching,
    iconBg: "#383E56",
    date: "avril 2025 - juillet 2025",
    points: [
      "Refonte complète du site WordPress orienté coaching et bien-être professionnel.",
      "Intégration de pages clés (contact, prise de rendez-vous) et création de formulaires interactifs en HTML/CSS.",
      "Optimisation SEO, mise en place d'un design responsive et amélioration des performances (vitesse, sécurité).",
      "Intégration d'avis Google, newsletter, carte Google Maps et système de réservation en ligne.",
      "Développement d'une forte autonomie et montée en compétences sur WordPress en collaboration avec la dirigeante.",
    ],
  },

  {
    title: " stage de developpeur application en JavaScript",
    company_name: "RedLand Studio",
    icon: Redland,
    iconBg: "#E6DEDD",
    date: "avril 2024 - juillet 2024",
    points: [
      "Création d'une application interactive de quiz d'anglais pour enfants à l'aide de l'outil PubCoder, permettant d'intégrer des animations et des interactions intuitives.",
      "Développement de fonctionnalités personnalisées en JavaScript pour enrichir l'expérience utilisateur et répondre aux besoins pédagogiques.",
      "Conception d'interfaces attractives et adaptées aux enfants, tout en assurant une navigation fluide.",
      "Test et optimisation des performances de l'application pour garantir une utilisation sans problème sur différents appareils.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Xamaflix",
    description:
      "Application de streaming de films construite avec React et l'API TMDB. Fonctionnalités : recherche de films en temps réel avec debounce, filtrage par genres, page de détails avec casting, système de likes, et design sombre type Netflix.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: xamaflix,
    source_code_link: "https://github.com/Joepok77/Xamaflix",
  },
  {
    name: "extraplay",
    description:
      "Extraplay est un site web qui offre trois mini-jeux fonctionnels, avec des fonctionnalités telles que des offres abonnement, un système de connexion et d'inscription, ainsi qu'une foire aux questions.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: extraplay,
    source_code_link: "https://github.com/Joepok77/extraplay.git",
  },
  {
    name: "pingpong-3d",
    description:
      "Un simple jeu de ping-pong à deux joueurs qui permet de s'affronter dans un environnement 3d. Conçu avec ombres et mur rebondissant le premier a 5 a gagné.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: pong,
    source_code_link: "https://github.com/Joepok77/pingpong-3d",
  },
  {
    name: "Vocabulary Quest",
    description:
      "L'objectif est de développer une application interactive ludique et éducative visant à améliorer les compétences en anglais des utilisateurs de 7 à 12 ans à travers des quiz. L'application sera agrémentée d'un élément de jeu où les utilisateurs interagissent avec des monstres virtuels en répondant correctement aux questions. Pour chaque réponse correcte, le monstre recevra des coeurs, et pour chaque réponse incorrecte, l'utilisateur perdra des coeurs et au bout de 5 erreur il devra recommencer.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Pubcoder",
        color: "green-text-gradient",
      },
      
      
    ],
   video: pubcoder,
   
  },
];

export { services, technologies, experiences, testimonials, projects };
