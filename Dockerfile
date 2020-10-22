FROM node:12

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install

COPY ./serverBuild /usr/src/app/serverBuild

COPY ./build /usr/src/app/build

EXPOSE 4000

# ENTRYPOINT ["node", "serverBuild/server.js"]
