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

This starts a `nodejs` server on port `80` which will serve the client with the index.html file, and redirect any requests for any other path back to the index.html file. The server is run using the package `forever` which will restart the server five times after crashing.   

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
* ~~Either use a node server or continue with NGINX config for redirecting to the index.html file~~
* ~~componetize the footer elements~~
* make sure footer elements are centered vertically or change dimensions
* update site css
* update the header links to have a more efficient way of changing their color and hovering
* Transitions