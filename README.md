# ar-website
This repository contains the source code for my personal website.

### Setup
#### Cloning and Installation
The repository has to be cloned and node packages need to first be installed.

``` bash
$ git clone https://github.com/austinrovge/ar-website.git
$ cd ar-website
$ npm install -g
```

#### SQL Server
MySQL will need to be installed on your machine to support storing projects.

```bash
$ npm run start-create-db
```

The NPM command will start the MySQL service and will create the database and table needed to store project information in.

### Server Environments
#### Production
A production environment can be built and started on port 80 with these commands:
`node` server can be started on port `80` using:

``` bash
$ npm run build-prod
$ npm run start
```

#### Development
A development environment can be built and spun up on port 8080 with the following commands:

``` bash
$ npm run build-dev
$ npm run local
```

### Future Development
* ~~Dynamically update projects on project page~~
* Dockerize project
* Update text on pages
* NGINX
* Update look/position of items on pages
* Add SASS without node-sass or affecting webpack compile times substantially
* Audit packages and services used
* Add content to photography page
* Determine if transitions should be added
