# Arquitetura Base e Diretrizes do App (Expo 54)

## 1. Visão Geral

Este documento atua como a especificação principal para o desenvolvimento do aplicativo utilizando Expo 54. O objetivo absoluto é alcançar 100% de compatibilidade primária com iOS, aderindo às Human Interface Guidelines da Apple. O código deve priorizar a manutenibilidade: é terminantemente proibido reinventar a roda. Deve-se utilizar componentes nativos, bibliotecas maduras do ecossistema e padrões simples de código em vez de abstrações complexas desnecessárias.

## 2. Contrato de Dados (Props / Payload)

interface BaseAppEntity {
id: string;
createdAt: string;
updatedAt: string;
}

interface StandardAPIResponse<T> {
data: T;
success: boolean;
message: string;
}

interface PaginatedAPIResponse<T> {
data: T[];
total: number;
currentPage: number;
lastPage: number;
}

## 3. Estados da Interface (UI States)

- Idle/Default: Telas e componentes devem utilizar primitives puros do React Native e do ecossistema Expo, evitando customizações que degradem a performance no iOS.
- Loading: Deve empregar componentes nativos visuais de baixo custo de renderização, focando na percepção de velocidade sem travar a thread de UI.
- Error: Exibição de alertas e fallbacks devem respeitar rigidamente os limites de tela, utilizando SafeAreaView para evitar conflitos de layout com Notch ou Dynamic Island.
- Empty/Success: Estados sem dados precisam ser claros, informando rapidamente a ausência de conteúdo sem que o usuário sinta que ocorreu um erro de carregamento.

## 4. Critérios de Aceite (BDD)

Funcionalidade: Padrões Arquiteturais e de Plataforma

Cenário: Garantia de compatibilidade com iOS
Dado que o aplicativo será compilado ou executado
Quando renderizado em um dispositivo ou simulador iOS
Então não devem ocorrer erros de dependências não suportadas ou falhas de layout específicas de plataforma

Cenário: Utilização de recursos nativos
Dado um novo requisito de funcionalidade
Quando o desenvolvedor iniciar a implementação
Então deverá utilizar a solução oficial do Expo ou a API nativa mais simples recomendada, evitando a criação de lógicas do zero

## 5. Requisitos de Acessibilidade (a11y)

- Todos os elementos interativos (botões, links, ícones clicáveis) devem possuir uma área de toque mínima de 44x44 pixels.
- As interfaces devem ser perfeitamente navegáveis via VoiceOver (leitor de tela padrão do iOS), fluindo de cima para baixo, da esquerda para a direita.
- O contraste de cores nativo (Light/Dark mode) do sistema operacional iOS deve ser respeitado em todos os containers padrão.
