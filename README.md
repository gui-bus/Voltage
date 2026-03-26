# <p align="center">VOLTAGE</p>

<p align="center">
  <img alt="React" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/React.svg">
  <img alt="NextJS" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/NextJS.svg">
  <img alt="Typescript" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Typescript.svg">
  <img alt="Tailwind" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/TailwindCSS.svg">
  <img alt="Framer Motion" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Framer%20Motion.svg">
  <img alt="Phosphor Icons" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Phosphor%20Icons.svg">
  <img alt="Husky" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Husky.svg">
  <img alt="Conventional Commits" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Conventional%20Commits.svg">
  <img alt="Cursor" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Cursor.svg">
  <img alt="Gemini" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Gemini.svg">
  <img alt="Windsurf" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Windsurf.svg">
</p>

---

## 📖 Panorama Geral

O **VOLTAGE** é uma landing page de alta voltagem para um festival de música eletrônica indoor de elite. O projeto foi concebido com uma estética **Industrial & High-Tech**, focada em imersão sensorial, tecnologia de ponta e uma experiência de usuário cinematográfica que reflete a energia do rave moderno.

### 🎯 Diferenciais Estratégicos
- **Estética Industrial & Neon:** Design agressivo e futurista, utilizando tons escuros com acentos neon, transmitindo uma atmosfera de "tecnologia bruta".
- **Engenharia Sensorial:** Animações fluidas de scroll progressivo, efeitos de paralaxe e transições de "text morphing" orquestradas pelo Framer Motion.
- **Internacionalização Invisível:** Sistema de tradução completo (PT/EN) com Clean URLs (sem prefixos de idioma), gerenciado via middleware inteligente e cookies.

---

## ✨ Ecossistema de Funcionalidades

### 🎞️ Impacto Visual (Hero & Experience)
- **Cinematic Hero:** Introdução monumental com vídeo em alta definição e tipografia tática que estabelece o tom de dominância do evento.
- **Sensory.Input Specs:** Seção de especificações técnicas (Audio L-Acoustics, Laser Mapping) que reforça o compromisso com a qualidade técnica.

### 🎧 Lineup & Evolução
- **Lineup Sequence:** Showcase dinâmico dos artistas (DJs) com navegação fluida e descrições técnicas de cada "sonic engineer".
- **Evolution Sequence:** Linha do tempo interativa que narra a história do festival, desde o Genesis até a carga total (Full Charge).
- **Core Components:** Destaque para os pilares do evento: Relentless, Hypnotic, Nocturnal e Transcendent.

### 🛡️ Infraestrutura & Acesso
- **Secure Environment:** Seção de confiança detalhando protocolos de segurança tática, suporte médico e integridade do local.
- **Access Authentication:** Sistema de passes (Standard, VIP Tactical, Duo Sync) apresentados em cards interativos com foco em conversão.
- **Transmission Logs:** Feedback real de "unidades processadas" (usuários) via depoimentos interativos.

---

## 🛠️ Deep Dive Tecnológico

### Arquitetura de Internacionalização (i18n)
O projeto utiliza o **next-intl** com uma estratégia de Clean URLs:
- **Middleware Inteligente:** O arquivo `src/proxy.ts` gerencia a detecção de idioma e persistência via cookie `NEXT_LOCALE`, mantendo URLs limpas para SEO.
- **Localized App Router:** Estrutura `[locale]` no Next.js para renderização eficiente no servidor com suporte total a TypeScript.

### Performance e Estilização
- **Tailwind CSS v4:** Implementação da nova engine do Tailwind, aproveitando variáveis CSS nativas e maior performance em tempo de compilação.
- **Framer Motion 12:** Orquestração complexa de animações de entrada, scroll progressivo e interações de hover para garantir 60fps constantes.
