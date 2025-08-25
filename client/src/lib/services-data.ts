export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  color: "accent" | "primary" | "secondary";
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "enfants",
    title: "Services Enfants",
    description: "Accompagnement spécialisé pour les enfants et adolescents",
    color: "accent",
    icon: "child",
    services: [
      {
        id: "developpement-moteur",
        title: "Développement moteur",
        description: "Motricité fine et globale, coordination, équilibre",
        icon: "activity"
      },
      {
        id: "troubles-sensoriels",
        title: "Troubles sensoriels",
        description: "Intégration sensorielle, hypersensibilité, hyposensibilité",
        icon: "eye"
      },
      {
        id: "graphomotricite",
        title: "Graphomotricité",
        description: "Écriture, préhension, geste graphique",
        icon: "edit-3"
      },
      {
        id: "troubles-alimentaires",
        title: "Troubles alimentaires",
        description: "Difficultés de déglutition, sélectivité alimentaire",
        icon: "utensils"
      },
      {
        id: "tnd",
        title: "Troubles neurodéveloppementaux",
        description: "TSA, TDAH, troubles des apprentissages",
        icon: "brain"
      }
    ]
  },
  {
    id: "adultes",
    title: "Services Adultes",
    description: "Solutions adaptées aux besoins professionnels et personnels",
    color: "primary",
    icon: "user",
    services: [
      {
        id: "ergonomie-travail",
        title: "Ergonomie au travail",
        description: "Analyse du poste, aménagements, formation",
        icon: "monitor"
      },
      {
        id: "tms",
        title: "Troubles musculo-squelettiques",
        description: "TMS, lombalgie, cervicalgie, syndrome du canal carpien",
        icon: "zap"
      },
      {
        id: "readaptation",
        title: "Réadaptation fonctionnelle",
        description: "Récupération après accident, maladie, chirurgie",
        icon: "refresh-cw"
      },
      {
        id: "prevention",
        title: "Prévention",
        description: "Formation gestes et postures, échauffements",
        icon: "shield"
      }
    ]
  },
  {
    id: "seniors",
    title: "Services Seniors",
    description: "Maintien de l'autonomie et adaptation du cadre de vie",
    color: "secondary",
    icon: "users",
    services: [
      {
        id: "maintien-domicile",
        title: "Maintien à domicile",
        description: "Évaluation, conseils, aménagements du logement",
        icon: "home"
      },
      {
        id: "reeducation-neurologique",
        title: "Rééducation neurologique",
        description: "AVC, Parkinson, démences, troubles cognitifs",
        icon: "brain"
      },
      {
        id: "adaptation-logement",
        title: "Adaptation du logement",
        description: "Barres d'appui, monte-escalier, aménagement salle de bain",
        icon: "settings"
      },
      {
        id: "prevention-chutes",
        title: "Prévention des chutes",
        description: "Équilibre, coordination, sécurisation de l'environnement",
        icon: "alert-triangle"
      }
    ]
  }
];

export const interventionModalities = [
  {
    id: "cabinet",
    title: "Au cabinet",
    description: "Consultations dans notre environnement adapté",
    icon: "building"
  },
  {
    id: "domicile",
    title: "À domicile",
    description: "Interventions dans votre environnement quotidien",
    icon: "home"
  },
  {
    id: "teleconsultation",
    title: "Téléconsultation",
    description: "Suivi à distance selon vos besoins",
    icon: "video"
  }
];
