import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Building, Home, Video, Users, UserCheck, Baby } from "lucide-react";
import { serviceCategories, interventionModalities } from "@/lib/services-data";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("enfants");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "child":
        return <Baby className="text-white text-2xl" />;
      case "user":
        return <UserCheck className="text-white text-2xl" />;
      case "users":
        return <Users className="text-white text-2xl" />;
      case "building":
        return <Building className="text-white" />;
      case "home":
        return <Home className="text-white" />;
      case "video":
        return <Video className="text-white" />;
      default:
        return <Users className="text-white text-2xl" />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    // For now, using CheckCircle for all services
    return <CheckCircle size={16} className="text-white" />;
  };

  const activeCategory = serviceCategories.find(cat => cat.id === activeTab);

  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos services détaillés
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une approche personnalisée pour chaque patient selon son âge et ses besoins spécifiques
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab Navigation */}
          <div className="lg:w-1/4 space-y-2">
            {serviceCategories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                variant={activeTab === category.id ? "default" : "ghost"}
                className={`w-full text-left p-4 rounded-xl font-medium ${
                  activeTab === category.id
                    ? `bg-${category.color} hover:bg-${category.color}/90 text-white`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={{
                  backgroundColor: activeTab === category.id ? 
                    category.color === 'accent' ? 'hsl(var(--accent))' :
                    category.color === 'primary' ? 'hsl(var(--primary))' :
                    'hsl(var(--secondary))' : undefined
                }}
              >
                <div className="flex items-center">
                  {getIcon(category.icon)}
                  <span className="ml-3">{category.title}</span>
                </div>
              </Button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="lg:w-3/4">
            {activeCategory && (
              <Card className={`bg-gradient-to-br from-${activeCategory.color}/5 to-transparent`}>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{activeCategory.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {activeCategory.services.map((service) => (
                      <div key={service.id} className="flex items-start space-x-3">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                          style={{
                            backgroundColor: activeCategory.color === 'accent' ? 'hsl(var(--accent))' :
                              activeCategory.color === 'primary' ? 'hsl(var(--primary))' :
                              'hsl(var(--secondary))'
                          }}
                        >
                          {getServiceIcon(service.icon)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{service.title}</h4>
                          <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Modalities Section */}
        <div className="mt-16">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
                Modalités d'intervention
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {interventionModalities.map((modality) => (
                  <div key={modality.id} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      {getIcon(modality.icon)}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{modality.title}</h3>
                    <p className="text-gray-600 text-sm">{modality.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin de plus d'informations ?
              </h2>
              <p className="text-gray-600 mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions et vous orienter 
                vers les services les plus adaptés à vos besoins.
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
                  onClick={() => window.location.href = "/contact"}
                >
                  Nous contacter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
