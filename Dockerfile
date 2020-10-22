FROM node:12

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# Skip installing dev dependencies to minimize node_module size.
RUN npm install --production

# We only copy the compiled files to minimize the image size.
COPY ./serverBuild /usr/src/app/serverBuild
COPY ./build /usr/src/app/build

EXPOSE 4000

# ENTRYPOINT ["node", "serverBuild/server.js"]
