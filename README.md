# Aplicativo Mobile: codeFocus

**Projeto:** codeFocus (Client)  
**Versão:** 1.0.0 (MVP)  
**Tecnologia:** React Native (Expo)

---

## 1. Visão Geral do Produto

O **codeFocus** é uma aplicação móvel voltada ao treinamento de atenção primária através de gamificação comportamental restritiva. O sistema desincentiva a troca de contexto ao penalizar saídas do ambiente da aplicação durante uma sessão ativa, recompensando o tempo de tela ininterrupto.

O design system adota o padrão "Tech Minimalist", exigindo renderização de fundos em preto absoluto (`#000000`) para otimização de consumo energético em displays OLED.

> **Nota:** Para detalhes sobre o banco de dados e os contratos de integração (API REST), consulte a documentação no repositório do backend: `[INSERIR LINK DO GITHUB DA API AQUI]`.

---

## 2. Responsabilidades do Cliente

O App atua como o componente de interação e detecção de estado nativo do dispositivo do usuário.

- Interface visual e gestão de feedback (cronômetro).
- Comunicação segura via API RESTful sobre HTTPS com o servidor.
- Geração de identificadores de sessão.
- Observação de ciclo de vida do aplicativo móvel.

---

## 3. Regras de Negócio (Cliente)

- **RN01 - Gatilho de Interrupção:** O cliente utilizará a API nativa `AppState`. A transição do estado `active` para `background` durante uma sessão ativa aciona o encerramento imediato com envio de falha para a API.
- **RN04 - Geração de Identificadores:** Identificadores únicos universais (UUID V4) de sessões são gerados localmente pelo cliente antes do envio ao servidor, otimizando a responsividade da interface sem depender de round-trips da rede para iniciar a sessão visualmente.

---

## 4. Procedimentos de Setup (Frontend)

O ambiente de desenvolvimento do App deve ser provisionado seguindo a ordem estrita abaixo:

1. Provisionar pacote de inicialização via Node.js:

```bash
npx create-expo-app codefocus-app
```

2. Instalar a dependência de geração segura de UUID:

```bash
npx expo install react-native-get-random-values uuid
```

3. Configurar a folha de estilos global para que o background primário das telas seja `#000000`.
