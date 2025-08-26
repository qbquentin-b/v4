import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/lib/team-data";

export default function TeamPage() {
  const founders = teamMembers.filter(member => member.isFounder);
  const otherMembers = teamMembers.filter(member => !member.isFounder);

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
          <div className="text-center mb-12 animate-fade-in-up animation-delay-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre fondatrice</h2>
            <p className="text-lg text-gray-600">À l'origine de Som'Ergo</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={founder.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-800 w-full`}>
                
                <CardContent className="relative p-8 z-10">
                  <div className="grid lg:grid-cols-2 items-center">
                    {/* Image Section */}
                    <div className="text-center lg:text-left lg:pr-4">
                      <div className="relative inline-block">
                        <img 
                          src={founder.image}
                          alt={`${founder.name}, ${founder.title}`}
                          className="w-44 h-44 rounded-full object-cover shadow-lg hover-scale border-4 border-white transition-all duration-300 mx-auto lg:mx-0"
                        />
                        <div className="absolute -bottom-2 -right-2 w-11 h-11 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
                          <span className="text-white text-lg font-bold">★</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="text-center lg:text-left lg:-ml-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <p className="text-primary font-semibold text-lg mb-2">{founder.title}</p>
                      {founder.experience && (
                        <p className="text-gray-600 text-sm mb-4 font-medium">{founder.experience}</p>
                      )}
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        {founder.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        {founder.specialties.map((specialty, idx) => (
                          <Badge 
                            key={specialty} 
                            variant="secondary" 
                            className={`bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 hover-scale px-3 py-1 text-xs font-medium border border-primary/20 animation-delay-${idx * 100}`}
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
          
          {/* Première ligne - 2 membres */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-8">
            {otherMembers.slice(0, 2).map((member, index) => (
              <Card key={member.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${200 + index * 100}`}>
                
                <CardContent className="relative p-6 z-10">
                  <div className="flex items-center space-x-6">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={`${member.name}, ${member.title}`}
                        className="w-24 h-24 rounded-full object-cover hover-scale border-4 border-white transition-all duration-300 shadow-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-1 text-sm">{member.title}</p>
                      {member.experience && (
                        <p className="text-gray-600 text-xs mb-3 font-medium">{member.experience}</p>
                      )}
                      
                      <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => {
                          return (
                            <Badge 
                              key={specialty} 
                              variant="secondary" 
                              className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-2 py-1 text-xs font-medium border hover-scale transition-all duration-300 animation-delay-${idx * 50}`}
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
              <Card key={member.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${400 + index * 100}`}>
                
                <CardContent className="relative p-6 z-10">
                  <div className="flex items-center space-x-6">
                    <div className="relative flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={`${member.name}, ${member.title}`}
                        className="w-24 h-24 rounded-full object-cover hover-scale border-4 border-white transition-all duration-300 shadow-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-1 text-sm">{member.title}</p>
                      {member.experience && (
                        <p className="text-gray-600 text-xs mb-3 font-medium">{member.experience}</p>
                      )}
                      
                      <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                        {member.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => {
                          return (
                            <Badge 
                              key={specialty} 
                              variant="secondary" 
                              className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-2 py-1 text-xs font-medium border hover-scale transition-all duration-300 animation-delay-${idx * 50}`}
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
                  <Card key={member.id} className={`group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift animate-fade-in-up animation-delay-${600 + index * 100}`}>
                    
                    <CardContent className="relative p-6 z-10">
                      <div className="flex items-center space-x-6">
                        <div className="relative flex-shrink-0">
                          <img 
                            src={member.image} 
                            alt={`${member.name}, ${member.title}`}
                            className="w-24 h-24 rounded-full object-cover hover-scale border-4 border-white transition-all duration-300 shadow-lg"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                          <p className="text-primary font-semibold mb-1 text-sm">{member.title}</p>
                          {member.experience && (
                            <p className="text-gray-600 text-xs mb-3 font-medium">{member.experience}</p>
                          )}
                          
                          <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                            {member.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-1">
                            {member.specialties.map((specialty, idx) => {
                              return (
                                <Badge 
                                  key={specialty} 
                                  variant="secondary" 
                                  className={`bg-primary/10 text-primary hover:bg-primary hover:text-white border-primary/20 px-2 py-1 text-xs font-medium border hover-scale transition-all duration-300 animation-delay-${idx * 50}`}
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