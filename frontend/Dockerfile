FROM node:12-alpine
# Create app directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
RUN npm run build

CMD ["tail", "-f", "/dev/null"]