import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo_1755781516931.jpg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "L'équipe", href: "/equipe" },
    { name: "Nos services", href: "/services" },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Som'Ergo Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">
                  Som'Ergo
                </h1>
                <p className="text-sm text-gray-600">
                  Cabinet d'Ergothérapie
                </p>
              </div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <a className={`font-medium transition-colors ${
                  location === item.href
                    ? "text-primary font-semibold"
                    : "text-gray-700 hover:text-primary"
                }`}>
                  {item.name}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a
                    className={`block font-medium ${
                      location === item.href
                        ? "text-primary font-semibold"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}