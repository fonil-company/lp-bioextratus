# Bio Nature Vision

Crie uma landing page institucional completa, moderna, responsiva e focada em conversão para a **Bio Nature Cosméticos**, distribuidora autorizada de produtos Bio Extratus para estabelecimentos no Piauí.

A landing page deve apresentar a Bio Nature como a empresa responsável pelo atendimento comercial, distribuição, cadastro dos clientes, análise cadastral e suporte para montagem dos pedidos.

A Bio Extratus deve aparecer como a marca de cosméticos comercializada pela Bio Nature.

Não apresentar a Bio Nature como fabricante dos produtos Bio Extratus.

---

# OBJETIVO DA LANDING PAGE

O objetivo principal da página é captar proprietários, gestores e compradores de estabelecimentos do Piauí interessados em revender Bio Extratus.

A página deve fazer o visitante compreender rapidamente:

* Quem é a Bio Nature Cosméticos.
* Qual marca está sendo comercializada.
* Quais estabelecimentos podem comprar.
* Quais são as condições comerciais.
* Como funciona o processo de cadastro.
* Como solicitar o catálogo.
* Como falar com a equipe comercial.

Todos os principais botões devem levar suavemente até o formulário de cadastro.

---

# IDENTIDADE VISUAL

## Conceito principal

Desenvolva a interface no estilo:

**Natural Premium Corporate**

A identidade deve combinar:

* Natureza.
* Confiança.
* Institucionalidade.
* Sofisticação.
* Cosméticos profissionais.
* Bem-estar.
* Minimalismo.
* Elegância.
* Organização comercial.

O resultado deve transmitir uma distribuidora profissional, estruturada e confiável.

A página não deve parecer:

* Uma loja virtual.
* Uma marca artesanal.
* Uma clínica de estética.
* Um site genérico de produtos naturais.
* Uma página de startup.
* Um catálogo popular de cosméticos.

A comunicação deve ter um equilíbrio entre natureza, elegância e solidez corporativa.

---

# TECNOLOGIA

Desenvolva utilizando:

* React.
* TypeScript.
* Tailwind CSS.
* Lucide Icons.
* Componentes reutilizáveis.
* HTML semântico.
* Código organizado por seções.

A página deve ser completamente responsiva para:

* Desktop.
* Tablet.
* Celular.

Implementar:

* Navegação por âncoras.
* Rolagem suave.
* Cabeçalho fixo.
* Menu mobile.
* Validação do formulário.
* Máscaras para CNPJ e WhatsApp.
* Feedback visual após o envio.
* Estados de hover e foco.
* Acessibilidade.
* Otimização básica para SEO.
* Imagens responsivas.
* Lazy loading.
* Respeito a `prefers-reduced-motion`.

---

# PALETA DE CORES

Utilize as seguintes variáveis:

```css
:root {
  --primary: #2E8B3C;
  --primary-dark: #1F5F2C;
  --primary-light: #56A85E;

  --secondary: #F4B400;
  --secondary-dark: #D99A00;
  --secondary-light: #FFD34D;

  --background: #FFFFFF;
  --background-alt: #F8FAF8;
  --surface: #FFFFFF;

  --border: #E8ECE8;

  --title: #1F4E2C;
  --body: #555555;
  --muted: #8A8A8A;
  --white: #FFFFFF;

  --success: #2E8B3C;
  --warning: #F4B400;
  --error: #E74C3C;
}
```

## Aplicação das cores

Utilizar o verde escuro `#1F5F2C` em:

* Cabeçalho.
* Rodapé.
* Títulos sobre fundos claros.
* Seções institucionais.
* Elementos de autoridade.

Utilizar o verde principal `#2E8B3C` em:

* Botões principais.
* Ícones.
* Destaques.
* Links.
* Números.
* Elementos naturais.

Utilizar o dourado `#F4B400` em:

* Botão principal do hero.
* Pequenos selos.
* Destaques comerciais.
* Estados de hover.
* Detalhes gráficos.
* Linhas e elementos de atenção.

O dourado deve aparecer como cor de destaque e não como cor dominante.

Usar fundos predominantemente brancos ou `#F8FAF8`.

---

# TIPOGRAFIA

## Títulos

Utilizar:

