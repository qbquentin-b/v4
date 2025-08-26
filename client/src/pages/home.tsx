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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const expertiseCards = [
    {
      id: "children",
      title: "Enfants",
      icon: Users,
      color: "accent",
      services: [
        "Développement moteur",
        "Troubles sensoriels", 
        "Graphomotricité",
        "Troubles alimentaires"
      ],
      link: "/services"
    },
    {
      id: "adults", 
      title: "Adultes",
      icon: Users,
      color: "primary",
      services: [
        "Ergonomie au travail",
        "Troubles musculo-squelettiques",
        "Réadaptation fonctionnelle", 
        "Prévention des TMS"
      ],
      link: "/services"
    },
    {
      id: "seniors",
      title: "Seniors", 
      icon: Users,
      color: "secondary",
      services: [
        "Maintien à domicile",
        "Rééducation neurologique",
        "Adaptation du logement",
        "Prévention des chutes"
      ],
      link: "/services"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % expertiseCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + expertiseCards.length) % expertiseCards.length);
  };

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };
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
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animation-delay-600 animate-fade-in-left">
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full hover-lift"
                  >
                    Découvrir nos services
                  </Button>
                </Link>
                <Link href="/equipe">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full hover-lift"
                  >
                    Rencontrer l'équipe
                  </Button>
                </Link>
              </div>
              <div className="flex items-center space-x-6 pt-4 animation-delay-800 animate-fade-in-left">
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
                  <div className="text-2xl font-bold text-primary">2</div>
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
              <Card className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white shadow-lg animate-scale-in animation-delay-800 hover-lift max-w-xs">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float">
                      <Heart className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm lg:text-base">
                        Approche centrée
                      </div>
                      <div className="text-gray-600 text-sm lg:text-base">sur la personne</div>
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

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {expertiseCards.map((card, index) => (
              <Card key={card.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${index * 200}`}>
                <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}/10 via-${card.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700`}></div>
                <CardContent className="relative p-8 z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${card.color} to-${card.color}/80 rounded-2xl flex items-center justify-center mb-6 animate-float shadow-lg group-hover:scale-110 transition-transform duration-300`}
                       style={{
                         background: card.color === 'accent' ? 'linear-gradient(to bottom right, hsl(var(--accent)), hsl(var(--accent) / 0.8))' :
                                   card.color === 'primary' ? 'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primary) / 0.8))' :
                                   'linear-gradient(to bottom right, hsl(var(--secondary)), hsl(var(--secondary) / 0.8))',
                         animationDelay: card.color === 'accent' ? '0s' : card.color === 'primary' ? '0.4s' : '0.8s'
                       }}>
                    <card.icon className="text-white text-2xl" />
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-4 group-hover:text-${card.color} transition-colors duration-300`}>
                    {card.title}
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    {card.services.map((service, idx) => (
                      <li key={service} className="flex items-center">
                        <CheckCircle size={16} className={`text-${card.color} mr-3 group-hover:scale-110 transition-transform duration-200`} 
                                   style={{color: card.color === 'accent' ? 'hsl(var(--accent))' :
                                                 card.color === 'primary' ? 'hsl(var(--primary))' :
                                                 'hsl(var(--secondary))'}} />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link href={card.link}>
                    <a className={`inline-flex items-center text-${card.color} font-semibold hover:text-${card.color}/80 transition-colors duration-200 group-hover:translate-x-1`}
                       style={{color: card.color === 'accent' ? 'hsl(var(--accent))' :
                                     card.color === 'primary' ? 'hsl(var(--primary))' :
                                     'hsl(var(--secondary))'}}>
                      En savoir plus →
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            <div 
              className="overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {expertiseCards.map((card, index) => (
                  <div key={card.id} className="w-full flex-shrink-0 px-4">
                    <Card className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up ${index === currentSlide ? 'shadow-2xl' : ''}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-${card.color}/10 via-${card.color}/5 to-transparent transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-${card.color}/5 rounded-full -translate-y-16 translate-x-16 transition-transform duration-700 ${index === currentSlide ? 'scale-150' : 'group-hover:scale-150'}`}></div>
                      <CardContent className="relative p-8 z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br from-${card.color} to-${card.color}/80 rounded-2xl flex items-center justify-center mb-6 animate-float shadow-lg transition-transform duration-300 ${index === currentSlide ? 'scale-110' : 'group-hover:scale-110'}`}
                             style={{
                               background: card.color === 'accent' ? 'linear-gradient(to bottom right, hsl(var(--accent)), hsl(var(--accent) / 0.8))' :
                                         card.color === 'primary' ? 'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primary) / 0.8))' :
                                         'linear-gradient(to bottom right, hsl(var(--secondary)), hsl(var(--secondary) / 0.8))'
                             }}>
                          <card.icon className="text-white text-2xl" />
                        </div>
                        <h3 className={`text-xl font-bold text-gray-900 mb-4 group-hover:text-${card.color} transition-colors duration-300`}>
                          {card.title}
                        </h3>
                        <ul className="space-y-2 text-gray-600 mb-6">
                          {card.services.map((service, idx) => (
                            <li key={service} className="flex items-center">
                              <CheckCircle size={16} className={`text-${card.color} mr-3 transition-transform duration-200 ${index === currentSlide ? 'scale-110' : 'group-hover:scale-110'}`} 
                                         style={{color: card.color === 'accent' ? 'hsl(var(--accent))' :
                                                       card.color === 'primary' ? 'hsl(var(--primary))' :
                                                       'hsl(var(--secondary))'}} />
                              {service}
                            </li>
                          ))}
                        </ul>
                        <Link href={card.link}>
                          <a className={`inline-flex items-center text-${card.color} font-semibold hover:text-${card.color}/80 transition-colors duration-200 ${index === currentSlide ? 'translate-x-1' : 'group-hover:translate-x-1'}`}
                             style={{color: card.color === 'accent' ? 'hsl(var(--accent))' :
                                           card.color === 'primary' ? 'hsl(var(--primary))' :
                                           'hsl(var(--secondary))'}}>
                            En savoir plus →
                          </a>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
              aria-label="Slide précédent"
            >
              <ChevronLeft className="text-gray-600" size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
              aria-label="Slide suivant"
            >
              <ChevronRight className="text-gray-600" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {expertiseCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au slide ${index + 1}`}
                />
              ))}
            </div>
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
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <Link href="/equipe">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full"
              >
                Rencontrer l'équipe
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
