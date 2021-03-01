# base image
FROM node:12.13.0-alpine

# set working directory
WORKDIR /test

# add `/app/node_modules/.bin` to $PATH
ENV PATH /test/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /test/package.json
RUN npm i

# start app
CMD ["npm", "start"]