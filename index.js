const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/login', routes.RouteLogin);

app.listen(PORT, () => {
  console.log(`Online na port: ${PORT}`);
});