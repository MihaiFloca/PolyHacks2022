FROM node:17-alpine as builder
WORKDIR /app
COPY ./package*.json /app/

RUN npm install

FROM node:17-alpine
WORKDIR /home/node/app
USER node

# COPY --chown=node:node ./.env .
COPY --chown=node:node --from=builder /app/node_modules ./node_modules/
COPY --chown=node:node . .

EXPOSE 8000