# Use uma imagem do Node.js como base
FROM node:14

ENV TZ=America/Sao_Paulo

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (ou yarn.lock) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Construa o aplicativo React
RUN npm run build

# Exponha a porta 3000 que é onde o frontend será executado
EXPOSE 3000

# Defina o comando para executar o servidor do frontend
CMD ["npm", "start"]
