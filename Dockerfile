FROM node:18-alpine

WORKDIR /app
COPY . . 

ENV DB_URI=${DB_URI}
ENV API_KEY=${API_KEY}
ENV PORT=${PORT}

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]