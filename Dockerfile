FROM node:12

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY ./serverBuild /usr/src/app

EXPOSE 4000

# ENTRYPOINT ["node", "serverBuild/server.js"]
