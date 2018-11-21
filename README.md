# ar-website
This repository contains the source code for my personal website.

### Installation
#### Downloading and compiling the code
The repository has to be cloned and node packages need to first be installed.

``` bash
$ git clone https://github.com/austinrovge/ar-website.git
$ cd ar-website
$ npm install -g
```

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
* finish projects page
* add content to photography page
* fix react router ui flicker
* add SASS without node-sass or affecting webpack compile times substantially
* center all footer elements vertically/change dimensions
* transitions?
