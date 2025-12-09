import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 -z-10" />
      
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Promoção Black Friday - 70% OFF</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Crie Landing Pages que{" "}
              <span className="gradient-text">Vendem Milhões</span>, sem Escrever uma Linha de Código
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground">
              O único curso que te ensina a construir páginas de alta conversão com inteligência artificial e automação, do zero absoluto, com{" "}
              <span className="font-bold text-foreground">garantia de resultado ou seu dinheiro em dobro</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary text-lg px-8 py-6 group"
                onClick={() => scrollToSection("pricing")}
              >
                Quero Criar Minha Landing Page Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection("features")}
              >
                Ver Como Funciona
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold gradient-text">96%</div>
                <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Alunos Transformados</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte Disponível</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/hero_image_1.png"
                alt="Pessoa criando landing page profissional no computador"
                className="w-full h-auto"
                loading="eager"
                width="600"
                height="400"
              />
              {/* Overlay gradient for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-bold animate-pulse">
              R$ 150,00
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-bold">
              Sem Programar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