* Fonte: Cormorant Garamond.
* Peso: 600 ou 700.
* Estilo: serifado elegante.
* Cor: `#1F4E2C`.
* Sentence case.
* Boa legibilidade.
* Aparência institucional e premium.

Os títulos devem ser elegantes, mas não excessivamente ornamentados.

## Textos

Utilizar:

* Fonte: Inter.
* Peso: 400 ou 500.
* Cor: `#555555`.
* Altura de linha confortável.
* Parágrafos curtos.
* Tamanho mínimo de 16 pixels no desktop.

## Botões

Utilizar:

* Fonte: Inter.
* Peso: 600.
* Letras claras.
* Boa área de toque.
* Texto em caixa alta com moderação.

---

# LAYOUT

Utilize:

* Container máximo de 1.280 pixels.
* Grid de 12 colunas.
* Espaçamento vertical de aproximadamente 96 pixels entre seções no desktop.
* Espaçamento reduzido no celular.
* Cards com raio de 12 pixels.
* Gap de 24 pixels.
* Muito espaço em branco.
* Hierarquia visual clara.
* Conteúdos com largura confortável para leitura.

Evitar:

* Conteúdos muito comprimidos.
* Cards pequenos em excesso.
* Muitos elementos decorativos.
* Seções visualmente pesadas.
* Blocos de texto muito longos.

---

# COMPONENTES

## Cards

Aplicar:

* Fundo branco.
* Raio de 12 pixels.
* Sombra suave.
* Padding de 24 pixels.
* Borda discreta.
* Hover com deslocamento vertical de até 6 pixels.
* Transição de aproximadamente 250 milissegundos.

Sombra sugerida:

```css
box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
```

## Ícones

Utilizar ícones:

* Preferencialmente preenchidos ou duotone.
* Dentro de fundos arredondados.
* Verde principal.
* Fundo branco ou verde muito claro.
* Sem aparência infantil.
* Sem excesso de detalhes.

## Botões

### Primário

* Fundo: `#2E8B3C`.
* Texto branco.
* Raio: 10 pixels.
* Hover: `#1F5F2C`.

### Secundário

* Fundo: `#F4B400`.
* Texto: `#1F5F2C`.
* Hover: `#D99A00`.

### Outline

* Fundo transparente.
* Borda: `#2E8B3C`.
* Texto: `#2E8B3C`.
* Hover com fundo verde muito claro.

---

# ELEMENTOS GRÁFICOS

Utilizar com moderação:

* Formas orgânicas.
* Silhuetas de folhas.
* Ícones botânicos.
* Divisores finos.
* Linhas douradas.
* Texturas naturais muito discretas.
* Gradientes verdes suaves.
* Pequenos pontos ou detalhes dourados.

Não criar uma página com aparência de floresta ou jardim.

Os elementos naturais devem apoiar a identidade, sem competir com o conteúdo.

---

# FOTOGRAFIA

Utilizar fotografia no estilo:

**Natural Lifestyle Premium**

As imagens devem apresentar:

* Produtos Bio Extratus.
* Embalagens oficiais.
* Folhas.
* Ingredientes naturais.
* Ambientes organizados.
* Estabelecimentos.
* Atendimento comercial.
* Mulheres em situações naturais e profissionais.
* Produtos expostos em farmácias, lojas ou perfumarias.

Iluminação:

* Suave.
* Natural.
* Profissional.

Fundos:

* Branco.
* Verde suave.
* Tons neutros.
* Gradientes verdes discretos.

Não inventar:

* Embalagens.
* Rótulos.
* Nomes de linhas.
* Logotipos.
* Produtos.
* Certificações.

Criar placeholders elegantes para inserir posteriormente as imagens oficiais.

---

# CABEÇALHO

Criar um cabeçalho fixo com 72 pixels de altura.

Fundo:

`#1F5F2C`

À esquerda:

* Logo oficial da Bio Nature Cosméticos.
* Utilizar preferencialmente a versão branca do logo.

À direita:

* Início.
* A Bio Nature.
* Para quem é.
* Benefícios.
* Como funciona.
* Dúvidas.

Botão:

**QUERO SER REVENDEDOR**

Estilo:

* Fundo dourado.
* Texto verde escuro.
* Hover dourado escuro.
* Raio de 10 pixels.

Os links devem ser brancos.

No hover e no estado ativo, utilizar dourado.

No celular:

