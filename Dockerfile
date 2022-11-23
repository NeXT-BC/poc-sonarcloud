FROM keymetrics/pm2:14-alpine
WORKDIR /usr/src/app
COPY . ./
RUN npm install

EXPOSE 8080

CMD ["pm2-runtime", "start", "dev.config.js"]
