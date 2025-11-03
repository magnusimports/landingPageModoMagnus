import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const included = [
  "Acesso vitalício a todos os módulos",
  "Atualizações futuras incluídas",
  "Templates profissionais prontos",
  "Chatbot com IA integrado",
  "Integração com Google Sheets",
  "Comunidade exclusiva no Discord",
  "Suporte direto por email",
  "Certificado de conclusão",
  "Garantia de 100% + R$ 500,00",
  "Bônus: Guia de Prompts para IA",
];

export function PricingSection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Investimento que se Paga{" "}
              <span className="gradient-text">na Primeira Venda</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Promoção especial Black Friday - Por tempo limitado
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-8">
            <div className="bg-destructive/10 border-2 border-destructive/50 rounded-lg px-6 py-4 inline-flex items-center space-x-4">
              <Clock className="h-5 w-5 text-destructive animate-pulse" />
              <div className="flex items-center space-x-2 text-destructive font-bold">
                <div className="text-center">
                  <div className="text-2xl">{String(timeLeft.hours).padStart(2, "0")}</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <div className="text-2xl">{String(timeLeft.minutes).padStart(2, "0")}</div>
                  <div className="text-xs">MIN</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center">
                  <div className="text-2xl">{String(timeLeft.seconds).padStart(2, "0")}</div>
                  <div className="text-xs">SEG</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <Card className="border-4 border-primary shadow-2xl relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-6 py-2 rounded-bl-lg font-bold flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span>OFERTA RELÂMPAGO</span>
            </div>

            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Pricing */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground line-through">De R$ 499,00</div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-5xl md:text-6xl font-bold gradient-text">R$ 150</span>
                      <span className="text-2xl text-muted-foreground">,00</span>
                    </div>
                    <div className="text-muted-foreground">ou 12x de R$ 14,99</div>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 space-y-2">
                    <div className="font-bold text-primary">🎁 Economia de R$ 349,00</div>
                    <div className="text-sm text-muted-foreground">
                      Desconto de 70% aplicado automaticamente
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full gradient-primary text-lg py-6 group"
                    onClick={scrollToForm}
                  >
                    Garantir Minha Vaga Agora
                    <Zap className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    🔒 Pagamento 100% seguro | Garantia de 30 dias
                  </div>
                </div>

                {/* Right Column - What's Included */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Tudo que está incluído:</h3>
                  <div className="space-y-3">
                    {included.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-8 border-t text-center space-y-4">
                <p className="text-lg font-medium">
                  Mais de <span className="gradient-text font-bold">500 alunos</span> já transformaram seus negócios
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">e contando...</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
