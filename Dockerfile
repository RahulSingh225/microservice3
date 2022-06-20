FROM node:alpine

WORKDIR /usr/src/app/service3

# COPY ["package.json", "package-lock.json*", "./"]
COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5003:5003

CMD [ "npm", "start" ]