# <p align="center">VOLTAGE</p>

<p align="center">
  <strong>Indoor Electronic Music Experience: Sinta o Pulso da Tecnologia.</strong>
</p>

<p align="center">
  <a href="https://voltage.guibus.dev/"><img src="https://img.shields.io/badge/Live_Demo-VOLTAGE-ff0055?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4.0.0-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next--intl-4.8.3-green?style=flat-square" alt="next-intl" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.24.11-ff69b4?style=flat-square&logo=framer" alt="Framer Motion" />
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
- **HeroUI (NextUI) & Radix:** Componentes de interface modernos e acessíveis para manter a consistência visual e a rapidez no desenvolvimento.

---

## 🏗️ Estrutura Arquitetural

```text
├── messages/             # Dicionários de tradução (en.json, pt.json)
├── src/
│   ├── app/
│   │   └── [locale]/     # Next.js App Router (Layouts e Páginas localizadas)
│   ├── components/       # Seções e Elementos de UI (Hero, Lineup, Pricing...)
│   ├── hooks/            # Hooks customizados para scroll spy e animações
│   ├── i18n/             # Configurações de request e roteamento de idiomas
│   ├── lib/              # Configurações de animação (Framer Motion)
│   └── proxy.ts          # Middleware de internacionalização (Clean URLs)
└── next.config.ts        # Configuração Next.js com suporte a i18n e React Compiler
```

---

## 🧪 Engenharia de Qualidade

A integridade do projeto é garantida por fluxos de validação contínuos:
- **Total i18n Coverage:** Todas as strings são externalizadas, garantindo escalabilidade total para novos idiomas sem tocar no código.
- **React Compiler Enabled:** Uso da nova tecnologia de compilação do React para otimização automática de re-renderizações.
- **Responsive Architecture:** Design resiliente que escala de monitores ultra-wide até dispositivos mobile de baixa performance.

Para rodar o projeto localmente:
```bash
pnpm install
pnpm dev
```

Para validar o build:
```bash
pnpm build
```

---
<p align="center">
  Designed with intent by <a href="https://www.linkedin.com/in/gui-bus/">guibus.dev</a> &bull; 2026
</p>
