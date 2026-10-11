import {
  Code2, Server, Monitor, Smartphone, Brain, Database, Container, Globe,
} from 'lucide-react';

// ─── Informations personnelles ───────────────────────────────────────────────
export const personalInfo = {
  name: 'Zineb El Khalifi',
  title: 'Étudiante ingénieure ISIC | Développement Web & Backend | Intelligence Artificielle',
  tagline: 'Je conçois des applications web et des solutions d\'IA utiles, de l\'idée à la mise en production.',
  location: 'Casablanca, Maroc',
  email: 'zinebelkhalifi096@gmail.com',
  phone: '+212 726-272083',
  github: 'https://github.com/zinebelkhalifi096-dot',
  linkedin: 'https://www.linkedin.com/in/zineb-e-865826288/',
  cvPath: '/cv-zineb-el-khalifi.pdf', // À REMPLACER : déposer le PDF dans public/
  // À REMPLACER : remplacer par le chemin de ta vraie photo dans public/
  profilePhoto: null,
  stageInfo: 'Disponible pour un stage PFE – février 2027',
};

// ─── Titres animés (typing) ──────────────────────────────────────────────────
export const typingTitles = [
  'Développeuse Web & Backend',
  'Passionnée d\'IA',
  'Étudiante ingénieure',
];

// ─── À propos ────────────────────────────────────────────────────────────────
export const aboutText = `Étudiante en cycle ingénieur Systèmes d'Information et de Communication (ISIC) à l'ENSA El Jadida, je développe une double compétence en développement web/mobile et en intelligence artificielle (machine learning, LLM locaux, RAG). Curieuse, autonome et à l'aise en équipe, j'aime transformer des idées en solutions concrètes et bien conçues.`;

export const keyFigures = [
  { number: '2', label: 'Stages réalisés' },
  { number: '5+', label: 'Projets livrés' },
  { number: '15+', label: 'Technologies' },
];

// ─── Compétences ─────────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Langages',
    icon: Code2,
    skills: ['Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Django', 'FastAPI', 'Spring Boot', 'API REST', 'Swagger', 'JWT', 'Keycloak'],
  },
  {
    title: 'Frontend',
    icon: Monitor,
    skills: ['React', 'HTML/CSS', 'Thymeleaf'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['Android (Java)', 'Flutter', 'React Native', 'Firebase'],
  },
  {
    title: 'Intelligence Artificielle',
    icon: Brain,
    skills: ['Machine Learning', 'Scikit-learn', 'LLM locaux', 'RAG', 'Ollama'],
  },
  {
    title: 'Bases de données',
    icon: Database,
    skills: ['MySQL', 'MariaDB'],
  },
  {
    title: 'DevOps & Outils',
    icon: Container,
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'GitLab', 'CI/CD'],
  },
  {
    title: 'Langues',
    icon: Globe,
    skills: [
      { name: 'Arabe', level: 'Langue maternelle', percent: 100 },
      { name: 'Français', level: 'Courant', percent: 85 },
      { name: 'Anglais', level: 'Intermédiaire', percent: 60 },
    ],
  },
];

// ─── Expériences ─────────────────────────────────────────────────────────────
export const experiences = [
  {
    title: 'Stagiaire IA',
    company: 'CIH Bank — AI Factory',
    location: 'Casablanca',
    period: 'Juillet – Août 2026',
    duration: '2 mois',
    description: [
      'Conception d\'un outil Python de documentation automatique de projets logiciels pour faciliter l\'intégration des nouveaux collaborateurs.',
      'Récupération des dépôts via les API GitHub/GitLab et génération de documentation structurée (MkDocs) en français et anglais.',
      'Intégration dans un pipeline GitLab CI/CD et mise en place d\'un chatbot documentaire (RAG) avec des modèles locaux (Ollama).',
      'Tests comparatifs de plusieurs modèles et validation des résultats en équipe.',
    ],
    tags: ['Python', 'RAG', 'Ollama', 'GitLab CI/CD', 'MkDocs'],
  },
  {
    title: 'Stagiaire Développement Python',
    company: 'OCP',
    location: 'Khouribga',
    period: 'Juillet 2025',
    duration: '1 mois',
    description: [
      'Développement avec Python/Django et participation à la gestion et à la correction des incidents.',
      'Travail en équipe avec suivi régulier de l\'encadrant technique.',
    ],
    tags: ['Python', 'Django'],
  },
];

