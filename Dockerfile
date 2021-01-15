FROM node:12.0
#Install and build angular app
WORKDIR /usr/src/ohm
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install && \
    npm install @angular/cli@11.0.6 -g
COPY . .
RUN npm run build
# If you are building your code for production
# RUN npm install --only=production
EXPOSE 4200
CMD ["npm", "run", "start"]