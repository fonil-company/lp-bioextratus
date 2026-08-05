import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import carousel1 from "@/assets/CARROSSEL/1.jpeg";
import carousel2 from "@/assets/CARROSSEL/2.jpeg";
import carousel3 from "@/assets/CARROSSEL/3.jpeg";
import carousel4 from "@/assets/CARROSSEL/4.jpeg";
import carousel5 from "@/assets/CARROSSEL/5.jpeg";
import carousel6 from "@/assets/CARROSSEL/6.jpeg";
import { Reveal } from "./Reveal";

const slides = [
  { image: carousel1, title: "Estrutura própria", alt: "Fachada da operação Bio Nature" },
  { image: carousel2, title: "Operação regional", alt: "Área externa da distribuidora" },
  { image: carousel3, title: "Estoque organizado", alt: "Equipe movimentando produtos no estoque" },
  {
    image: carousel4,
    title: "Conferência de produtos",
    alt: "Conferência de produtos Bio Extratus",
  },
  { image: carousel5, title: "Atendimento comercial", alt: "Equipe comercial em atendimento" },
  { image: carousel6, title: "Separação de pedidos", alt: "Separação de caixas para expedição" },
];

export function OperationalCarousel() {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(slides.length);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrevious = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollPrev()) {
      emblaApi.scrollPrev();
      return;
    }
    emblaApi.scrollTo(emblaApi.scrollSnapList().length - 1);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
      return;
    }
    emblaApi.scrollTo(0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSnapCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (
      !emblaApi ||
      !isPlaying ||
      isHovered ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(scrollNext, 4500);
    return () => window.clearInterval(timer);
  }, [emblaApi, isHovered, isPlaying, scrollNext]);

  return (
    <section id="estrutura" className="overflow-hidden bg-background py-20 md:py-24">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Por dentro da Bio Nature</p>
            <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">
              Estrutura para atender sua loja de perto.
            </h2>
          </div>
          <p className="max-w-md text-body md:text-right">
            Da conferência à separação, cada pedido passa por uma operação preparada para abastecer
            lojistas no Piauí e Maranhão.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Estrutura e operação da Bio Nature"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div ref={viewportRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
              <div className="-ml-4 flex touch-pan-y">
                {slides.map((slide, index) => (
                  <div
                    key={slide.title}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${slides.length}`}
                    className="min-w-0 flex-[0_0_84%] pl-4 sm:flex-[0_0_58%] lg:flex-[0_0_33.333%]"
                  >
                    <article className="group relative aspect-[4/5] overflow-hidden bg-primary-dark">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-transparent to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white md:p-6">
                        <h3 className="text-2xl text-white">{slide.title}</h3>
                        <span className="shrink-0 text-[10px] font-bold tracking-[0.12em] text-white/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <div className="flex items-center gap-2">
                <CarouselButton label="Imagem anterior" onClick={scrollPrevious}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </CarouselButton>
                <CarouselButton label="Próxima imagem" onClick={scrollNext}>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </CarouselButton>
                <CarouselButton
                  label={
                    isPlaying ? "Pausar reprodução automática" : "Iniciar reprodução automática"
                  }
                  onClick={() => setIsPlaying((playing) => !playing)}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Play className="h-4 w-4" aria-hidden="true" />
                  )}
                </CarouselButton>
              </div>

              <div className="order-last col-span-2 h-px overflow-hidden bg-primary/16 md:order-none md:col-span-1">
                <span
                  className="block h-full bg-secondary transition-[width] duration-500"
                  style={{ width: `${((selectedIndex + 1) / snapCount) * 100}%` }}
                />
              </div>

              <div className="flex min-w-16 items-center justify-end gap-2 text-xs font-bold text-title">
                <span className="text-secondary-dark">
                  {String(selectedIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-subtle">/</span>
                <span>{String(snapCount).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2" aria-label="Selecionar imagem">
              {Array.from({ length: snapCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ir para imagem ${index + 1}`}
                  aria-current={selectedIndex === index ? "true" : undefined}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1.5 transition-[width,background-color] duration-300 ${selectedIndex === index ? "w-8 bg-secondary" : "w-3 bg-primary/20 hover:bg-primary/45"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center border border-primary/25 text-primary transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
    >
      {children}
    </button>
  );
}
