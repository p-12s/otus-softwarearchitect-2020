FROM node:13

# создание директории приложения
WORKDIR /var/www/app

COPY . ./

RUN npm install
# Если вы создаете сборку для продакшн
# RUN npm ci --only=production

EXPOSE 8000
CMD [ "node", "server.js" ]
