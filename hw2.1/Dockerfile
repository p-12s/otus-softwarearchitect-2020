FROM node:13

# создание директории приложения
WORKDIR /var/www/app

COPY . ./

RUN npm install

EXPOSE 8000
CMD [ "node", "server.js" ]
