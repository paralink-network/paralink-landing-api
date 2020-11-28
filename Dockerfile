FROM node:10

ADD . /app
WORKDIR /app
RUN rm -rf node_modules

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]
