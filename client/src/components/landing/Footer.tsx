import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <img src="/logo_modo_magnus.png" alt="Modo Magnus" className="h-8" />
            <p className="text-sm text-muted-foreground">
              Transformando pessoas comuns em criadores de landing pages profissionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold">Links Rápidos</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <button onClick={() => scrollToSection("features")} className="text-left hover:text-primary transition-colors">
                Funcionalidades
              </button>
              <button onClick={() => scrollToSection("benefits")} className="text-left hover:text-primary transition-colors">
                Benefícios
              </button>
              <button onClick={() => scrollToSection("guarantee")} className="text-left hover:text-primary transition-colors">
                Garantia
              </button>
              <button onClick={() => scrollToSection("pricing")} className="text-left hover:text-primary transition-colors">
                Preços
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-bold">Suporte</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <button onClick={() => scrollToSection("faq")} className="text-left hover:text-primary transition-colors">
                Perguntas Frequentes
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-left hover:text-primary transition-colors">
                Entre em Contato
              </button>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contato@modomagunus.com" className="hover:text-primary transition-colors">
                  contato@modomagunus.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Chat 24/7 disponível</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Modo Magnus. Todos os direitos reservados.</p>
          <p className="mt-2">
            Feito com 💜 para transformar vidas através da tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
}
