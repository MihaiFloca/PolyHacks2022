FROM node:16-alpine
RUN yarn install -g http-server
WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "http-server", "dist" ]