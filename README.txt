# Criando um Projeto de Login com React Native e Firebase

## 1. Configuração Inicial do Projeto
1. Instale o Node.js no seu computador (https://nodejs.org)
2. Instale o Expo CLI globalmente:
   ```
   npm install -g expo-cli
   ```
3. Crie um novo projeto:
   ```
   npx create-expo-app login
   cd login
   ```

## 2. Instalação das Dependências
1. Instale as dependências necessárias:
   ```
   npm install firebase
   npm install @react-native-firebase/app
   ```

## 3. Configuração do Firebase
1. Acesse o Console do Firebase (https://console.firebase.google.com)
2. Crie um novo projeto
3. Ative a autenticação por email/senha em Authentication
4. Crie um arquivo `src/firebase.config.js` com as configurações do seu projeto Firebase:
   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';

   const firebaseConfig = {
     apiKey: "sua-api-key",
     authDomain: "seu-auth-domain",
     projectId: "seu-project-id",
     storageBucket: "seu-storage-bucket",
     messagingSenderId: "seu-messaging-sender-id",
     appId: "seu-app-id"
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   ```

## 4. Estrutura de Arquivos
1. Crie a pasta `src` na raiz do projeto
2. Dentro da pasta `src`, crie o arquivo `styles.js`
3. Organize os arquivos principais:
   - App.js (na raiz)
   - src/styles.js
   - src/firebase.config.js

## 5. Implementação dos Estilos (src/styles.js)
1. Crie os estilos para:
   - Container principal
   - Título do formulário
   - Campos de input
   - Botão principal
   - Botões secundários
   - Textos dos botões

## 6. Implementação do App.js
1. Configure os imports necessários
2. Implemente os estados com useState para email e senha
3. Crie a função de login usando Firebase
4. Desenvolva a interface com:
   - Campos de input para email e senha
   - Botão de login
   - Botões secundários (Esqueci senha e Novo usuário)

## 7. Funcionalidades Implementadas
- Login com email e senha usando Firebase
- Validação de campos
- Feedback de erro para o usuário
- Interface responsiva e amigável

## 8. Configurações Adicionais dos Componentes
1. TextInput de Email:
   - keyboardType="email-address"
   - autoCapitalize="none"
   - autoComplete="email"

2. TextInput de Senha:
   - secureTextEntry={true}

## 9. Executando o Projeto
1. Inicie o projeto:
   ```
   npx expo start
   ```
2. Use o aplicativo Expo Go no seu celular ou um emulador para testar

## Observações Importantes
- Mantenha suas credenciais do Firebase seguras
- Não compartilhe o arquivo firebase.config.js publicamente
- Teste todas as funcionalidades de login antes de publicar
- Mantenha as dependências atualizadas

## Próximos Passos Sugeridos
- Implementar recuperação de senha
- Adicionar cadastro de novos usuários
- Implementar validações adicionais
- Adicionar loading states durante o login
- Implementar persistência de login 