* Criar menu hambúrguer.
* Fundo verde escuro.
* Links com boa área de toque.
* Botão de cadastro em destaque.

Não criar:

* Campo de busca.
* Carrinho.
* Login.
* Área do cliente.

---

# SEÇÃO 1 — HERO

Criar um hero institucional e comercial em duas colunas.

Fundo:

* Gradiente verde suave.
* Base entre `#1F5F2C`, `#2E8B3C` e `#56A85E`.
* Overlay discreto.
* Elementos botânicos sutis.
* Texto com alto contraste.

O hero deve ocupar boa parte da primeira tela, sem ser exageradamente alto.

## Coluna de texto

Adicionar um pequeno selo dourado:

**DISTRIBUIÇÃO AUTORIZADA NO PIAUÍ**

Título principal:

**Leve Bio Extratus para o seu estabelecimento**

O título deve utilizar Cormorant Garamond, peso 700 e cor branca.

Texto:

“Tenha acesso a uma das marcas de cosméticos mais reconhecidas do Brasil, com produtos de alta procura, qualidade comprovada e condições especiais para lojistas do Piauí.”

Texto de apoio:

“Faça seu cadastro com a Bio Nature Cosméticos e conheça as condições para revender Bio Extratus.”

Botão principal:

**QUERO SER REVENDEDOR**

Estilo:

* Fundo dourado.
* Texto verde escuro.
* Hover dourado escuro.

Botão secundário:

**CONHECER AS CONDIÇÕES**

Estilo:

* Fundo transparente.
* Borda branca.
* Texto branco.
* Hover com fundo branco e texto verde escuro.

Abaixo dos botões, mostrar quatro condições rápidas:

* Pedido mínimo de R$ 300.
* Frete grátis para regiões atendidas.*
* Pagamento no boleto após análise.
* 5% de desconto para pagamento via PIX.

Utilizar ícones brancos ou dourados.

## Coluna visual

Criar uma composição sofisticada com:

* Produtos oficiais Bio Extratus.
* Folhas discretas.
* Fundo verde.
* Iluminação de estúdio suave.
* Elementos dourados pequenos.
* Formas orgânicas.
* Sombra natural.

Adicionar um pequeno card flutuante:

**Atendimento Bio Nature**

Texto menor:

**Suporte para montar seu primeiro pedido**

Não inventar embalagens ou produtos.

---

# SEÇÃO 2 — APRESENTAÇÃO INSTITUCIONAL

Fundo branco.

Criar uma composição em duas colunas.

## Coluna visual

Utilizar uma imagem institucional relacionada a:

* Produtos.
* Distribuição.
* Atendimento comercial.
* Estabelecimento parceiro.
* Organização de estoque.

## Coluna de conteúdo

Pequeno texto superior:

**BIO NATURE COSMÉTICOS**

Título:

**Uma parceria mais próxima do seu negócio**

Texto:

“A Bio Nature Cosméticos conecta estabelecimentos do Piauí a um portfólio profissional de produtos Bio Extratus, oferecendo atendimento próximo, suporte comercial e condições pensadas para diferentes tipos de negócio.

Nosso papel é tornar o processo de compra mais simples, orientar cada cliente na escolha do seu mix e construir parcerias duradouras com estabelecimentos de todo o estado.

Mais do que fornecer produtos, queremos ajudar nossos parceiros a vender com mais segurança e oferecer uma marca reconhecida aos seus consumidores.”

Adicionar três pequenos diferenciais:

* Produtos originais.
* Atendimento personalizado.
* Suporte para montar o pedido.

Utilizar ícones verdes dentro de pequenos fundos claros.

---

# SEÇÃO 3 — PARA QUEM É

Fundo:

`#F8FAF8`

Pequeno texto superior:

**OPORTUNIDADE PARA LOJISTAS**

Título:

**Bio Extratus pode fazer parte do mix do seu estabelecimento**

Texto:

“Atendemos diferentes tipos de negócios que desejam oferecer mais variedade, qualidade e confiança aos seus clientes.”

Criar seis cards:

1. Farmácias.
2. Lojas de cosméticos.
3. Perfumarias.
4. Mercados e supermercados.
5. Lojas de variedades.
6. Empórios e estabelecimentos de beleza.

Cada card deve conter:

