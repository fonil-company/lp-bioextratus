import { useEffect, useState } from "react";
import { ArrowRight, BookOpen, Instagram, Leaf, Mail, MessageCircle } from "lucide-react";
import { COMPANY_CNPJ, COMPANY_NAME, EMAIL, INSTAGRAM_URL, whatsappHref } from "@/lib/site";
import { Reveal } from "./Reveal";
import { btnGold } from "./ui";

const AVISO_FRETE =
  "*Consulte as cidades, rotas de entrega e condições comerciais disponíveis para o seu estabelecimento.";

export function CtaFinal() {
  return (
    <section className="border-y border-primary/15 bg-primary-soft py-20 md:py-24">
      <Reveal className="container-page text-center">
        <p className="eyebrow">Comece sua parceria</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl md:text-6xl">
          Pronto para colocar Bio Extratus no seu mix?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-body">
          Receba o catálogo e monte seu primeiro pedido com apoio comercial da Bio Nature.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#cadastro" className={`${btnGold} uppercase`}>
            <BookOpen className="h-4 w-4" /> Receber catálogo comercial
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-secondary bg-white px-6 py-3 text-sm font-bold uppercase text-secondary transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-white"
          >
            <MessageCircle className="h-4 w-4" /> Falar com um consultor
          </a>
        </div>
        <p className="mt-9 text-xs font-bold uppercase tracking-[0.08em] text-primary">
          Pedido mínimo de R$ 300 <span className="mx-2 text-secondary">·</span> 5% no PIX{" "}
          <span className="mx-2 text-secondary">·</span> Boleto sujeito à análise{" "}
          <span className="mx-2 text-secondary">·</span> Frete grátis para regiões atendidas*
        </p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-dark pb-8 pt-16 text-white/70">
      <div className="container-page grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-secondary/60">
              <Leaf className="h-4.5 w-4.5 text-secondary" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-[family-name:var(--font-display)] text-xl leading-none text-white">
                {COMPANY_NAME}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            Distribuição e atendimento comercial de produtos Bio Extratus para empresas no Piauí e
            Maranhão.
          </p>
          <p className="mt-3 text-xs font-semibold text-white/55">CNPJ {COMPANY_CNPJ}</p>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-sans)] text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
            Comercial
          </h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a href="#cadastro" className="transition-colors hover:text-white">
                Catálogo comercial
              </a>
            </li>
            <li>
              <a href="#condicoes" className="transition-colors hover:text-white">
                Condições de compra
              </a>
            </li>
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Atendimento pelo WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-[family-name:var(--font-sans)] text-[10px] font-bold uppercase tracking-[0.14em] text-secondary">
            Contato e legal
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={INSTAGRAM_URL}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" /> E-mail
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Termos de Uso
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-14 grid gap-4 border-t border-white/12 pt-6 text-[11px] leading-relaxed text-white/42 md:grid-cols-2">
        <p>{AVISO_FRETE}</p>
        <p className="md:text-right">Bio Extratus é uma marca de seus respectivos proprietários.</p>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Bio Nature no WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full border border-white/25 bg-primary text-white shadow-[0_12px_30px_rgba(13,55,29,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark ${visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
