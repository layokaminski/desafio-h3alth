const ServiceUsers = require('../services/ServiceUsers');

const CREATED = 201;

const create = async (req, res, next) => {
  try {
    const { firstName, lastName, birthdate, addresses } = req.body;

    const createdUser = await ServiceUsers
      .create({ firstName, lastName, birthdate, addresses });

    return res.status(CREATED).json(createdUser);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};