* Ícone relacionado ao segmento.
* Nome do segmento.
* Pequena descrição opcional.
* Fundo branco.
* Raio de 12 pixels.
* Sombra suave.
* Hover com elevação.
* Pequeno detalhe dourado.

Texto abaixo:

“Não importa o tamanho do seu negócio. Nossa equipe ajuda você a iniciar com uma seleção de produtos compatível com a sua realidade.”

Botão:

**CONHECER AS CONDIÇÕES**

---

# SEÇÃO 4 — BENEFÍCIOS

Fundo branco.

Pequeno texto superior:

**VANTAGENS PARA O SEU NEGÓCIO**

Título:

**Por que trabalhar com Bio Extratus através da Bio Nature?**

Criar seis cards.

## Card 1

Título:

**Marca reconhecida**

Texto:

“Produtos presentes na rotina de milhares de consumidores e uma marca que transmite qualidade, cuidado e confiança.”

## Card 2

Título:

**Portfólio completo**

Texto:

“Linhas para diferentes tipos de cabelo, necessidades e perfis de consumidores.”

## Card 3

Título:

**Produtos com alta procura**

Texto:

“Soluções para hidratação, reconstrução, nutrição, fortalecimento e cuidados diários.”

## Card 4

Título:

**Condições para lojistas**

Texto:

“Pedido inicial acessível, boleto após análise e desconto para pagamento à vista.”

## Card 5

Título:

**Atendimento personalizado**

Texto:

“A equipe Bio Nature ajuda na escolha de um mix adequado ao perfil do estabelecimento.”

## Card 6

Título:

**Entrega facilitada**

Texto:

“Frete grátis para regiões atendidas, conforme as condições comerciais e logísticas.”

Os ícones devem estar dentro de blocos arredondados e utilizar verde como cor predominante.

Utilizar dourado apenas em pequenos detalhes.

---

# SEÇÃO 5 — PORTFÓLIO

Utilizar fundo verde muito claro ou branco.

Pequeno texto superior:

**SOLUÇÕES PARA DIFERENTES NECESSIDADES**

Título:

**Um portfólio completo para seus clientes**

Texto:

“Ofereça produtos desenvolvidos para diferentes rotinas e necessidades de cuidados capilares.”

Criar uma composição dividida:

## Área de produtos

Inserir fotografia ou mockup com produtos oficiais Bio Extratus.

## Área de categorias

Criar cards, tags ou blocos para:

* Hidratação e maciez.
* Fortalecimento dos fios.
* Controle da oleosidade.
* Reconstrução capilar.
* Nutrição e brilho.
* Cuidados para cabelos cacheados e crespos.
* Proteção e manutenção diária.
* Tratamentos para diferentes tipos de cabelo.

Texto complementar:

“São shampoos, condicionadores, máscaras, finalizadores, óleos e outros produtos desenvolvidos para uma rotina completa de cuidados.”

Botão:

**QUERO RECEBER O CATÁLOGO**

Não mostrar preços individuais.

Não criar carrinho ou recursos de e-commerce.

---

# SEÇÃO 6 — DIFERENCIAL COMERCIAL

Fundo branco.

Criar duas colunas.

Título:

**Um pedido pensado para a realidade do seu estabelecimento**

Texto:

“Cada estabelecimento possui um público, uma estrutura e um potencial de venda diferente.

Por isso, antes de indicar um pedido, nossa equipe busca entender o perfil do negócio, os produtos que já são comercializados e as principais necessidades dos consumidores.

A partir dessas informações, podemos ajudar na escolha de um mix mais estratégico, permitindo que o lojista comece com mais segurança.”

Adicionar três destaques:

* Análise do perfil do negócio.
* Sugestão de mix.
* Acompanhamento comercial.

Utilizar uma imagem de atendimento comercial ou de organização de produtos em estabelecimento.

---

# SEÇÃO 7 — COMO FUNCIONA

Fundo:

`#F8FAF8`

Pequeno texto superior:

**PROCESSO SIMPLES E SEGURO**

Título:

**Começar é simples**

Criar uma linha do tempo com cinco etapas.

## Etapa 1

Título:

**Faça seu cadastro**

Texto:

“Preencha seus dados e informe o CNPJ do estabelecimento.”

## Etapa 2

Título:

**Aguarde a análise**

Texto:

“Nossa equipe realizará a análise cadastral e apresentará as condições disponíveis.”

