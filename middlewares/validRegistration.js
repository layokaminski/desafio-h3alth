const Joi = require('joi');
const invalidData = require('../utils/invalidData');

const UNAUTHORIZED = 401;
const ERRROR_FIELD_EMPTY = 'não pode estar vazio';

const validRegistration = (req, _res, next) => {
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required()
    .messages({
      'any.required': `Nome ${ERRROR_FIELD_EMPTY}`,
    }),
    lastName: Joi.string().not().empty().required()
    .messages({
      'any.required': `Sobrenome ${ERRROR_FIELD_EMPTY}`,
    }),
    birthdate: Joi.string().not().empty().required()
    .messages({
      'any.required': `Data de aniversario ${ERRROR_FIELD_EMPTY}`,
    }),
    addresses: Joi.array(),
  }).validate(req.body);

  if (error) return next(invalidData(error.message, UNAUTHORIZED));

  next();
};

module.exports = validRegistration;