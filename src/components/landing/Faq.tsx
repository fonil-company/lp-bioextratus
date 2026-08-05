import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  {
    q: "Quem pode comprar com a Bio Nature?",
    a: "Atendemos farmácias, perfumarias, lojas de cosméticos, mercados, lojas de variedades e outros estabelecimentos com CNPJ.",
  },
  { q: "Qual é o valor mínimo do pedido?", a: "O pedido mínimo é de R$ 300." },
  {
    q: "Preciso ter CNPJ?",
    a: "Sim. As condições comerciais são destinadas a empresas e estabelecimentos com CNPJ.",
  },
  {
    q: "Posso comprar no boleto?",
    a: "A possibilidade de pagamento no boleto depende de análise cadastral e de crédito. A aprovação não é automática.",
  },
  {
    q: "Existe desconto para pagamento à vista?",
    a: "Sim. Pedidos pagos via PIX possuem 5% de desconto.",
  },
  {
    q: "O frete é gratuito?",
    a: "O frete é grátis para as regiões atendidas, conforme disponibilidade de rota e condições comerciais vigentes.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="section-y bg-background">
      <div className="container-page grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">Perguntas frequentes</p>
          <h2 className="mt-5 text-4xl md:text-6xl">Dúvidas sobre a parceria.</h2>
          <p className="mt-6 max-w-sm text-body">
            Reunimos aqui as respostas mais importantes sobre cadastro, pagamento e entrega.
          </p>
        </Reveal>

        <Reveal delay={100} direction="right" className="border-t border-primary/30">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="border-b border-primary/20">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between gap-5 py-6 text-left font-[family-name:var(--font-sans)] text-base font-bold text-title transition-colors hover:text-primary"
                  >
                    <span className="flex gap-4">
                      <span className="pt-0.5 text-[10px] text-secondary-dark">0{index + 1}</span>
                      {item.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary/25 transition-colors group-hover:bg-primary group-hover:text-white">
                      <ChevronDown
                        aria-hidden="true"
                        className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pl-8 pr-12 text-sm leading-relaxed text-body">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
