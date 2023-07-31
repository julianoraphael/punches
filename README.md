# Sistema de Gerenciamento de Pontos

Este é um aplicativo simples de Sistema de Gerenciamento de Pontos construído usando Node.js e React. Ele permite que você registre suas horas de trabalho diárias, incluindo a data e hora em que registrou o ponto de entrada e saída.

## Recursos

- Registrar novo ponto com data e hora
- Visualizar lista de todos os pontos registrados
- Excluir um registro de ponto

## Tecnologias Utilizadas

### Backend

- Node.js
- Express.js
- MongoDB com Mongoose
- Moment.js (para manipulação de datas)

### Frontend

- React
- Axios (para fazer requisições HTTP)

## Começando

### Pré-requisitos

- Node.js e npm instalados em sua máquina
- MongoDB instalado e em execução

### Configuração do Backend

1. Acesse o diretório "backend".
2. Instale as dependências: `npm install`
3. Renomeie o arquivo ".env.example" para ".env" e configure a URI de conexão do MongoDB.
4. Inicie o servidor backend: `npm start`

### Configuração do Frontend

1. Acesse o diretório "frontend".
2. Instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento do frontend: `npm start`

## Uso

1. Acesse o aplicativo frontend em seu navegador da web: `http://localhost:3000`
2. Registre suas horas de trabalho diárias clicando nos botões "Punch In" ou "Punch Out".
3. Visualize a lista de todos os pontos registrados na página inicial.
4. Para excluir um registro de ponto, clique no botão "Delete" ao lado do registro de ponto.

## Contribuições

Contribuições são bem-vindas! Se encontrar problemas ou quiser adicionar novos recursos, sinta-se à vontade para abrir um problema ou criar uma solicitação de pull.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.
