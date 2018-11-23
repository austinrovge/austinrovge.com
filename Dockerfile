# import node v8
FROM node:8

#create app directory
WORKDIR /app

# install dependencies
COPY package.json /app
RUN npm install

# bundle source code inside docker image
COPY . /app

# expose port 80
EXPOSE 80

# start server
CMD npm run local