## Etapa 3

Título:

**Receba o catálogo**

Texto:

“Conheça os produtos, valores e condições comerciais.”

## Etapa 4

Título:

**Monte seu primeiro pedido**

Texto:

“Conte com o suporte da Bio Nature para escolher um mix adequado ao seu negócio.”

## Etapa 5

Título:

**Receba os produtos**

Texto:

“O pedido será preparado e encaminhado conforme a rota de entrega da sua região.”

No desktop:

* Linha do tempo horizontal.
* Conexão verde entre as etapas.

No celular:

* Linha do tempo vertical.

Os números devem aparecer em círculos verdes, com pequenos contornos ou detalhes dourados.

Botão:

**FAZER MEU CADASTRO**

---

# SEÇÃO 8 — CONDIÇÕES COMERCIAIS

Fundo branco.

Pequeno texto superior:

**CONDIÇÕES PARA LOJISTAS**

Título:

**Facilidades para o seu primeiro pedido**

Criar quatro cards.

## Card 1

Título:

**Pedido mínimo**

Destaque:

**R$ 300**

## Card 2

Título:

**Pagamento à vista**

Destaque:

**5% de desconto via PIX**

## Card 3

Título:

**Pagamento no boleto**

Destaque:

**Disponível após análise cadastral**

## Card 4

Título:

**Frete**

Destaque:

**Grátis para regiões atendidas***

Utilizar:

* Títulos em verde escuro.
* Valores em verde principal.
* Pequenos selos dourados.
* Ícones preenchidos.
* Cards com sombra suave.

Adicionar:

“Cadastro exclusivo para estabelecimentos com CNPJ.”

Texto complementar:

“Nosso time comercial apresentará todas as informações e ajudará você a encontrar a melhor forma de começar.”

---

# SEÇÃO 9 — PROVA DE CONFIANÇA

Usar fundo verde escuro ou uma combinação institucional de verde e branco.

Título em branco:

**Uma parceria para crescer junto com o seu negócio**

Texto:

“A Bio Nature atende estabelecimentos de diferentes regiões do Piauí, levando produtos originais, atendimento próximo e suporte durante todo o processo de compra.

Queremos que cada cliente tenha segurança para iniciar, facilidade para realizar os seus pedidos e acompanhamento para continuar crescendo.”

Criar uma área preparada para:

* Depoimentos reais.
* Fotografias de estabelecimentos.
* Indicadores comerciais.
* Cidades atendidas.
* Logos de parceiros.
* Avaliações reais.

Não inventar:

* Clientes.
* Depoimentos.
* Avaliações.
* Indicadores.
* Cidades.
* Certificações.

Utilizar placeholders claramente identificados no código.

---

# SEÇÃO 10 — FORMULÁRIO

Esta deve ser uma das seções de maior destaque da página.

Utilizar uma composição em duas colunas.

Fundo:

* Branco.
* Verde muito claro.
* Formas orgânicas discretas.
* Pequenos detalhes dourados.

## Coluna esquerda

Pequeno selo:

**ATENDIMENTO COMERCIAL**

Título:

**Cadastre seu estabelecimento**

Texto:

“Preencha as informações para receber o contato da equipe Bio Nature e conhecer as condições para revender Bio Extratus.”

Adicionar os benefícios:

* Acesso ao catálogo.
* Condições comerciais.
* Ajuda para montar o pedido.
* Atendimento personalizado.
* Produtos originais.

## Coluna direita

Criar um formulário dentro de um card branco.

Campos:

* Nome completo.
* Nome do estabelecimento.
* CNPJ.
* WhatsApp.
* Cidade.
* Tipo de estabelecimento.
* Já trabalha com produtos de beleza?
* Principal necessidade atual.

Opções do campo “Tipo de estabelecimento”:

* Farmácia.
* Loja de cosméticos.
* Perfumaria.
* Mercado ou supermercado.
* Loja de variedades.
* Empório.
* Outro.

Opções do campo “Já trabalha com produtos de beleza?”:

* Sim.
* Não.

Opções do campo “Principal necessidade atual”:

* Aumentar o faturamento.
* Melhorar o mix de produtos.
* Trabalhar com uma marca reconhecida.
* Encontrar melhores condições.
* Conhecer o catálogo.
* Outra necessidade.

Checkbox obrigatório:

