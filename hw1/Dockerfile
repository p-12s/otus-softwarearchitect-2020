FROM ubuntu:18.04

# программы
RUN apt-get update -y && apt-get upgrade -y \
	&& apt-get install -y software-properties-common -y \
	&& add-apt-repository ppa:nginx/stable -y \
	&& apt-get update -y \
	&& apt-get install -y nginx -y \
	&& add-apt-repository ppa:ondrej/php -y \
	&& apt-get install php7.2-cli php7.2-fpm php7.2-curl php7.2-gd php7.2-mysql php7.2-mbstring zip unzip curl -y

# настройки nginx
COPY conf/nginx/architect /etc/nginx/sites-available
RUN ln -sf /etc/nginx/sites-available/architect /etc/nginx/sites-enabled/architect \
    && unlink /etc/nginx/sites-enabled/default

# копирование файлов приложения
COPY --chown=www-data:www-data ./content/* /var/www/architect/

EXPOSE 8000

RUN service nginx restart \
    && service php7.2-fpm restart
