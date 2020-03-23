FROM node:12-alpine
# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# Copy app
COPY . .

EXPOSE 8080
# start it
CMD [ "node", "index.js" ]
