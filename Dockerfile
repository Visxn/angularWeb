FROM node:16-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=node /app/dist/my-app /usr/share/nginx/html