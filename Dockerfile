FROM ubuntu:16.04

RUN apt-get update -y && apt-get install -y curl openssl zip unzip git software-properties-common python-software-properties
RUN export LANG=C.UTF-8 && add-apt-repository -y ppa:ondrej/php
RUN apt-get update && apt-get install -y php7.2 php7.2-cli php7.2-common php7.2-curl php7.2-gd php7.2-json php7.2-mbstring php7.2-intl php7.2-mysql php7.2-xml php7.2-zip
RUN curl -s https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer
RUN composer global require laravel/installer
RUN mkdir src && cd src/
WORKDIR /src
COPY . /src
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8181
EXPOSE 8181