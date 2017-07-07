# Website
This is a redesign of my personal site that serves as a way for me to learn ReactJS.

SASS and ReactJS must be compiled before the web page can be accessed.  
The NGINX config for react-router to work must be moved and symbolically linked.  
This is done so any unknown url can be redirected to `/` and React can take care of the routing, not the server.

### Installation
#### Downloading and compiling the code  
The SASS and ReactJS code must be compiled as browsers can't read the raw code.  

``` bash
$ git clone https://github.com/austinrovge/website.git
$ cd website
$ yarn install
$ yarn run build
```

#### Moving the NGINX configuration file
In order for react-router to work, NGINX must be configured to redirect any unknown url requests back to the index.html file for react to handle the path.  

``` bash
$ mv conf/website.conf /etc/nginx/sites-available
$ ln -s /etc/nginx/sites-available/website.conf /etc/nginx/sites-enabled/website.conf
$ nginx -t
$ service nginx restart
```

This would ideally be fixed by the time I am done with this site.

### Testing
#### Starting a Local Server
You can start a local test server to view development pages. This is done by using the following command.

``` bash
$ yarn run local
```

This will start an `http-server` so the web page can be accessed from `localhost:8080`.

This is primarily done to test site layout, refreshing does not work.

### Future Development
* Either use a node server or continue with NGINX config for redirecting to the index.html file
* Transitions