const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.status(200);
  response.end('You are in the wrong area, This is a discord bot')
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);