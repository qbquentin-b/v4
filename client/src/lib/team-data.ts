export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  specialties: string[];
  image: string;
  isFounder?: boolean;
  experience?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "elodie",
    name: "Élodie Plommet",
    title: "Fondatrice & Ergothérapeute",
    experience: "Diplômée depuis 2008",
    description:
      "Fondatrice du Cabinet Som’Ergo, Élodie est spécialisée en pédiatrie et engagée dans la CPTS du Grand Amiens pour un accompagnement personnalisé et bienveillant des familles.",
    specialties: [
      "Développement des enfants (0-6 ans)",
      "Troubles alimentaires pédiatriques",
      "Intégration sensorielle",
      "TND",
    ],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    isFounder: true,
  },
  {
    id: "lea",
    name: "Léa",
    title: "Ergothérapeute & Cotitulaire",
    experience: "Au cabinet depuis 2019, cotitulaire depuis 2022",
    description:
      "Passionnée par la pédiatrie, Léa accompagne les enfants avec TND et propose également des interventions à domicile pour adultes et personnes âgées.",
    specialties: [
      "Intégration sensorielle",
      "Développement des tout-petits",
      "Écriture et ordinateur",
      "Rééducation neurologique",
      "Aménagement du domicile",
    ],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    
  },
  {
    id: "corinne",
    name: "Corinne Bourgois",
    title: "Ergothérapeute",
    experience: "Diplômée depuis 1996",
    description:
      "Corinne accompagne différents publics, de la pédiatrie à la gériatrie, avec bienveillance et expertise, en favorisant autonomie et bien-être au quotidien.",
    specialties: ["Pédiatrie", "Gériatrie", "FAM"],
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },

  {
    id: "perrine",
    name: "Perrine",
    title: "Ergothérapeute",
    experience: "Diplômée depuis 2022",
    description:
      "Spécialisée dans l’accompagnement des enfants porteurs de TSA et de TND, Perrine adapte ses interventions de façon ludique et personnalisée.",
    specialties: ["TSA", "TND", "Fonctionnement sensoriel"],
    image:
      "https://images.unsplash.com/photo-1603415526960-f8f0a3c9a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    id: "alice",
    name: "Alice",
    title: "Ergothérapeute",
    experience: "Diplômée depuis 2021",
    description:
      "Formée à la graphomotricité, aux aides techniques informatiques et à l’autisme, Alice accompagne les enfants dans leurs progrès vers plus d’autonomie.",
    specialties: ["Graphomotricité", "Aides techniques scolaires", "Autisme"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
  {
    id: "noemie",
    name: "Noémie",
    title: "Ergothérapeute",
    experience: "Diplômée depuis 2019",
    description:
      "Passionnée par la petite enfance, Noémie est spécialisée dans les TND et troubles alimentaires pédiatriques. Elle valorise créativité et bienveillance dans son accompagnement.",
    specialties: ["Petite enfance (0-5 ans)", "TND", "Troubles alimentaires"],
    image:
      "https://images.unsplash.com/photo-1615461066841-7d0e1f7c7f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  },
];
