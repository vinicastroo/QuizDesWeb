FROM node:lts-alpine

WORKDIR /usr/api

RUN npm install pm2 -g

COPY package.json yarn.* nodemon.json .env ./

RUN yarn

COPY . ./

EXPOSE 3333

CMD ["pm2-runtime", "process.yml"]
