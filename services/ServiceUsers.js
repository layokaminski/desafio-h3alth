const ModelUsers = require('../models/ModelUsers');

const create = async ({ firstName, lastName, birthdate, addresses }) => {

  const createdUser = await ModelUsers
    .create({ firstName, lastName, birthdate, addresses });

  return createdUser;
};

module.exports = {
  create,
};