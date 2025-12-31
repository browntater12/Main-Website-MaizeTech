import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      // Already on home page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Maize<span className="text-gradient">Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleSectionClick("businesses")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              Our Businesses
            </button>
            <button 
              onClick={() => handleSectionClick("about")}
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              About
            </button>
            <Link to="/contact">
              <Button variant="hero" size="sm">
                Get in Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => handleSectionClick("businesses")}
                className="text-left text-muted-foreground hover:text-foreground transition-smooth"
              >
                Our Businesses
              </button>
              <button 
                onClick={() => handleSectionClick("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => handleSectionClick("contact")}
                className="text-left text-muted-foreground hover:text-foreground transition-smooth"
              >
                Contact
              </button>
              <Link to="/contact" className="w-fit">
                <Button variant="hero" size="sm" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
