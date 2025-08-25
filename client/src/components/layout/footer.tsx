import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import logoImage from "@assets/logo_1755781516931.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={logoImage} 
                  alt="Som'Ergo Logo" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h1 className="text-lg font-bold text-primary">
                    Som'Ergo
                  </h1>
                  <p className="text-sm text-gray-300">
                    Cabinet d'Ergothérapie
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Accompagner chaque étape de la vie avec bienveillance. Notre
              équipe pluridisciplinaire vous aide à retrouver autonomie et
              bien-être.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/equipe">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    L'équipe
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    Nos services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos spécialités</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Pédiatrie</li>
              <li>Troubles neurodéveloppementaux</li>
              <li>Ergonomie au travail</li>
              <li>Accompagnement seniors</li>
              <li>Rééducation neurologique</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin
                  size={16}
                  className="text-primary mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-300">
                  47 Avenue du Royaume-Uni
                  <br />
                  80090 Amiens
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">03 XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">contact@somergo.fr</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook size={16} className="text-primary flex-shrink-0" />
                <a
                  href="https://facebook.com/CabinetSomErgo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cabinet Som'Ergo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Som'Ergo - Cabinet d'Ergothérapie. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
