// Constantes editáveis do site — ajuste aqui os dados oficiais.
export const COMPANY_NAME = "Bio Nature Cosméticos";
export const COMPANY_CNPJ = "06.787.149/0001-49";
export const BRAND_NAME = "Bio Extratus";
export const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
export const INSTAGRAM_URL = "#";
export const EMAIL = "contato@exemplo.com";

export const WHATSAPP_MESSAGE =
  "Olá! Conheci a Bio Nature pelo site e gostaria de saber mais sobre as condições para revender Bio Extratus no Piauí ou Maranhão.";

export const whatsappHref = () =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Vantagens", href: "#beneficios" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
];
