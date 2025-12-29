import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Maize<span className="text-gradient">Tech</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#businesses" className="text-muted-foreground hover:text-foreground transition-smooth">
              Our Businesses
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </a>
            <Button variant="hero" size="sm">
              Get in Touch
            </Button>
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
              <a href="#businesses" className="text-muted-foreground hover:text-foreground transition-smooth">
                Our Businesses
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </a>
              <Button variant="hero" size="sm" className="w-fit">
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
