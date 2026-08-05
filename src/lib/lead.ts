// Função de envio isolada — pronta para integrar com webhook, CRM, Supabase,
// API externa ou planilha. Basta implementar o transporte dentro de sendLead.
export type Lead = {
  nome: string;
  whatsapp: string;
  cnpj: string;
  estado: string;
  cidade: string;
  faixaInvestimento: string;
  consentimento: boolean;
};

export const LEAD_WEBHOOK_URL = ""; // ex.: "https://seu-crm.com/webhook"

export async function sendLead(lead: Lead): Promise<{ ok: boolean }> {
  if (!LEAD_WEBHOOK_URL) {
    // Sem integração configurada: simula o envio sem expor dados sensíveis.
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true };
  }

  try {
    const response = await fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}

export const onlyDigits = (value: string) => value.replace(/\D/g, "");

export function maskCNPJ(value: string) {
  const digits = onlyDigits(value).slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

export function maskPhone(value: string) {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 10) {
    return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  }
  return d.replace(/^(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

export function isValidCNPJ(value: string) {
  const cnpj = onlyDigits(value);
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

  const calculateDigit = (length: number) => {
    let sum = 0;
    let position = length - 7;
    for (let index = 0; index < length; index++) {
      sum += Number(cnpj[index]) * position--;
      if (position < 2) position = 9;
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  return calculateDigit(12) === Number(cnpj[12]) && calculateDigit(13) === Number(cnpj[13]);
}

export function isValidPhone(value: string) {
  return onlyDigits(value).length >= 10;
}
