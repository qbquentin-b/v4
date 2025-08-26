import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Afficher le bandeau après un petit délai
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <Card className="max-w-4xl mx-auto bg-white shadow-2xl border-0">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0 animate-float">
              <Cookie className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nous utilisons des cookies
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation, 
                analyser le trafic et personnaliser le contenu. En continuant à utiliser ce site, 
                vous acceptez notre utilisation des cookies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={acceptCookies}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full"
                >
                  Accepter tous les cookies
                </Button>
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full"
                >
                  Refuser
                </Button>
                <a 
                  href="#" 
                  className="text-primary hover:text-primary/80 text-sm font-medium self-center transition-colors"
                >
                  En savoir plus
                </a>
              </div>
            </div>
            <Button
              onClick={declineCookies}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <X size={20} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}