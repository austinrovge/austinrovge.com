# website-js
This repository contains the source code for my personal website.

### Installation
#### Downloading and compiling the code  
The SASS and ReactJS code must first be compiled prior to starting a server.   

``` bash
$ git clone https://github.com/austinrovge/website-js.git
$ cd website-js
$ yarn install
$ yarn run build
```

### Starting a Server
#### Production
A production server can be started using:

``` bash
$ yarn run start
```

This starts a `nodejs` server on port `80` which will serve the client with the index.html file, and redirect any requests for any other path back to the index.html file. The server is run using the package `nodemon`.   

The server can then be stopped with the command:

``` bash
$ yarn run stop
```

#### Development
Alternatively, a development server can be spun up with:

``` bash
$ yarn run local
```

This starts a `nodejs` server on port `8080` which the developer can then test on.

### Future Development
* update site css [IN PROGRESS]
* update server.js
* determine if scss compiled with webpack when react is compiled is possible without node-sass (prior issues)
* make sure footer elements are centered vertically or change dimensions
* transitions