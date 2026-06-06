# Design System Specification: Cyber Enxuto

## 1. Visão Geral

O sistema de design "Cyber Enxuto" estabelece a identidade visual central do aplicativo. Ele adota uma estética retro-futurista e minimalista (cyberpunk clean), utilizando fundos escuros de alto contraste combinados com elementos em verde neon e tipografia monoespaçada para criar uma atmosfera de terminal de dados avançado.

## 2. Paleta de Cores (Color Tokens)

A paleta de cores foca no alto contraste entre o fundo muito escuro e as cores de destaque.

- **Primary (Primária):** `#00FF41`
  - _Uso:_ Ações principais, botões de destaque, cursores (terminal) e elementos de atenção máxima.
- **Secondary (Secundária):** `#FFFFFF`
  - _Uso:_ Textos principais, ícones de alto contraste e componentes invertidos.
- **Tertiary (Terciária):** `#FFD5AE`
  - _Uso:_ Ações de suporte (ex: edição) e detalhes de contraste quente para equilibrar o visual.
- **Neutral (Neutra/Fundo):** `#121212`
  - _Uso:_ Cor predominante de fundo (background) do aplicativo, painéis e contêineres.

### Cores Semânticas Adicionais (Baseado nos componentes)

- **Destructive/Danger:** Vermelho claro/Salmão (usado no botão de lixeira/exclusão).

## 3. Tipografia (Typography)

A tipografia divide a leitura natural de interfaces modernas com a precisão exigida pelo tema de código.

- **Headline (Títulos):** `Geist`
  - _Uso:_ Cabeçalhos grandes, títulos de tela e grandes blocos numéricos.
- **Body (Corpo do Texto):** `JetBrains Mono`
  - _Uso:_ Textos corridos, descrições longas e conteúdo geral, mantendo a sensação de editor de código.
- **Label (Rótulos e Botões):** `JetBrains Mono`
  - _Uso:_ Textos curtos, botões, tags, indicadores de status e navegação.

## 4. Estilos de Componentes (Component Guidelines)

### Botões (Buttons)

- **Primary:** Fundo na cor primária (`#00FF41`) com texto contrastante (preto/escuro). Formatos pontiagudos ou com border-radius mínimo.
- **Secondary:** Fundo da mesma cor do contêiner, com texto destacado.
- **Inverted:** Fundo totalmente branco (`#FFFFFF`) com texto escuro.
- **Outlined:** Sem fundo, com borda fina (stroke) e texto da mesma cor da borda.
- **Icon Buttons (Ações):** Quadrados, com ícones simples e fundos dinâmicos baseados na ação (ex: Bege `#FFD5AE` para editar, Primária `#00FF41` para labels, Vermelho para exclusão).

### Inputs de Texto

- **Search Bar:** Campo com fundo sutil, contorno apagado e ícone de lupa integrado na esquerda com tipografia monoespaçada para o placeholder.

### Navegação (Navigation)

- **Pills / Segmented Controls:** Cápsulas com bordas arredondadas e itens em formato de ícone. O item ativo recebe um fundo de destaque (ex: fundo em `#00FF41` ou `#FFFFFF` reduzido).

## 5. Geometria e Estética

- **Cantos (Border Radius):** Utilização de bordas "duras" (0px) ou levemente suaves (2px a 4px) dependendo da hierarquia do elemento, fortalecendo a pegada "digital" bruta.
- **Efeitos de Luz:** Elementos neons podem receber um sutil `box-shadow` na mesma cor do elemento para simular o efeito de brilho em telas de tubo (CRT glow).
