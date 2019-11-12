<h1 align="center">Workflow management👋</h1>
<p>
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

![](/image/logo.png)

## Description

## Feature

## Contribute

vs code js cài đặt plusin prettier, Trailing Space

-   **Prettier setup**

`Ctrl + ,`-> search `prettier`

```js
"prettier.arrowParens": "always"
"prettier.endOfLine": "auto"
"prettier.jsxSingleQuote": true
"prettier.jsxBracketSameLine": false
"prettier.semi": true
"prettier.singleQuote": true
"prettier.tabWidth": 2
```

`Ctrl + ,`-> search `Format on save`

```js
"editor.formatOnSave": true
```

### Process

1. Fork
2. Pull branch master
3. Check issue in `Project` on Github (u can create new issue if need)
4. Create new branch from branch master and code
5. Create pull request with detail description (may be with some screenshot) and wait for review
6. After merge, pull new code from master

## Run

### Laravel

```sh
composer install

composer update

# Create Application Key
php artisan key:generate

# Pulish file config jwt:
php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

# Create Jwt Key
php artisan jwt:secret
```

### Reactjs

```sh
yarn install

or

npm install
```

```sh
npm run watch

```

khi run lệnh trên mỗi khi bạn save file nó sẽ auto biên dịch mã javascript đến thư mục `public/js/app.js`

### Start everything with docker-compose

```sh
docker-compose up -d
```

### Create database

-   First, regenerate Composer's autoloader

```sh
composer dump-autoload
```

-   If you **do not** have any database created yet, run migration scripts to create database tables

```bash
docker-compose exec app php artisan migrate
```

-   If you have **already** had a database before, you can Rollback & Migrate

```bash
docker-compose exec app php artisan migrate:refresh
```

-   OR Drop All Tables & Migrate

```bash
docker-compose exec app php artisan migrate:fresh --seed
```

-   Create a little of sample data for testing if you want

```bash
docker-compose exec app php artisan db:seed
```

### If you want to check database

**For the first time**

```sh
docker run --name mariadb -e MYSQL_ROOT_PASSWORD=123456 -d mariadb:10.3
```

```sh
docker run -it --link mariadb:mysql --rm mariadb:10.3 sh -c 'exec mysql -h"$MYSQL_PORT_3306_TCP_ADDR" -P"$MYSQL_PORT_3306_TCP_PORT" -uroot -p"$MYSQL_ENV_MYSQL_ROOT_PASSWORD"'
```

**Access to database for checking**

```sh
docker exec -it <db_container_ID> bash

mysql -u root -p
```

password is in docker-compose when you setup and run
in `MYSQL_ROOT_PASSWORD: 123456`

Test
create `contact.php` seeds `contractsTableSeeder.php` factories `ContractFactory.php`

follow this
<https://blog.digitalocean.com/create-simple-contacts-laravel-postgresql/>

### To show logs form container

```sh
docker logs -f --details containerName
```
