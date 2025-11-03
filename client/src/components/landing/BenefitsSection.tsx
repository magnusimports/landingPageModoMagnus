import { Check } from "lucide-react";

const benefits = [
  "Crie landing pages profissionais em poucas horas, não em semanas",
  "Economize milhares de reais em desenvolvedores e designers",
  "Aumente suas conversões com chatbot inteligente 24/7",
  "Capture e organize leads automaticamente",
  "Aprenda do zero, mesmo sem conhecimento técnico",
  "Acesso vitalício ao conteúdo e atualizações futuras",
  "Comunidade exclusiva de alunos e networking",
  "Templates prontos para usar e personalizar",
  "Suporte direto para tirar todas as suas dúvidas",
  "Certificado de conclusão reconhecido",
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Por Que Escolher o{" "}
                <span className="gradient-text">Modo Magnus</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Não é apenas um curso. É uma transformação completa na forma como você cria presença digital e vende online.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Check className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">4.9/5</div>
                <div className="text-sm text-muted-foreground">Avaliação Média</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">100%</div>
                <div className="text-sm text-muted-foreground">Garantia de Resultado</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
              <div className="space-y-6">
                {/* Mockup of a landing page */}
                <div className="bg-background rounded-lg p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-primary to-accent rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-full"></div>
                    <div className="h-3 bg-muted rounded w-5/6"></div>
                    <div className="flex space-x-2 pt-2">
                      <div className="h-10 bg-primary rounded flex-1"></div>
                      <div className="h-10 bg-accent rounded flex-1"></div>
                    </div>
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 shadow-lg">
                    <div className="text-2xl font-bold gradient-text">↑ 300%</div>
                    <div className="text-xs text-muted-foreground">Conversões</div>
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-lg">
                    <div className="text-2xl font-bold gradient-text">24/7</div>
                    <div className="text-xs text-muted-foreground">Automação</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-bold animate-pulse">
              Transformação Garantida
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
