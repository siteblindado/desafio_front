# **SB2W-Teste**

## **Intro**

Bem vindo ao teste da Site Blindado, uma empresa do grupo B2W digital.  
Neste teste vamos tentar entender um pouco qual o seu nivel de conhecimento de React.js.  
Nao se assuste, caso tenha alguma dificuldade ou duvida pode entrar em contato com geislor.crestani@siteblindado.com.br

Faça um fork desse projeto e desenvolva seu código nele.  
Utilize o README para nos passar quaisquer informações que julgar interessante/necessárias (como rodar o projeto, decisões tomadas, etc).
  
Não definimos um tempo para o desafio ser feito, é você quem deve nos passar uma data limite para a entrega do desafio.

## **Guia**

### - Recupere os dados
Na pasta /services/MockedApi.tsx temos uma conexão pronta com dados mocados.

### - Crie os reducers/sagas/actions para utilizar os dados da api
Dentro da pasta store você pode encontrar o que precisa.

### - Corrija o Css para exibição dentro da janela
Se você perceber as informações novas estão sendo impressas no abaixo do cabeçalho, corrija para uma exibição correta.

### - Crie um dashboard com estes dados
Utilizando estes dados recuperados, queremos ver um dashboard na pagina principal com estas informações.
Dados que retornam desta API:
```json
{
  "dataCards": "informações bacanas pra você montar alguns cards" {
    "billing": {
      "monthlyBilling": "valor recebido no ultimo mês",
    },
    "contracts": "informações de contratos" {
      "activeContracts": "contratos ativos no mes corrente",
      "overdueContracts": "contratos com pagamento atrasado a receber no mes corrente",
      "overdueValue": "valor atrasado a receber no mes corrente",
      "soldContracts": "contratos novos fechados no mes corrente",
      "totalContracts": "valor de contratos novos fecahdos no mes corrente",
      "totalReceivedValue": "total de valor a receber no mes corrente"
    }
  },
  "dataCharts": {
            "monthlyContractOverdue": "informações mes a mes de contratos atrasados",
            "totalPaid": "total de valor a receber mes a mes",
            "totalSold": "total de valor novo vendido a receber mes a mes",
            "reference": "data a considerar como corrente (Dez/2020)"
  }
}

```

### - Crie uma vitrine para nossos produtos
Na pagina da [Site Blindado](http://www.siteblindado.com), em soluções, você pode encontrar a listagem dos nossos produtos.  
Desenvolva uma vitrine onde o usuário poderá adquirir produtos. Não precisa ser igual a da imagem.
  
![alt text](https://i.ibb.co/v1nKJ44/Captura-de-tela-de-2020-10-08-16-31-13.png)

## **Pontos Extras**

### - Menu animado como no Gmail
Deixe nosso menu como o da imagem abaixo quando não estiver aberto.  

![alt text](https://i.ibb.co/K0ydRFP/gmail.gif)

## **O que gostariamos de ver neste projeto?**
- React Hooks
- Sagas/Reducers/Actions bem montados
- Organização
- Componentes bem escritos e organizados
- Um dashboard bonitão! Use a sua criatividade
- Testes

## **Tecnologias**

### - Visual Patterns

- Styled Components - Padrão de Desenvolvimento de CSS - https://www.styled-components.com/
- Material Design UI - Padrão de Desenvolvimento de CSS - https://material-ui.com/pt/

### - Code Patterns

- React.Js - Framework Utilizado - https://pt-br.reactjs.org/
- Typescript - Linguagem Utilizada - https://www.typescriptlang.org/
- Duck Pattern - Padrão de Escrita para REDUX - https://github.com/erikras/ducks-modular-redux
- TsLint - Padrão de Verificação de Analise de Formatação de Código

### - Testes

- Storybook - Padrão de Documentação e Testes de Componentes - https://storybook.js.org/docs/guides/guide-react/
- Jest - Padrão de Testes - https://jestjs.io/

### - State/Store Pattern

- REDUX - Padrão de Desenvolvimento de Store - https://redux.js.org/
- REDUX SAGA - Middleware de Gerenciamento de Actions Assincronas - https://redux-saga.js.org/
- REDUX SAUCE - Fornece Ferramentas de Organização de Código para REDUX - https://github.com/jkeam/reduxsauce

### - Fetch

- Axios - Requisitor HTTP baseado em Promisses - https://github.com/axios/axios

## **Quick-start**

1. Instalar Yarn
`npm install yarn -g`

2. Git Clone 
`git clone git@bitbucket.org:siteblindado/sb2w-portal.git`

3. Startar Servidor Dev
`yarn start`

4. Rodar Build de Produção
`yarn build`

5. Rodar Suite de Testes
`yarn test`

6. Rodar Linter
`yarn lint`

7. Rodar o Formatador de Código
`yarn format`

8. Inicializar Ferramenta de Inspeção de Bundle
`yarn bundle-profile:analyze`

## **Configuraçõees**

* [TypeScript Config](./tsconfig.json)
* [Webpack Config](./config/webpack.config.js)
* [Editor Config](./.editorconfig)
* [EsLint Config](./.eslintrc.js)