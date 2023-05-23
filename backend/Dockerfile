FROM node:18.16.0

WORKDIR /backend

COPY ./package*.json ./

RUN npm install

COPY ./src ./

CMD node --watch ./src/app.js