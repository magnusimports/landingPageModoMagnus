import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso saber programar para fazer o curso?",
    answer: "Não! O Modo Magnus foi criado especialmente para pessoas sem conhecimento técnico. Você vai aprender a usar ferramentas no-code que não exigem programação. Se você sabe usar um computador e navegar na internet, você consegue fazer o curso.",
  },
  {
    question: "Quanto tempo leva para concluir o curso?",
    answer: "O curso foi desenhado para ser concluído em 4 a 6 semanas, dedicando cerca de 2-3 horas por semana. Mas você tem acesso vitalício, então pode ir no seu próprio ritmo. Alguns alunos terminam em 2 semanas, outros levam 2 meses. O importante é que você aprenda de verdade.",
  },
  {
    question: "Como funciona a garantia de resultado?",
    answer: "Se você concluir 100% do curso, aplicar o método conforme ensinado e ainda assim não conseguir criar sua landing page profissional, nós devolvemos 100% do seu investimento E pagamos R$ 500,00 adicionais pelo seu tempo. Simples assim. O risco é todo nosso.",
  },
  {
    question: "Vou precisar pagar por outras ferramentas?",
    answer: "Durante o curso, você vai aprender a usar a plataforma Manus, que oferece um plano gratuito robusto para começar. Para o chatbot, usamos a API do Google Gemini (que tem créditos gratuitos iniciais). Para o banco de dados, usamos Google Sheets (gratuito). Você pode começar sem investir nada além do curso.",
  },
  {
    question: "O curso é ao vivo ou gravado?",
    answer: "O curso é 100% online e gravado, então você pode assistir quando e onde quiser. Além disso, você tem acesso à comunidade exclusiva no Discord onde pode tirar dúvidas, trocar experiências com outros alunos e receber suporte direto.",
  },
  {
    question: "Quanto posso cobrar criando landing pages para clientes?",
    answer: "No mercado, uma landing page profissional com chatbot e integração de banco de dados custa entre R$ 2.000 e R$ 10.000. Com o conhecimento do curso, você pode oferecer esse serviço e recuperar seu investimento na primeira venda. Muitos alunos cobram entre R$ 1.500 e R$ 5.000 por projeto.",
  },
  {
    question: "Recebo certificado ao concluir?",
    answer: "Sim! Ao concluir 100% do curso, você recebe um certificado digital de conclusão que pode adicionar ao seu LinkedIn e usar para comprovar suas habilidades.",
  },
  {
    question: "Por quanto tempo tenho acesso ao curso?",
    answer: "Acesso vitalício! Uma vez matriculado, o curso é seu para sempre. Isso inclui todas as atualizações futuras que fizermos no conteúdo, sem custo adicional.",
  },
  {
    question: "E se eu tiver dúvidas durante o curso?",
    answer: "Você tem três canais de suporte: 1) Comunidade exclusiva no Discord com outros alunos e instrutores, 2) Suporte por email com resposta em até 24h úteis, 3) Chatbot inteligente 24/7 treinado com todo o conteúdo do curso.",
  },
  {
    question: "A promoção de Black Friday é real?",
    answer: "Sim! Estamos oferecendo 70% de desconto (de R$ 499 por R$ 150) por tempo limitado. Após a promoção, o preço volta ao valor normal. Esta é a melhor oportunidade para entrar no curso com o menor investimento possível.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Perguntas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tudo que você precisa saber antes de começar sua transformação
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still Have Questions CTA */}
          <div className="mt-12 text-center space-y-4 bg-muted/50 rounded-lg p-8">
            <h3 className="text-xl font-bold">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground">
              Converse com nosso chatbot inteligente ou preencha o formulário abaixo para falar diretamente conosco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