“Concordo em receber o contato da equipe comercial da Bio Nature Cosméticos pelo WhatsApp ou telefone.”

Botão:

**QUERO CONHECER AS CONDIÇÕES**

Utilizar botão verde principal.

Criar validações:

* Nome obrigatório.
* CNPJ válido.
* WhatsApp válido.
* Cidade obrigatória.
* Tipo de estabelecimento obrigatório.
* Consentimento obrigatório.

Aplicar máscaras brasileiras em CNPJ e WhatsApp.

Após o envio, exibir:

**Cadastro enviado com sucesso! A equipe Bio Nature entrará em contato com você.**

Preparar integração futura com:

* Webhook.
* CRM.
* Supabase.
* API externa.
* Planilha.

Criar uma função de envio isolada no código.

Não expor informações sensíveis no console.

---

# SEÇÃO 11 — PERGUNTAS FREQUENTES

Fundo branco.

Pequeno texto superior:

**TIRE SUAS DÚVIDAS**

Título:

**Perguntas frequentes**

Criar um accordion acessível.

## Pergunta 1

**Preciso ter CNPJ para comprar?**

Resposta:

“Sim. As condições comerciais são destinadas a estabelecimentos com CNPJ.”

## Pergunta 2

**Qual é o pedido mínimo?**

Resposta:

“O pedido mínimo é de R$ 300.”

## Pergunta 3

**Posso comprar no boleto?**

Resposta:

“O pagamento no boleto pode ser disponibilizado após análise cadastral e de crédito.”

## Pergunta 4

**Existe desconto para pagamento à vista?**

Resposta:

“Sim. Pedidos pagos via PIX possuem 5% de desconto.”

## Pergunta 5

**O frete é gratuito?**

Resposta:

“O frete é gratuito para regiões atendidas, conforme a rota e as condições comerciais vigentes.”

## Pergunta 6

**A equipe ajuda a montar o pedido?**

Resposta:

“Sim. A Bio Nature pode sugerir um mix considerando o estabelecimento, o público e o valor disponível para investimento.”

## Pergunta 7

**Como recebo o catálogo?**

Resposta:

“Após o cadastro, nossa equipe comercial entrará em contato para apresentar o catálogo e as condições.”

---

# SEÇÃO 12 — CHAMADA FINAL

Criar uma seção com fundo verde escuro.

Adicionar:

* Gradiente verde discreto.
* Formas orgânicas suaves.
* Folhas em baixa opacidade.
* Pequenos detalhes dourados.

Título branco:

**Sua empresa pode ser a próxima parceira da Bio Nature no Piauí**

Texto branco:

“Ofereça aos seus clientes produtos Bio Extratus e conte com atendimento personalizado, suporte comercial e condições pensadas para o seu estabelecimento.”

Botão principal:

**QUERO REVENDER BIO EXTRATUS**

Estilo:

* Fundo dourado.
* Texto verde escuro.
* Hover dourado escuro.
* Leve elevação.

Abaixo do botão, mostrar:

* Pedido mínimo de R$ 300.
* Frete grátis para regiões atendidas.*
* Boleto sujeito à análise.
* 5% de desconto via PIX.

---

# RODAPÉ

Criar um rodapé institucional com fundo `#1F5F2C`.

À esquerda:

* Logo branco da Bio Nature Cosméticos.
* Texto institucional.

Texto:

“Distribuição e atendimento comercial de produtos Bio Extratus para estabelecimentos no Piauí.”

Criar colunas com links:

## Institucional

* Início.
* A Bio Nature.
* Benefícios.
* Como funciona.

## Atendimento

* WhatsApp.
* Instagram.
* E-mail.

## Legal

* Política de Privacidade.
* Termos de Uso.

Não inventar dados.

Criar constantes editáveis:

```ts
const COMPANY_NAME = "Bio Nature Cosméticos";
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";
const INSTAGRAM_URL = "#";
const EMAIL = "contato@exemplo.com";
```

Adicionar o aviso:

“*Consulte disponibilidade de entrega, rotas atendidas e condições comerciais para a sua cidade.”

Adicionar também:

“Bio Extratus é uma marca de seus respectivos proprietários. Logos, imagens e materiais oficiais devem ser utilizados mediante autorização.”

---

# BOTÃO FLUTUANTE DE WHATSAPP

