<a href="https://codeclimate.com/github/DurandSacha/Symfony-Snowtricks/maintainability"><img src="https://api.codeclimate.com/v1/badges/2295e37585a45075da96/maintainability" /></a><br/>

-----------------

# Bilemo-API in general

The API bilemo is a platform which is capable of managing B2B sales logistics for smartphones. 
With the application you will be able to register as a client (operator). define and manage who your end users are, 
and add or remove smarthones from your online store

## Technology 

The bilemo application works with the symfony framework for architecture and ease of use (MVC / POO, PSR pattern ...).
API resources are available via API platform. To have a standard on the Richardson model and for standardization.
The demonstration side is built with javascript and the React.js framework.

- Webpack Encore
- React.js
- Symfony
- Docker ( configure your environment)
- Ansible ( deploy with ansible folder)

## Use this project 
How to use this project on your environment ? 

-  clone this project on your environment 
-  configure your variable environment
-  run `composer install`
-  run `yarn install`
-  run `php bin/console d:d:c`
-  run `php bin/console make:migration`
-  run `php bin/console d:m:m`
-  You can run this project with docker containers (docker-compose included in this repository )

## Other information 
The graphical data model is accessible in the SQL file. You can also find the UML shema in the respective file

## Deployment
Several solutions to deploy this project : 
1. You can use Ansible with Ansible folder for deploy