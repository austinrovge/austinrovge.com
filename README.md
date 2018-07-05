# website-js
This repository contains the source code for my personal website.

### Installation
#### Downloading and compiling the code  
The `React` code must first be compiled prior to starting a server.   

``` bash
$ git clone https://github.com/austinrovge/website-js.git
$ cd website-js
$ yarn install
$ yarn run build
```

### Starting a Server
#### Production
A `node` server can be started on port `80` using:

``` bash
$ yarn run start
```

#### Development
Alternatively, the `node` server can be spun up on port `8080` with:

``` bash
$ yarn run local
```

### Future Development
* finish projects page
* add content to photography page
* fix react router ui flicker (decide to remove or keep content component)
* update home page CSS with personal picture
* update server.js
* determine if scss compiled with webpack when react is compiled is possible without node-sass (prior issues)
* make sure footer elements are centered vertically or change dimensions
* transitions?