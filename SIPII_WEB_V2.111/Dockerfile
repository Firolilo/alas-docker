FROM node:18-alpine

WORKDIR /app

# Ya estás dentro de SIPII_WEB_V2.111 por el context, así que esto es suficiente
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000 4041

CMD ["npm", "start"]