Adicionar um botão flutuante no canto inferior direito.

Comportamento:

* Aparecer após o usuário começar a rolar.
* Utilizar verde.
* Possuir sombra suave.
* Ter animação discreta.
* Não cobrir o formulário.
* Não cobrir botões no celular.
* Ser acessível.

Mensagem automática:

“Olá! Conheci a Bio Nature pelo site e gostaria de saber mais sobre as condições para revender Bio Extratus.”

Criar:

```ts
const WHATSAPP_NUMBER = "55XXXXXXXXXXX";

const WHATSAPP_MESSAGE =
  "Olá! Conheci a Bio Nature pelo site e gostaria de saber mais sobre as condições para revender Bio Extratus.";
```

---

# SEO

Configurar:

## Title

**Bio Nature Cosméticos | Revenda Bio Extratus no Piauí**

## Meta description

**Conheça as condições da Bio Nature para revender Bio Extratus no Piauí. Pedido mínimo de R$ 300, suporte comercial e boleto após análise.**

## Palavras-chave

* Bio Nature Cosméticos.
* Bio Extratus Piauí.
* Revender Bio Extratus.
* Distribuidora de cosméticos no Piauí.
* Cosméticos para farmácias.
* Cosméticos para revenda.
* Fornecedor de produtos capilares.
* Distribuidora Bio Extratus.

Adicionar:

* Open Graph.
* Favicon.
* Canonical configurável.
* Alt text nas imagens.
* Hierarquia correta de headings.
* Dados estruturados básicos de organização.
* Informações estruturadas apenas com dados confirmados.

---

# ANIMAÇÕES

Utilizar animações discretas:

* Fade-in na entrada das seções.
* Pequeno deslocamento vertical.
* Elevação dos cards no hover.
* Escala máxima de `1.02`.
* Transições de aproximadamente 250 milissegundos.
* Accordion suave.
* Rolagem suave.

Respeitar:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

Não utilizar:

* Parallax intenso.
* Animações em loop.
* Elementos piscando.
* Movimentos exagerados.
* Contadores falsos.
* Carrosséis automáticos rápidos.

---

# REGRAS IMPORTANTES

* Todo o conteúdo deve estar em português do Brasil.
* Bio Nature deve aparecer como distribuidora e responsável pelo atendimento.
* Bio Extratus deve aparecer como a marca comercializada.
* Não afirmar que Bio Nature fabrica Bio Extratus.
* Não misturar ou fundir os logotipos.
* Não modificar logos.
* Não transformar a página em loja virtual.
* Não criar carrinho.
* Não criar login.
* Não criar busca.
* Não exibir preços individuais.
* Não inventar produtos.
* Não inventar linhas de produtos.
* Não inventar depoimentos.
* Não inventar números.
* Não inventar clientes.
* Não inventar cidades atendidas.
* Não inventar certificações.
* Não inventar endereço ou contatos.
* Não utilizar dourado em excesso.
* Não exagerar nos elementos naturais.
* Não criar uma aparência artesanal.
* Não criar uma aparência excessivamente feminina.
* Não utilizar bancos de imagens com aparência artificial.
* Não utilizar sombras pesadas.
* Não utilizar gradientes fortes.
* Não exagerar nos arredondamentos.
* Não usar textos genéricos em inglês.
* Priorizar clareza, confiança e conversão.
* Garantir excelente experiência mobile.

Entregue a landing page completa e funcional, com todas as seções implementadas, formulário validado, botão de WhatsApp configurável, navegação por âncoras, identidade visual Natural Premium Corporate e componentes fáceis de editar.

Antes de finalizar, revise visualmente a página e confirme que:

* O cabeçalho está em verde escuro.
* O hero utiliza um gradiente verde elegante.
* O principal CTA do hero está em dourado.
* A tipografia Cormorant Garamond aparece nos títulos.
* A fonte Inter aparece nos textos e botões.
* A Bio Nature está posicionada como distribuidora.
* A Bio Extratus está posicionada como marca comercializada.
* Há bastante espaço em branco.
* Os produtos são protagonistas.
* Os elementos naturais são discretos.
* A página transmite confiança institucional.
* O formulário está destacado.
* A página está otimizada para conversão.
* A experiência mobile está completa.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/813e51b5-40b6-4ba3-b7a2-9710784498d5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
