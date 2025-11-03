import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createLead, getAllLeads, saveChatMessage, getChatHistory } from "./db";
import { invokeLLM } from "./_core/llm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Lead capture router
  leads: router({
    create: publicProcedure
      .input(
        z.object({
          name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
          email: z.string().email("Email inválido"),
          phone: z.string().optional(),
          message: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createLead({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          message: input.message || null,
          source: "landing_page",
          status: "new",
        });
        return { success: true };
      }),
    
    list: publicProcedure.query(async () => {
      return await getAllLeads();
    }),
  }),

  // Chatbot router
  chatbot: router({
    sendMessage: publicProcedure
      .input(
        z.object({
          message: z.string(),
          sessionId: z.string(),
        })
      )
      .mutation(async ({ input }) => {
        const { message, sessionId } = input;

        // Save user message
        await saveChatMessage({
          sessionId,
          role: "user",
          content: message,
        });

        // Get chat history for context
        const history = await getChatHistory(sessionId, 10);

        // Build messages for LLM
        const messages = [
          {
            role: "system" as const,
            content: `Você é um assistente virtual do curso "Modo Magnus". Seu objetivo é ajudar visitantes a entenderem o curso e responder dúvidas sobre:

**Sobre o Curso:**
- Nome: Modo Magnus
- Promessa: Aprenda a criar landing pages profissionais com chatbot integrado e banco de dados, mesmo sem saber programar
- Preço: De R$ 499,00 por R$ 150,00 (promoção Black Friday) em até 12x de R$ 14,99
- Garantia: Se concluir o curso e não conseguir criar sua landing page, devolvemos 100% + R$ 500,00 pelo seu tempo

**Conteúdo do Curso:**
- Módulo 0: Mentalidade Magnus (Mindset)
- Módulo 1: Planejamento e Estratégia Digital
- Módulo 2: Construindo sua Landing Page (ferramenta no-code)
- Módulo 3: Automação e Inteligência (Chatbot com IA)
- Módulo 4: Lançamento e Otimização
- Bônus: Templates, Guia de Prompts, Comunidade Exclusiva

**Público-Alvo:**
- Empreendedores e donos de negócios
- Profissionais de marketing e vendas
- Freelancers
- Iniciantes em tecnologia

Seja amigável, entusiasmado e focado em mostrar o valor da transformação que o curso oferece. Use emojis ocasionalmente para tornar a conversa mais calorosa. Responda de forma concisa e direta.`,
          },
          ...history.slice(-8).map((msg) => ({
            role: msg.role as "user" | "assistant",
            content: msg.content,
          })),
        ];

        // Call LLM
        const response = await invokeLLM({
          messages,
        });

        const rawContent = response.choices[0]?.message?.content;
        const assistantMessage = typeof rawContent === 'string' 
          ? rawContent 
          : "Desculpe, não consegui processar sua mensagem.";

        // Save assistant response
        await saveChatMessage({
          sessionId,
          role: "assistant",
          content: assistantMessage,
        });

        return {
          message: assistantMessage,
        };
      }),

    getHistory: publicProcedure
      .input(
        z.object({
          sessionId: z.string(),
        })
      )
      .query(async ({ input }) => {
        return await getChatHistory(input.sessionId);
      }),
  }),
});

export type AppRouter = typeof appRouter;
