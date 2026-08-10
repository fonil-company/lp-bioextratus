import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import banner1 from "@/assets/Banner 1.jpg";
import banner2 from "@/assets/Banner 2.jpg";
import banner3 from "@/assets/Banner 3.jpg";
import banner4 from "@/assets/Banner 4.jpg";
import { Reveal } from "./Reveal";

const banners = [
  { image: banner1, alt: "Banner Bio Extratus para revenda em lojas" },
  { image: banner2, alt: "Banner Bio Extratus com mix de produtos capilares" },
  { image: banner3, alt: "Banner Bio Extratus com linha de produtos para lojistas" },
  { image: banner4, alt: "Banner Bio Extratus para abastecimento comercial" },
];

export function BannerCarousel() {
  const [viewportRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrevious = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
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

    const timer = window.setInterval(scrollNext, 4200);
    return () => window.clearInterval(timer);
  }, [emblaApi, isHovered, isPlaying, scrollNext]);

  return (
    <section id="banners" className="overflow-hidden bg-background py-20 md:py-24">
      <div className="container-page">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Bio Extratus em destaque</p>
            <h2 className="mt-5 max-w-3xl text-4xl md:text-6xl">
              Campanhas prontas para valorizar sua vitrine.
            </h2>
          </div>
          <p className="max-w-md text-body md:text-right">
            Uma selecao visual dos banners comerciais para apresentar o mix Bio Extratus com mais
            impacto no ponto de venda.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div
            role="region"
            aria-roledescription="carrossel"
            aria-label="Banners Bio Extratus"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div ref={viewportRef} className="cursor-grab overflow-hidden active:cursor-grabbing">
              <div className="-ml-4 flex touch-pan-y">
                {banners.map((banner, index) => (
                  <div
                    key={banner.image}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} de ${banners.length}`}
                    className="min-w-0 flex-[0_0_92%] pl-4 md:flex-[0_0_78%] lg:flex-[0_0_68%]"
                  >
                    <figure className="relative aspect-[16/5] overflow-hidden bg-white shadow-[0_22px_60px_rgba(24,62,37,0.14)]">
                      <img
                        src={banner.image}
                        alt={banner.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        className="h-full w-full object-contain object-center"
                      />
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid grid-cols-[1fr_auto] items-center gap-6 md:grid-cols-[auto_1fr_auto]">
              <div className="flex items-center gap-2">
                <CarouselButton label="Banner anterior" onClick={scrollPrevious}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </CarouselButton>
                <CarouselButton label="Proximo banner" onClick={scrollNext}>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </CarouselButton>
                <CarouselButton
                  label={
                    isPlaying ? "Pausar reproducao automatica" : "Iniciar reproducao automatica"
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
                  style={{ width: `${((selectedIndex + 1) / banners.length) * 100}%` }}
                />
              </div>

              <div className="flex min-w-16 items-center justify-end gap-2 text-xs font-bold text-title">
                <span className="text-secondary-dark">
                  {String(selectedIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-subtle">/</span>
                <span>{String(banners.length).padStart(2, "0")}</span>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2" aria-label="Selecionar banner">
              {banners.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ir para banner ${index + 1}`}
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
  children: ReactNode;
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
