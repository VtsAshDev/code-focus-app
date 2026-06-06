# Tela Inicial (Home Screen)

## 1. Visão Geral

A Home Screen é a principal interface de entrada do aplicativo, apresentando uma estética retro-futurista (estilo terminal de dados) com alto contraste (fundo escuro e elementos em verde neon). A tela tem a responsabilidade de exibir o status de conexão, a pontuação do usuário e fornecer os pontos de partida para as jornadas principais (foco, login e configurações). Conforme as diretrizes arquiteturais, esta tela não deve possuir nenhum navigator interno instanciado; toda a navegação deve ser delegada aos componentes pais através de funções de callback injetadas via propriedades.

## 2. Contrato de Dados (Props / Payload)

```typescript
interface HomeScreenProps {
  systemStatus: "ONLINE" | "OFFLINE" | "ERROR";
  onStartFocus: () => void;
  onNavigateLogin: () => void;
  isLoading: boolean;
}
```

## 3. Estados da Interface (UI States)

- Idle/Default:
- Fundo preto sólido com estética minimalista.
- Área central contendo dois quadrados verdes sólidos com efeito de brilho (glow), seguidos pelo texto estilizado `C O D E _ F O C U S` com um cursor em bloco que pisca de forma intermitente e seca (animação ON/OFF).
- Tagline com o texto `// FOCO ABSOLUTO PARA DESENVOLVEDORES` abaixo do título.
- Botão de ação primária com design estritamente quadrado (fundo verde neon, texto preto `COMEÇAR`).
- Botão de ação secundária em formato de texto simples `JÁ TENHO LOGIN`.

- Loading: Quando a propriedade `isLoading` for verdadeira, os botões devem ter sua opacidade reduzida a 50%, desabilitando interações de toque (disabled).
- Error: O layout reflete o estado `systemStatus`, mudando cores principais de elementos para vermelho caso ocorra um erro de conexão.

## 4. Critérios de Aceite (BDD)

Funcionalidade: Interação do usuário com a Home Screen

Cenário: Renderização do estado inicial padrão
Dado que o usuário acessa a Home Screen
Quando a tela termina de carregar no iOS
Então o título "C O D E \_ F O C U S", a tagline e os botões principais devem estar perfeitamente alinhados e visíveis na área segura (SafeArea)

Cenário: Início do fluxo de foco
Dado que o usuário visualiza a Home Screen
Quando ele toca no botão primário "COMEÇAR"
Então a propriedade de callback onStartFocus deve ser executada sem instanciar rotas internamente

Cenário: Acesso ao fluxo de login
Dado que o usuário visualiza a Home Screen
Quando ele toca no texto "JÁ TENHO LOGIN"
Então a propriedade de callback onNavigateLogin deve ser executada

Cenário: Comportamento em estado de carregamento
Dado que o aplicativo está processando uma ação prévia e isLoading é verdadeiro
Quando o usuário tenta interagir com qualquer botão
Então nenhuma ação de callback deve ser disparada

## 5. Requisitos de Acessibilidade (a11y)

- Botão COMEÇAR: `accessibilityRole="button"`, `accessibilityLabel="Começar o modo foco"`, `accessibilityHint="Inicia uma nova sessão de foco"`.
- Botão Login: `accessibilityRole="button"`, `accessibilityLabel="Já tenho login"`, `accessibilityHint="Navega para a tela de autenticação"`.
- Elementos Visuais Decorativos: Os dois quadrados verdes centrais e o cursor no título devem possuir `importantForAccessibility="no"` para não poluir a leitura do VoiceOver.

```

```
