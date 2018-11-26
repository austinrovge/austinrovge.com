# import node v8
FROM node:8

# create app directory
WORKDIR /app

# install dependencies
COPY package.json /app
RUN npm install

# bundle source code inside docker image
COPY . /app

# expose port 80 for website
EXPOSE 80

# expose 3306 for database access
EXPOSE 3306

# setup database
CMD npm run start-create-db

# start server
CMD npm run local
