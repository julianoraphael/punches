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

# Compile o código TypeScript
RUN npm run build

# Exponha a porta 5000 que é onde o backend está executando
EXPOSE 5000

# Defina o comando para executar o servidor do backend
CMD ["node", "dist/index.js"]  # Certifique-se de que a referência ao arquivo index.js está correta
