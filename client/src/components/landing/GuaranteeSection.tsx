import { Card, CardContent } from "@/components/ui/card";
import { Shield, TrendingUp, Award } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Main Guarantee Card */}
          <Card className="border-4 border-primary/50 shadow-2xl">
            <CardContent className="p-8 md:p-12 space-y-8">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>

              {/* Title */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                  Garantia <span className="gradient-text">O Dobro ou Nada</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Estamos tão confiantes no método que assumimos TODO o risco
                </p>
              </div>

              {/* Guarantee Details */}
              <div className="bg-muted/50 rounded-lg p-6 md:p-8 space-y-4">
                <p className="text-lg font-medium text-center">
                  Se você <span className="text-primary font-bold">concluir o curso</span>, aplicar o método e{" "}
                  <span className="text-primary font-bold">não conseguir criar sua própria landing page profissional</span>, nós não só devolvemos{" "}
                  <span className="text-primary font-bold">100% do seu dinheiro</span>, como também te pagamos{" "}
                  <span className="text-accent font-bold text-xl">R$ 500,00</span> pelo seu tempo investido.
                </p>
                <p className="text-center text-muted-foreground">
                  O risco é todo nosso. Você só tem a ganhar.
                </p>
              </div>

              {/* Why We Can Offer This */}
              <div className="grid md:grid-cols-3 gap-6 pt-4">
                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold">Método Comprovado</h3>
                  <p className="text-sm text-muted-foreground">
                    Testado e aprovado por centenas de alunos
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="font-bold">Suporte Total</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompanhamento em cada etapa da jornada
                  </p>
                </div>

                <div className="text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-bold">Zero Risco</h3>
                  <p className="text-sm text-muted-foreground">
                    Você não tem nada a perder, só a ganhar
                  </p>
                </div>
              </div>

              {/* Fine Print */}
              <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                * Para acionar a garantia, você deve completar 100% do curso e demonstrar que aplicou o método conforme ensinado.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
