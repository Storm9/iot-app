# This image will be based on the official node.js docker image
FROM node:latest

# Set in what directory commands will run
WORKDIR /home/app

# Put all our code inside that directory that lives in the container
ADD . /home/app

# Install dependencies
RUN apt-get update -qq

# Installing SASS/Compass
# http://ndever.net/articles/linux/installing-sass-and-compass-ubuntu-1210-1304
RUN apt-get install -y ruby-full rubygems-integration
RUN gem install sass -v 3.2.19
RUN gem install compass

RUN \
    npm install -g bower && \
    npm install -g grunt-cli && \
    npm install && \
    bower install --config.interactive=false --allow-root

# Tell Docker we are going to use this port
EXPOSE 9000

# The command to run our app when the container is run
CMD grunt serve
