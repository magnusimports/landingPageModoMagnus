import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src="/logo_modo_magnus.png" alt="Modo Magnus" className="h-8" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("features")} className="text-sm font-medium hover:text-primary transition-colors">
              Funcionalidades
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-primary transition-colors">
              Benefícios
            </button>
            <button onClick={() => scrollToSection("guarantee")} className="text-sm font-medium hover:text-primary transition-colors">
              Garantia
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </button>
            <Button onClick={() => scrollToSection("pricing")} className="gradient-primary">
              Quero Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("guarantee")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
            >
              Garantia
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-muted rounded-md transition-colors"
            >
              FAQ
            </button>
            <div className="px-4">
              <Button onClick={() => scrollToSection("pricing")} className="w-full gradient-primary">
                Quero Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
