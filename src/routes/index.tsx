import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { BannerCarousel } from "@/components/landing/BannerCarousel";
import { Beneficios, ComoFunciona, ParaQuem, Portfolio } from "@/components/landing/Sections";
import { OperationalCarousel } from "@/components/landing/OperationalCarousel";
import { Coverage } from "@/components/landing/Coverage";
import { Faq } from "@/components/landing/Faq";
import { CtaFinal, Footer } from "@/components/landing/Closing";

const TITLE = "Bio Nature Cosméticos | Revenda Bio Extratus no Piauí e Sul do Maranhão";
const DESCRIPTION =
  "Abasteça seu estabelecimento com produtos Bio Extratus, catálogo comercial, pedido mínimo de R$ 300 e suporte para montar seu primeiro mix.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Bio Nature Cosméticos, Bio Extratus Piauí, Bio Extratus Sul do Maranhão, revender Bio Extratus, distribuidora de cosméticos, cosméticos para farmácias, cosméticos para revenda, fornecedor de produtos capilares",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bio Nature Cosméticos",
          description:
            "Distribuição e atendimento comercial de produtos Bio Extratus para estabelecimentos no Piauí e Sul do Maranhão.",
          areaServed: ["Piauí, Brasil", "Sul do Maranhão, Brasil"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BannerCarousel />
        <ParaQuem />
        <Coverage />
        <OperationalCarousel />
        <Beneficios />
        <Portfolio />
        <ComoFunciona />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
