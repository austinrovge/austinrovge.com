# Website
This is a redesign of my personal site that serves as a way for me to learn ReactJS.

SASS and ReactJS must be compiled before the web page can be accessed.  

### Installation
#### Downloading and compiling the code  
The SASS and ReactJS code must be compiled as browsers can't read the raw code.  

``` bash
$ git clone https://github.com/austinrovge/website.git
$ cd website
$ yarn install
$ yarn run build
```

### Starting a Server
A server can be started using 

``` bash
$ yarn run start
```

This starts a `nodejs` server which will serve the client with the index.html file, and redirect any requests for any other path back to the index.html file.

### Future Development
* ~~Either use a node server or continue with NGINX config for redirecting to the index.html file~~
* Transitions