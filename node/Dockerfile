FROM node:latest

WORKDIR /usr/app
COPY . /usr/app

RUN npm i && npm run build

EXPOSE 3000

CMD ["node", "index.js"]
