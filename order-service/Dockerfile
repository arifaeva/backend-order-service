FROM node:lts

WORKDIR /app

COPY ./package*.json .

RUN npm install

COPY . .

EXPOSE 8006

CMD [ "npm", "run", "dev"]