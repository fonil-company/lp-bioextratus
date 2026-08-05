import {
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  Droplets,
  Handshake,
  PackageCheck,
  Pill,
  ShoppingBasket,
  Sparkles,
  Store,
  Tags,
  Truck,
} from "lucide-react";
import portfolioImg from "@/assets/portfolio.jpg";
import { whatsappHref } from "@/lib/site";
import { Reveal } from "./Reveal";
import { btnGold, btnOutline, btnPrimary } from "./ui";

const segmentos = [
  { icon: Pill, title: "Farmácias e drogarias" },
  { icon: Droplets, title: "Perfumarias" },
  { icon: Sparkles, title: "Lojas de cosméticos" },
  { icon: ShoppingBasket, title: "Mercados" },
  { icon: Store, title: "Lojas de variedades" },
  { icon: Building2, title: "Outros estabelecimentos" },
];

export function ParaQuem() {
  return (
    <section id="para-quem" className="border-y border-border bg-background-alt py-20 md:py-24">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow">Para empresas com CNPJ</p>
            <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">Feito para quem vende beleza.</h2>
          </div>
          <p className="max-w-md text-body">
            Atendimento comercial no Piauí e Maranhão para estabelecimentos que querem ampliar o
            mix.
          </p>
        </Reveal>

        <ul className="mt-11 grid border-l border-t border-primary/20 sm:grid-cols-2 lg:grid-cols-3">
          {segmentos.map(({ icon: Icon, title }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 45}
              className="group flex min-h-24 items-center gap-4 border-b border-r border-primary/20 bg-white/55 px-5 py-5 transition-colors hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/25 text-primary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary group-hover:text-white">
                <Icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <span className="font-[family-name:var(--font-display)] text-lg text-title">
                {title}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const beneficios = [
  {
    icon: PackageCheck,
    title: "Produtos originais",
    text: "Portfólio Bio Extratus para abastecer seu ponto de venda.",
  },
  {
    icon: Tags,
    title: "A partir de R$ 300",
    text: "Um pedido inicial acessível para começar com mais segurança.",
  },
  {
    icon: ClipboardCheck,
    title: "Mix sob medida",
    text: "Ajuda para escolher produtos alinhados ao perfil dos seus clientes.",
  },
  {
    icon: Handshake,
    title: "Atendimento regional",
    text: "Suporte comercial próximo, do catálogo ao reabastecimento.",
  },
];

const condicoes = [
  "R$ 300 mínimo",
  "5% no PIX",
  "Boleto após análise",
  "Frete em regiões atendidas*",
];

export function Beneficios() {
  return (
    <section id="beneficios" className="bg-primary-dark py-20 text-white md:py-24">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-7 border-b border-white/16 pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow !text-secondary">A oferta, sem complicação</p>
            <h2 className="mt-5 max-w-2xl text-4xl text-white md:text-5xl">
              Tudo o que sua loja precisa para começar.
            </h2>
          </div>
          <a href="#cadastro" className={`${btnGold} uppercase`}>
            Receber catálogo <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4">
          {beneficios.map(({ icon: Icon, title, text }, index) => (
            <Reveal
              as="li"
              key={title}
              delay={index * 60}
              className="border-b border-white/14 py-8 pr-6 md:even:border-l md:even:pl-7 lg:min-h-64 lg:border-b-0 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
              <h3 className="mt-8 text-2xl text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/62">{text}</p>
            </Reveal>
          ))}
        </ul>

        <div id="condicoes">
          <Reveal className="mt-3 grid overflow-hidden border border-white/16 bg-white/6 sm:grid-cols-2 lg:grid-cols-4">
            {condicoes.map((item, index) => (
              <span
                key={item}
                className={`flex min-h-14 items-center justify-center px-4 py-3 text-center text-xs font-bold uppercase text-white/82 ${index > 0 ? "sm:border-l sm:border-white/14" : ""} ${index > 1 ? "border-t border-white/14 lg:border-t-0" : ""}`}
              >
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const categorias = [
  "Shampoos e condicionadores",
  "Máscaras de tratamento",
  "Finalizadores",
  "Óleos capilares",
  "Hidratação e nutrição",
  "Cabelos cacheados e crespos",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative min-h-[680px] overflow-hidden bg-primary-dark">
      <img
        src={portfolioImg}
        alt="Produtos para diferentes rotinas de cuidados capilares"
        loading="lazy"
        width={1280}
        height={960}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,43,24,0.96)_0%,rgba(11,43,24,0.82)_50%,rgba(11,43,24,0.18)_100%)] max-md:bg-[linear-gradient(180deg,rgba(11,43,24,0.94)_0%,rgba(11,43,24,0.72)_72%,rgba(11,43,24,0.9)_100%)]" />

      <div className="container-page relative flex min-h-[680px] items-center py-20">
        <Reveal direction="left" className="max-w-2xl">
          <p className="eyebrow !text-secondary">Portfólio Bio Extratus</p>
          <h2 className="mt-5 text-4xl text-white md:text-6xl">Um mix completo para sua loja.</h2>
          <ul className="mt-8 grid gap-x-7 gap-y-3 sm:grid-cols-2">
            {categorias.map((categoria) => (
              <li
                key={categoria}
                className="flex items-center gap-2 border-b border-white/18 pb-3 text-sm font-semibold text-white/88"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden="true" />
                {categoria}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#cadastro"
              className={`${btnPrimary} !bg-secondary !text-white hover:!bg-secondary-dark`}
            >
              Ver catálogo <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-secondary"
            >
              Falar com um consultor <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const etapas = [
  { title: "Faça seu cadastro", text: "Conte quem é você e onde está sua empresa." },
  { title: "Receba o catálogo", text: "Um consultor apresenta produtos e condições." },
  { title: "Monte seu pedido", text: "Escolha seu mix com apoio da equipe Bio Nature." },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="border-y border-border bg-background-alt py-20 md:py-24">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">É simples começar</p>
            <h2 className="mt-5 max-w-2xl text-4xl md:text-5xl">Do cadastro ao primeiro pedido.</h2>
          </div>
          <a href="#cadastro" className={btnOutline}>
            Começar agora <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <ol className="mt-12 grid border-l border-t border-primary/20 md:grid-cols-3">
          {etapas.map((etapa, index) => (
            <Reveal
              as="li"
              key={etapa.title}
              delay={index * 80}
              className="group min-h-52 border-b border-r border-primary/20 bg-white/55 p-7 transition-colors hover:bg-white md:p-8"
            >
              <span className="text-xs font-bold text-secondary-dark">0{index + 1}</span>
              <h3 className="mt-9 text-2xl">{etapa.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-subtle">{etapa.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
