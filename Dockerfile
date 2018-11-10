FROM node:8

WORKDIR /dockertest/proxy

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1130

CMD [ "npm", "start" ]