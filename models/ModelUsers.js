const connection = require('./connection');

const create = async ({ firstName, lastName, birthdate, addresses }) => {
  const connect = await connection();

  const createdUser = await connect.collection('users')
  .insertOne({ firstName, lastName, birthdate, addresses });

  return {
    user: {
      _id: createdUser.insertedId,
      firstName,
      lastName,
      birthdate,
    },
  };
};

module.exports = {
  create,
};