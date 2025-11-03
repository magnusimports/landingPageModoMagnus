import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trpc } from "@/lib/trpc";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const createLead = trpc.leads.create.useMutation({
    onSuccess: () => {
      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em breve. Verifique seu email!",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    },
    onError: (error) => {
      toast.error("Erro ao enviar mensagem", {
        description: error.message || "Tente novamente mais tarde.",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createLead.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Pronto para <span className="gradient-text">Transformar</span> seu Negócio?
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e garanta sua vaga com condições especiais
            </p>
          </div>

          <Card className="border-2 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={createLead.isPending}
                    className="h-12"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={createLead.isPending}
                    className="h-12"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">WhatsApp (opcional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={createLead.isPending}
                    className="h-12"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem (opcional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos um pouco sobre você e seus objetivos..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={createLead.isPending}
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-lg py-6"
                  disabled={createLead.isPending}
                >
                  {createLead.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Quero Garantir Minha Vaga
                    </>
                  )}
                </Button>

                {/* Privacy Notice */}
                <p className="text-xs text-center text-muted-foreground">
                  Ao enviar este formulário, você concorda em receber comunicações sobre o curso Modo Magnus. 
                  Seus dados estão seguros e não serão compartilhados com terceiros.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold gradient-text">⚡</div>
              <div className="font-semibold">Resposta Rápida</div>
              <div className="text-sm text-muted-foreground">Em até 24 horas úteis</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold gradient-text">🔒</div>
              <div className="font-semibold">100% Seguro</div>
              <div className="text-sm text-muted-foreground">Seus dados protegidos</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold gradient-text">💬</div>
              <div className="font-semibold">Suporte Dedicado</div>
              <div className="text-sm text-muted-foreground">Tire todas as dúvidas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
