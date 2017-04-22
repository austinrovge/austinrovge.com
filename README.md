# austinrovge.com
This is a redesign of my personal site that serves as a way to learn ReactJS.

SASS and ReactJS must be compiled before the webpage can be accessed.  
The NGINX config for react-router to work must be moved and linked.

# Installation
### Downloading and compiling the code:  
The SASS and ReactJS code must be compiled as browsers can't read it.  

`npm clone https://github.com/austinrovge/website.git`  
`cd website`  
`npm install`  
`npm run build`  

### Moving the conf file to /etc/nginx/sites-available/  
In order for the react-router dependency to work, NGINX must be configured to redirect any unknown requests back to the index.html file for react to handle the path.  

`mv conf/website.conf /etc/nginx/sites-available`  
`ln -s /etc/nginx/sites-available/website.conf /etc/nginx/sites-enabled/website.conf`  
`nginx -t`  
`service nginx restart`