import { ArrowRight, MapPin, Truck } from "lucide-react";
import coverageMap from "@/assets/coverage-piaui-maranhao.jpg";
import { Reveal } from "./Reveal";
import { btnGold } from "./ui";

const states = [
  {
    name: "Piauí",
    description: "Atendimento comercial e distribuição regional",
    color: "bg-secondary",
  },
  {
    name: "Maranhão",
    description: "Suporte para montar e reabastecer seu mix",
    color: "bg-primary",
  },
];

export function Coverage() {
  return (
    <section id="abrangencia" className="overflow-hidden bg-white py-20 md:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <Reveal direction="left">
          <p className="eyebrow">Área de atendimento</p>
          <h2 className="mt-5 max-w-xl text-4xl md:text-5xl">
            Sua loja no Piauí ou Maranhão? Conte com a Bio Nature.
          </h2>
          <p className="mt-6 max-w-lg text-body">
            Atendimento para empresas com CNPJ, apoio na escolha dos produtos e condições comerciais
            para sua região.
          </p>

          <ul className="mt-9 border-y border-primary/18">
            {states.map((state, index) => (
              <li
                key={state.name}
                className={`flex items-center gap-4 py-5 ${index > 0 ? "border-t border-primary/18" : ""}`}
              >
                <span className={`h-10 w-1 shrink-0 ${state.color}`} aria-hidden="true" />
                <span className="min-w-0">
                  <strong className="block text-base font-extrabold text-title">
                    {state.name}
                  </strong>
                  <span className="mt-0.5 block text-sm text-subtle">{state.description}</span>
                </span>
                <MapPin className="ml-auto h-5 w-5 shrink-0 text-primary/55" aria-hidden="true" />
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#cadastro" className={`${btnGold} uppercase`}>
              Consultar cidade <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-subtle">
              <Truck className="h-4 w-4 text-primary" aria-hidden="true" />
              Rotas e frete variam conforme a cidade.
            </span>
          </div>
        </Reveal>

        <Reveal direction="right" delay={100}>
          <figure className="overflow-hidden border border-primary/16 bg-primary-dark shadow-[0_24px_60px_rgba(13,55,29,0.16)]">
            <img
              src={coverageMap}
              alt="Mapa do Brasil com Piauí e Maranhão destacados"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="grid grid-cols-2 border-t border-white/12 bg-primary-dark px-5 py-4 text-xs font-bold text-white sm:px-7">
              <span className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 bg-secondary" aria-hidden="true" /> Piauí
              </span>
              <span className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 bg-primary-light" aria-hidden="true" /> Maranhão
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
