FROM node:10.13
USER root

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN npm install -g truffle@v5.0.5
COPY . .
CMD npm run migrate
