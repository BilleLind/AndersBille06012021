FROM node:alpine

WORKDIR /source/andersBille

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3963

CMD ["node", "server.js"]