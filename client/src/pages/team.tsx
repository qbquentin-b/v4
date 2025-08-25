import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/lib/team-data";

export default function TeamPage() {
  const founder = teamMembers.find(member => member.isFounder);
  const otherMembers = teamMembers.filter(member => !member.isFounder);

  return (
    <div className="min-h-screen py-16 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Notre équipe pluridisciplinaire
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animation-delay-200 animate-fade-in-up">
            Des ergothérapeutes expérimentés et passionnés, chacun avec ses spécialités pour vous accompagner au mieux
          </p>
        </div>

        {/* Founder Highlight */}
        {founder && (
          <Card className="mb-12 shadow-sm hover-lift animate-fade-in-up animation-delay-400">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left animate-fade-in-left">
                  <img 
                    src={founder.image} 
                    alt={`${founder.name}, ${founder.title}`}
                    className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover shadow-lg hover-scale"
                  />
                </div>
                <div className="space-y-4 animate-fade-in-right animation-delay-200">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{founder.name}</h2>
                    <p className="text-primary font-medium">{founder.title}</p>
                    {founder.experience && (
                      <p className="text-gray-600">{founder.experience}</p>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {founder.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.specialties.map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="bg-primary/10 text-primary hover-scale">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherMembers.map((member, index) => (
            <Card key={member.id} className={`shadow-sm hover:shadow-md transition-all hover-lift animate-fade-in-up animation-delay-${200 + index * 100}`}>
              <CardContent className="p-6">
                <img 
                  src={member.image} 
                  alt={`${member.name}, ${member.title}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover hover-scale"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.specialties.map((specialty) => {
                      // Determine color based on specialty type
                      let colorClass = "bg-accent/10 text-accent";
                      if (specialty.toLowerCase().includes('seniors') || 
                          specialty.toLowerCase().includes('neurologie') ||
                          specialty.toLowerCase().includes('domicile') ||
                          specialty.toLowerCase().includes('adaptation')) {
                        colorClass = "bg-secondary/10 text-secondary";
                      } else if (specialty.toLowerCase().includes('ergonomie') || 
                                 specialty.toLowerCase().includes('tms')) {
                        colorClass = "bg-primary/10 text-primary";
                      }
                      
                      return (
                        <Badge 
                          key={specialty} 
                          variant="secondary" 
                          className={`${colorClass} px-2 py-1 text-xs`}
                        >
                          {specialty}
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
