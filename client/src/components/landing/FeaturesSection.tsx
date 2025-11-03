import { Card, CardContent } from "@/components/ui/card";
import { Bot, Database, Zap, Palette, BarChart, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    image: "/feature_chatbot.png",
    title: "Chatbot Inteligente com IA",
    description: "Integre um chatbot alimentado por inteligência artificial que responde dúvidas dos visitantes 24/7, aumentando o engajamento e as conversões.",
  },
  {
    icon: Database,
    image: "/feature_database.png",
    title: "Banco de Dados Integrado",
    description: "Capture e organize leads automaticamente com integração ao Google Sheets. Todos os dados sincronizados em tempo real.",
  },
  {
    icon: Zap,
    image: "/feature_nocode.png",
    title: "Sem Programação Necessária",
    description: "Interface visual intuitiva que permite criar páginas profissionais sem escrever uma única linha de código. Arraste, solte e publique.",
  },
  {
    icon: Palette,
    title: "Design Profissional",
    description: "Templates modernos e responsivos que funcionam perfeitamente em qualquer dispositivo. Personalize cores, fontes e layout com facilidade.",
  },
  {
    icon: BarChart,
    title: "Análise de Conversão",
    description: "Acompanhe métricas importantes como visitantes, conversões e performance do chatbot. Otimize continuamente seus resultados.",
  },
  {
    icon: Shield,
    title: "Garantia Total",
    description: "Se você concluir o curso e não conseguir criar sua landing page, devolvemos 100% do valor + R$ 500,00 pelo seu tempo investido.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Tudo que Você Precisa para{" "}
            <span className="gradient-text">Criar e Vender</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ferramentas profissionais que transformam visitantes em clientes, sem complicação técnica.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Icon or Image */}
                  {feature.image ? (
                    <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
