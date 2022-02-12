FROM node:16-alpine

WORKDIR /usr/app

COPY package*.json ./
COPY src/lib/faker ./src/lib/faker

# install dependencies
RUN npm install --only=production

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]