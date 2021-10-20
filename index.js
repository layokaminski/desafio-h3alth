const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const Middlewares = require('./middlewares');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/login', routes.RouteLogin);

app.use(Middlewares.errorMiddlewares);

app.listen(PORT, () => {
  console.log(`Online na port: ${PORT}`);
});