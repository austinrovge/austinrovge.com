# website
This is a redesign of my personal site that serves as a way for me to learn ReactJS.

SASS and ReactJS must be compiled before the webpage can be accessed.  
The NGINX config for react-router to work must be moved and symbolically linked.  
This is done so any unknown url can be redirected to `/` and React can take care of the routing, not the server.

# Installation
### Downloading and compiling the code  
The SASS and ReactJS code must be compiled as browsers can't read the raw code.  

``` bash
$ git clone https://github.com/austinrovge/website.git
$ cd website
$ yarn install
$ yarn run build
```

### Moving the NGINX configuration file
In order for react-router to work, NGINX must be configured to redirect any unknown url requests back to the index.html file for react to handle the path.  

``` bash
$ mv conf/website.conf /etc/nginx/sites-available
$ ln -s /etc/nginx/sites-available/website.conf /etc/nginx/sites-enabled/website.conf
$ nginx -t
$ service nginx restart
```

### Starting a Local Server
You can start a local test server for routing by typing in 

``` bash
$ yarn run local
```

This will start an `http-server` so the webpage can be accessed from `localhost:8080`.

This is primarily done to test routing, though it does not work on refreshes. There is probably a way to do this in React.

TODO: FIND A WAY TO DO THIS IN REACT