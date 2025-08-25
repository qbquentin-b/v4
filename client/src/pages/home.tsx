import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  Calendar,
  CheckCircle,
  Building,
  Home,
  Video,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cream to-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Accompagner chaque étape de la vie avec{" "}
                <span className="text-primary">bienveillance</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed animation-delay-200 animate-fade-in-left">
                Som'Ergo est un cabinet d'ergothérapie dédié à l'accompagnement
                personnalisé de l'enfant à la personne âgée. Notre équipe
                pluridisciplinaire vous aide à retrouver autonomie et bien-être
                dans votre quotidien.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animation-delay-400 animate-fade-in-left">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full hover-lift"
                  >
                    Nous contacter
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full hover-lift"
                  >
                    Découvrir nos services
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4 animation-delay-600 animate-fade-in-left">
                <div className="text-center hover-scale">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">
                    Années d'expérience
                  </div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-sm text-gray-600">Ergothérapeutes</div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-gray-600">
                    Modalités d'intervention
                  </div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img
                src="https://physioextra.ca/wp-content/uploads/entete-ergo-ped-4-5-ans.png"
                alt="Environnement thérapeutique chaleureux"
                className="rounded-2xl shadow-2xl w-full hover-scale"
              />
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-lg animate-scale-in animation-delay-800 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float">
                      <Heart className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Approche centrée
                      </div>
                      <div className="text-gray-600">sur la personne</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animation-delay-200 animate-fade-in-up">
              Une prise en charge adaptée à chaque tranche d'âge et chaque
              besoin spécifique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Children Services */}
            <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <CardContent className="relative p-8 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-6 animate-float shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-300">
                  Enfants
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Développement moteur
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Troubles sensoriels
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Graphomotricité
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-accent mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Troubles alimentaires
                  </li>
                </ul>
                <Link href="/services">
                  <a className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors duration-200 group-hover:translate-x-1">
                    En savoir plus →
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Adult Services */}
            <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <CardContent className="relative p-8 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6 animate-float animation-delay-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                  Adultes
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Ergonomie au travail
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Troubles musculo-squelettiques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Réadaptation fonctionnelle
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-primary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Prévention des TMS
                  </li>
                </ul>
                <Link href="/services">
                  <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors duration-200 group-hover:translate-x-1">
                    En savoir plus →
                  </a>
                </Link>
              </CardContent>
            </Card>

            {/* Senior Services */}
            <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-400">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <CardContent className="relative p-8 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mb-6 animate-float animation-delay-800 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-secondary transition-colors duration-300">
                  Seniors
                </h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-secondary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Maintien à domicile
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-secondary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Rééducation neurologique
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-secondary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Adaptation du logement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle size={16} className="text-secondary mr-3 group-hover:scale-110 transition-transform duration-200" />
                    Prévention des chutes
                  </li>
                </ul>
                <Link href="/services">
                  <a className="inline-flex items-center text-secondary font-semibold hover:text-secondary/80 transition-colors duration-200 group-hover:translate-x-1">
                    En savoir plus →
                  </a>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Modalities */}
          <div className="mt-16 animate-fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Modalités d'intervention
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nous nous adaptons à vos besoins avec des solutions flexibles
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                <CardContent className="relative p-8 text-center z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    Au cabinet
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Consultations dans notre environnement adapté
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-200">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                <CardContent className="relative p-8 text-center z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float animation-delay-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Home className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                    À domicile
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Interventions dans votre environnement quotidien
                  </p>
                </CardContent>
              </Card>
              
              <Card className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-400">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                <CardContent className="relative p-8 text-center z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float animation-delay-800 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Video className="text-white text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary transition-colors duration-300">
                    Téléconsultation
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Suivi à distance selon vos besoins
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner vers une meilleure qualité
            de vie. Contactez-nous pour une première consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
              >
                <Calendar className="mr-2" />
                Nous contacter
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full"
              >
                Découvrir nos services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