// ─── Projets ─────────────────────────────────────────────────────────────────
export const projectCategories = ['Tous', 'Web', 'IA', 'Mobile'];

export const projects = [
  {
    title: 'VIGIPHOS',
    category: 'Web',
    badge: 'Projet OCP',
    role: '[À COMPLÉTER]',
    summary: 'Plateforme web de gestion et de suivi des incidents techniques conçue pour le site OCP de Khouribga avec le framework Django.\nElle structure le traitement des pannes à travers trois profils d\'accès distincts : administrateur, techniciens N1 à N3 et utilisateurs demandeurs.\nDéveloppée en architecture MVC avec base de données SQLite, l\'application a été finalisée et testée en environnement local.',
    tags: ['Python', 'Django', 'SQLite', 'Bootstrap', 'HTML/CSS', 'JavaScript'],
    github: '',
    demo: '',
    images: [
      {
        src: '/projects/vigiphos/02-accueil-technicien.jpeg',
        title: 'Accueil technicien',
        caption: 'Accueil personnalisé orientant le technicien vers ses incidents assignés.',
        description: 'Page d\'accueil affichée après connexion avec un profil technicien. Elle présente un message de bienvenue nominatif et un accès direct à la liste des incidents assignés. La barre de navigation propose des entrées propres à ce profil : tableau de bord, incidents et notifications.',
        alt: 'Page d\'accueil de la plateforme VIGIPHOS pour un technicien, avec message de bienvenue et bouton d\'accès aux incidents.',
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/07-dashboard-admin.jpeg',
        title: 'Tableau de bord administrateur',
        caption: 'Console de supervision globale affichant les indicateurs clés d\'exploitation et la répartition des incidents.',
        description: 'Vue d\'ensemble destinée à l\'administrateur affichant des compteurs consolidés (27 interventions au total, 9 en attente, 11 terminées). L\'interface ventile les données selon les rôles d\'utilisateurs, les états de traitement (Nouveau, En cours, Résolu, Clôturé, Annulé) et présente des métriques de temps moyen de résolution et de respect des délais.',
        alt: 'Tableau de bord administrateur avec compteurs d\'incidents, statistiques par statut et par rôle utilisateur.',
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/08-gestion-incidents.jpeg',
        title: 'Gestion centralisée des incidents',
        caption: 'Registre exhaustif des tickets d\'incidents permettant le filtrage, l\'affectation et le suivi des demandes.',
        description: 'Tableau d\'administration répertoriant l\'ensemble des signalements enregistrés sur la plateforme avec leur référence unique (INC-2025-00XX). Pour chaque entrée, l\'administrateur visualise le titre, la date, l\'état d\'avancement, le degré d\'urgence, le demandeur et le technicien assigné. Des boutons d\'action permettent de consulter la fiche, d\'affecter un intervenant ou de modifier le ticket.',
        alt: 'Tableau complet de gestion des incidents avec références, statuts colorés, demandeurs et boutons d\'affectation.',
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/09-affecter-technicien.jpeg',
        title: "Affectation d'un technicien",
        caption: "Fenêtre de dialogue dédiée à l'attribution d'un incident technique à un intervenant qualifié.",
        description: "Boîte de dialogue modale superposée à la fiche de l'incident #27. Elle permet à l'administrateur de désigner le technicien responsable de la prise en charge de la panne via une liste de sélection. L'opération met à jour le statut du ticket et rattache l'intervention au dossier du technicien choisi.",
        alt: "Fenêtre modale d'affectation d'un technicien à un ticket d'incident avec liste de sélection et bouton de validation.",
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/05-dashboard-technicien.jpeg',
        title: 'Tableau de bord technicien',
        caption: "Vue de synthèse regroupant les métriques d'intervention, la liste des tâches récentes et les raccourcis d'action.",
        description: "Espace de travail réservé au profil technicien présentant des compteurs de suivi (5 incidents assignés, 2 en cours, 3 terminés comme données de test). La page intègre un tableau des cinq incidents récents avec leur priorité et leur statut, ainsi que des blocs récapitulatifs par catégorie, par niveau d'urgence et des indicateurs de performance.",
        alt: "Tableau de bord du profil technicien affichant des compteurs d'incidents, un tableau d'interventions récentes et des indicateurs de suivi.",
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/06-planification.jpeg',
        title: 'Planification des interventions',
        caption: "Calendrier hebdomadaire organisant les créneaux d'intervention technique sur les équipements du site.",
        description: "Vue calendaire affichant la répartition des interventions sur la semaine du 21 au 27 juillet 2025. Cinq fiches d'intervention sont positionnées sur la journée du mardi 22 avec le détail du matériel concerné. Des indicateurs en haut de page récapitulent le nombre total d'interventions planifiées et la charge attribuée au technicien.",
        alt: "Calendrier hebdomadaire de planification des interventions techniques avec fiches de tâches réparties par jour.",
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/03-mes-incidents.jpeg',
        title: 'Liste des incidents assignés',
        caption: 'Vue tabulaire permettant au technicien de filtrer, consulter et mettre à jour ses interventions en cours.',
        description: "Interface affichant les tickets d'incidents affectés au technicien connecté sous forme de tableau. Chaque ligne regroupe la référence (INC-2025-00XX), le titre, le statut, la priorité, le demandeur et les boutons d'action. Des filtres par mot-clé, statut et niveau d'urgence permettent de retrouver rapidement un incident.",
        alt: "Tableau de gestion des incidents assignés au technicien avec filtres de recherche, statuts colorés et boutons d'action.",
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/10-modifier-incident.jpeg',
        title: "Formulaire d'édition d'incident",
        caption: "Interface de mise à jour des caractéristiques d'un ticket et de gestion des pièces jointes.",
        description: "Formulaire permettant de mettre à jour les données d'un incident technique existant. Il regroupe la modification du titre, de la catégorie (Réseau, Matériel, etc.), de la description détaillée, du niveau d'urgence et du statut. Une zone de dépôt de fichiers permet d'associer des documents et captures justificatives au format JPG, PNG ou PDF.",
        alt: "Formulaire de modification d'un incident avec champs de saisie, sélection de catégorie et zone de dépôt de pièces jointes.",
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
      {
        src: '/projects/vigiphos/11-gestion-utilisateurs.jpeg',
        title: 'Administration des utilisateurs',
        caption: 'Tableau récapitulatif des comptes de la plateforme avec gestion des rôles et des accès.',
        description: 'Interface réservée à l\'administrateur affichant la liste des comptes enregistrés avec leur identifiant, nom complet, courriel, profil (Administrateur, Technicien Niveau 1 à 3, Utilisateur) et état d\'activité. La barre supérieure propose des filtres de recherche et un bouton d\'accès au formulaire de création. Chaque ligne dispose de commandes de consultation, de modification et de suppression.',
        alt: 'Tableau d\'administration des comptes utilisateurs avec rôles, statuts d\'activité et boutons d\'action.',
        tags: ['Python', 'Django', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'SQLite'],
      },
    ],
  },
  {
    title: 'Doc Generator IA',
    category: 'IA',
    badge: 'CIH Bank',
    role: "Stagiaire AI Factory : conception et développement complet de l'outil (analyse de code, génération par LLM local, intégration GitLab CI/CD, chatbot RAG)",
    summary: "Outil conçu lors d'un stage à l'AI Factory de CIH Bank pour documenter des projets logiciels sous contrainte stricte de confidentialité bancaire, sans aucun recours au cloud.\nIl exploite des LLM locaux (Qwen2.5, Mistral 7B via Ollama) et des embeddings nomic-embed-text pour analyser le code, détecter les endpoints d'API et produire une documentation structurée MkDocs.\nLe système s'intègre dans GitLab CI/CD avec un cache par empreinte SHA-256 et une validation humaine à trois niveaux incluant un chatbot documentaire RAG.",
    tags: ['Python', 'Ollama', 'Qwen2.5', 'Mistral', 'RAG', 'GitLab CI/CD', 'MkDocs'],
    github: '',
    demo: '',
    images: [
      {
        src: '/projects/doc-generator/01-architecture.png',
        title: 'Architecture logicielle du projet',
        caption: "Vue synthétique de l'organisation des modules et des fichiers générée au format MkDocs.",
        description: "Page de documentation décrivant la structure globale d'un référentiel de code analysé. Elle répertorie les répertoires clés, les modules principaux et leur rôle au sein de l'application. La table des matières latérale structure la navigation entre les composants et les diagrammes de conception.",
        alt: "Interface de documentation MkDocs détaillant l'architecture et les modules d'un projet Python.",
        tags: ['Python', 'MkDocs', 'Material for MkDocs', 'Ollama'],
      },
      {
        src: '/projects/doc-generator/03-explication-code.png',
        title: 'Explication détaillée des fichiers source',
        caption: 'Descriptions en français du rôle de chaque fichier et classe produites par modèle de langage.',
        description: "Section présentant l'analyse fonctionnelle des scripts du projet fichier par fichier. Les paragraphes explicitent le rôle des modules utilitaires, la gestion du cache et les cas de tests unitaires. Cette documentation assiste les nouveaux collaborateurs lors de la prise en main d'une base de code.",
        alt: "Page web affichant des explications en français des différents fichiers d'un projet Python.",
        tags: ['Python', 'MkDocs', 'Ollama', 'LLM locaux'],
      },
      {
        src: '/projects/doc-generator/04-dictionnaire-donnees.png',
        title: 'Dictionnaire des structures de données',
        caption: 'Tableau récapitulatif des champs et types de données extraits des fichiers sources et jeux de test.',
        description: "Page regroupant les modèles de données et schémas identifiés à travers le référentiel logiciel. Pour chaque entité détectée, un tableau liste les champs associés ainsi que leur typage respectif. Le volet latéral permet d'accéder aux différents jeux de données recensés dans le projet.",
        alt: "Tableau récapitulatif des champs et types de données extrait d'un fichier de test dans la documentation MkDocs.",
        tags: ['Python', 'MkDocs', 'Ollama'],
      },
      {
        src: '/projects/doc-generator/08-mr-overview.png',
        title: 'Merge Request de documentation générée',
        caption: 'Proposition de fusion GitLab contenant la documentation produite et les consignes de validation humaine.',
        description: "Merge Request créée sur GitLab pour intégrer la documentation produite par le modèle local. La description rappelle la nécessité d'une relecture humaine avant intégration et invite les relecteurs à poser des questions via la commande /ask dans les commentaires.",
        alt: "Vue d'une Merge Request GitLab avec statut validé et instructions pour le chatbot documentaire.",
        tags: ['GitLab', 'GitLab CI/CD', 'Ollama', 'RAG'],
      },
      {
        src: '/projects/doc-generator/12-mr-chatbot.png',
        title: 'Interaction avec le chatbot documentaire',
        caption: 'Échange dans une Merge Request illustrant une question posée avec /ask et la réponse du système RAG.',
        description: "Fil de discussion au sein de l'interface GitLab illustrant l'assistance documentaire aux développeurs. À la suite d'une commande /ask interrogeant la structure du dépôt, le chatbot local analyse le contexte et formule une réponse synthétisant la répartition des répertoires du projet.",
        alt: "Commentaires dans une Merge Request GitLab montrant une question posée au chatbot et sa réponse structurée.",
        tags: ['GitLab', 'RAG', 'Ollama', 'Python'],
      },
      {
        src: '/projects/doc-generator/09-mr-changes-config.png',
        title: 'Fichier Markdown généré dans GitLab',
        caption: 'Diff de version affichant les 830 lignes de documentation rédigées pour la bibliothèque testée.',
        description: "Vue des modifications apportées par le pipeline de documentation au sein de GitLab. Le fichier README produit regroupe une vue d'ensemble du projet, ses prérequis, sa procédure d'installation et les cas d'utilisation courants au format Markdown.",
        alt: "Diff Git dans l'interface GitLab montrant l'ajout d'un fichier README complet de 830 lignes.",
        tags: ['GitLab', 'Markdown', 'Ollama', 'Python'],
      },
      {
        src: '/projects/doc-generator/10-pipelines-chatbot.png',
        title: 'Pipelines GitLab CI du chatbot',
        caption: 'Historique des pipelines planifiés assurant la vérification périodique des questions posées sur les dépôts.',
        description: "Écran de suivi de l'intégration continue GitLab répertoriant les exécutions successives du service de chatbot. Les pipelines s'exécutent selon une planification régulière pour interroger les discussions de Merge Request et traiter les demandes d'information.",
        alt: "Liste de pipelines GitLab CI/CD marqués comme réussis pour le service de chatbot documentaire.",
        tags: ['GitLab CI/CD', 'RAG', 'Python'],
      },
      {
        src: '/projects/doc-generator/14-cache-hit-rapide.png',
        title: 'Gestion du cache de documentation',
        caption: "Journal de pipeline attestant de la détection du fichier de cache local lors de l'exécution du job.",
        description: "Sortie console d'un job de compilation illustrant la réutilisation du fichier .doc_cache.json entre les exécutions. Cette étape conserve les résultats des analyses précédentes pour éviter de solliciter à nouveau le modèle sur des fichiers inchangés.",
        alt: "Journal d'un job GitLab montrant l'utilisation du cache lors de la génération de documentation.",
        tags: ['GitLab CI/CD', 'Python'],
      },
    ],
  },
  {
    title: 'PredictEdu',
    category: 'IA',
    secondaryCategory: 'Web',
    shortDescription: 'Prédiction de la réussite des étudiants avec une API FastAPI, une interface React et des modèles ML.',
    longDescription: 'Application web full-stack dédiée à la prédiction de la réussite académique des étudiants. Le backend est construit avec FastAPI et expose des endpoints REST pour les prédictions. Le frontend React offre une interface intuitive pour saisir les données et visualiser les résultats. Trois modèles de machine learning (Random Forest, XGBoost et SVM) ont été entraînés et comparés avec scikit-learn. Les données sont stockées dans une base MariaDB. Le système permet aux enseignants d\'identifier les étudiants à risque et d\'agir en amont.',
    tags: ['FastAPI', 'React', 'MariaDB', 'Scikit-learn', 'Random Forest', 'XGBoost', 'SVM'],
    github: '', // À REMPLACER
    demo: '',   // À REMPLACER
  },
  {
    title: 'Gestion de cinéma et bibliothèque',
    category: 'Web',
    shortDescription: 'Applications Spring Boot avec JPA, Thymeleaf, API REST sécurisées et déploiement Docker.',
    longDescription: 'Ensemble d\'applications web Java construites avec Spring Boot pour la gestion d\'un cinéma et d\'une bibliothèque. Utilise JPA/Hibernate pour la persistance des données et Thymeleaf pour le rendu côté serveur. Les API REST sont documentées avec Swagger/OpenAPI. La sécurité est assurée par Spring Security avec authentification JWT et intégration Keycloak pour le SSO. Le déploiement est conteneurisé avec Docker Compose et utilise MySQL comme base de données.',
    tags: ['Spring Boot', 'JPA', 'Thymeleaf', 'Swagger', 'JWT', 'Keycloak', 'Docker', 'MySQL'],
    github: '', // À REMPLACER
    demo: '',   // À REMPLACER
  },
  {
    title: 'Quizapp, SmartApp, MoviesApp',
    category: 'Mobile',
    shortDescription: 'Applications mobiles avec Java (Android), Flutter et React Native, capteurs et Firebase.',
    longDescription: 'Collection d\'applications mobiles développées avec différentes technologies : QuizApp en Java natif Android pour un quiz interactif, SmartApp avec Flutter exploitant les capteurs du téléphone (accéléromètre, GPS) pour des fonctionnalités contextuelles, et MoviesApp en React Native connectée à une API de films avec authentification Firebase. Ces projets démontrent la polyvalence en développement mobile multi-plateforme.',
    tags: ['Java Android', 'Flutter', 'React Native', 'Firebase', 'Capteurs'],
    github: '', // À REMPLACER
    demo: '',   // À REMPLACER
  },
];

// ─── Formation ───────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Cycle ingénieur — Systèmes d\'Information et de Communication (ISIC)',
    school: 'ENSA El Jadida',
    period: 'En cours',
    description: 'Formation d\'ingénieur couvrant le développement logiciel, les réseaux, les systèmes d\'information et l\'intelligence artificielle.',
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Formation', href: '#education' },
  { label: 'Contact', href: '#contact' },
];
