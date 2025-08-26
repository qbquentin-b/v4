import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { teamMembers } from "@/lib/team-data";

export default function TeamPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const founders = teamMembers.filter(member => member.isFounder);
  const otherMembers = teamMembers.filter(member => !member.isFounder);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % otherMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + otherMembers.length) % otherMembers.length);
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
    <div className="min-h-screen py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre équipe pluridisciplinaire
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animation-delay-200 animate-fade-in-up">
            Des ergothérapeutes expérimentés et passionnés, chacun avec ses spécialités pour vous accompagner au mieux
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full animation-delay-400 animate-fade-in-up"></div>
        </div>

        {/* Founders Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in-up animation-delay-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre fondatrice</h2>
            <p className="text-lg text-gray-600">À l'origine de Som'Ergo</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={founder.id} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-400">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <CardContent className="relative p-8 z-10 text-center">
                  <div className="space-y-6">
                    <div className="relative inline-block">
                      <img 
                        src={founder.image}
                        alt={`${founder.name}, ${founder.title}`}
                        className="w-40 h-40 rounded-full object-cover shadow-lg hover-scale border-4 border-white transition-all duration-300 mx-auto group-hover:scale-110"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
                        <span className="text-white text-lg font-bold">★</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{founder.name}</h3>
                      <p className="text-primary font-semibold text-lg mb-2">{founder.title}</p>
                      {founder.experience && (
                        <p className="text-gray-600 text-sm mb-4 font-medium">{founder.experience}</p>
                      )}
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm max-w-2xl mx-auto">
                        {founder.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.specialties.map((specialty, idx) => (
                          <Badge 
                            key={specialty} 
                            variant="secondary" 
                            className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-3 py-1 text-xs font-medium border transition-all duration-300 animation-delay-${idx * 50}`}
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Team Members */}
        <div>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre équipe</h2>
            <p className="text-lg text-gray-600">Des professionnels dévoués à votre bien-être</p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:block">
            {/* Première ligne - 2 membres */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
              {otherMembers.slice(0, 2).map((member, index) => (
                <Card key={member.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${200 + index * 100}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardContent className="relative p-6 z-10 text-center">
                    <div className="space-y-4">
                      <div className="relative inline-block">
                        <img 
                          src={member.image} 
                          alt={`${member.name}, ${member.title}`}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white transition-all duration-300 shadow-lg mx-auto group-hover:scale-110"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                        <p className="text-primary font-semibold mb-1 text-sm">{member.title}</p>
                        {member.experience && (
                          <p className="text-gray-600 text-xs mb-3 font-medium">{member.experience}</p>
                        )}
                        
                        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                          {member.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.specialties.map((specialty, idx) => {
                            return (
                              <Badge 
                                key={specialty} 
                                variant="secondary" 
                                className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-2 py-1 text-xs font-medium border transition-all duration-300 animation-delay-${idx * 50}`}
                              >
                                {specialty}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Deuxième ligne - 2 membres */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {otherMembers.slice(2, 4).map((member, index) => (
                <Card key={member.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${400 + index * 100}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <CardContent className="relative p-6 z-10 text-center">
                    <div className="space-y-4">
                      <div className="relative inline-block">
                        <img 
                          src={member.image} 
                          alt={`${member.name}, ${member.title}`}
                          className="w-24 h-24 rounded-full object-cover border-4 border-white transition-all duration-300 shadow-lg mx-auto group-hover:scale-110"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                        <p className="text-primary font-semibold mb-1 text-sm">{member.title}</p>
                        {member.experience && (
                          <p className="text-gray-600 text-xs mb-3 font-medium">{member.experience}</p>
                        )}
                        
                        <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                          {member.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.specialties.map((specialty, idx) => {
                            return (
                              <Badge 
                                key={specialty} 
                                variant="secondary" 
                                className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-2 py-1 text-xs font-medium border transition-all duration-300 animation-delay-${idx * 50}`}
                              >
                                {specialty}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Troisième ligne - 1 membre centré */}
            {otherMembers.length > 4 && (
              <div className="flex justify-center mt-8">
                <div className="w-full lg:w-1/2 max-w-none">
                  {otherMembers.slice(4).map((member, index) => (
                    <Card key={member.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${600 + index * 100}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                      
                      <CardContent className="relative p-6 z-10 text-center">
                        <div className="space-y-4">
                          <div className="relative inline-block">
                            <img 
                              src={member.image} 
                              alt={`${member.name}, ${member.title}`}
                              className="w-24 h-24 rounded-full object-cover border-4 border-white transition-all duration-300 shadow-lg mx-auto group-hover:scale-110"
                            />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="text-white text-xs font-bold">✓</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                            <p className="text-primary font-semibold mb-1 text-sm">{member.title}</p>
                            {member.experience && (
                              <p className="text-gray-600 text-xs mb-3 font-medium">{member.experience}</p>
                            )}
                            
                            <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                              {member.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-1 justify-center">
                              {member.specialties.map((specialty, idx) => {
                                return (
                                  <Badge 
                                    key={specialty} 
                                    variant="secondary" 
                                    className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-2 py-1 text-xs font-medium border transition-all duration-300 animation-delay-${idx * 50}`}
                                  >
                                    {specialty}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
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
                {otherMembers.map((member, index) => (
                  <div key={member.id} className="w-full flex-shrink-0 px-4">
                    <Card className={`group relative overflow-hidden bg-white border-0 shadow-lg transition-all duration-500 animate-fade-in-up ${index === currentSlide ? 'shadow-2xl scale-105' : 'shadow-md'}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16 transition-transform duration-700 ${index === currentSlide ? 'scale-150' : ''}`}></div>
                      
                      <CardContent className="relative p-8 z-10 text-center">
                        <div className="space-y-6">
                          <div className="relative inline-block">
                            <img 
                              src={member.image} 
                              alt={`${member.name}, ${member.title}`}
                              className={`w-32 h-32 rounded-full object-cover border-4 border-white transition-all duration-300 shadow-lg mx-auto ${index === currentSlide ? 'scale-110' : ''}`}
                            />
                            {index === currentSlide && (
                              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
                                <span className="text-white text-sm font-bold">✓</span>
                              </div>
                            )}
                          </div>
                          
                          <div>
                            <h3 className={`text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 ${index === currentSlide ? 'text-primary' : ''}`}>{member.name}</h3>
                            <p className="text-primary font-semibold mb-2">{member.title}</p>
                            {member.experience && (
                              <p className="text-gray-600 text-sm mb-4 font-medium">{member.experience}</p>
                            )}
                            
                            <p className="text-gray-700 text-sm mb-6 leading-relaxed max-w-sm mx-auto">
                              {member.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 justify-center">
                              {member.specialties.map((specialty, idx) => {
                                return (
                                  <Badge 
                                    key={specialty} 
                                    variant="secondary" 
                                    className={`bg-primary/10 text-primary border-primary/20 px-3 py-1 text-xs font-medium border transition-all duration-300 ${index === currentSlide ? 'scale-110 bg-primary text-white' : ''}`}
                                  >
                                    {specialty}
                                  </Badge>
                                );
                              })}
                            </div>
                          </div>
                        </div>
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
              aria-label="Membre précédent"
            >
              <ChevronLeft className="text-gray-600" size={20} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 z-10"
              aria-label="Membre suivant"
            >
              <ChevronRight className="text-gray-600" size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {otherMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller au membre ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up">
          <Card className="bg-white border-0 shadow-lg hover-lift max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Une équipe à votre écoute
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Chaque membre de notre équipe apporte son expertise et sa passion pour vous offrir 
                un accompagnement personnalisé et bienveillant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = "/contact"}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift shadow-lg"
                >
                  Nous rencontrer
                </button>
                <button 
                  onClick={() => window.location.href = "/services"}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover-lift"
                >
                  Découvrir nos services
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}