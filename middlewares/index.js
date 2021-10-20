const errorMiddlewares = require('./errorMiddlewares');
const validRegistration = require('./validRegistration');
const createToken = require('./createToken');

module.exports = {
  errorMiddlewares,
  validRegistration,
  createToken,
};