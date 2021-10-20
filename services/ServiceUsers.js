const ModelUsers = require('../models/ModelUsers');
const { createToken } = require('../middlewares');

const create = async ({ firstName, lastName, birthdate, addresses }) => {
  const createdUser = await ModelUsers
    .create({ firstName, lastName, birthdate, addresses });

  const { password: passBD, ...userWithoutPassword } = createdUser;

  const token = createToken(userWithoutPassword);

  return token;
};

module.exports = {
  create,
};