const express = require('express');

const router = express.Router();

const ControllerUsers = require('../controllers/ControllerUsers');
const Middlewares = require('../middlewares');

router.post('/', Middlewares.validRegistration, ControllerUsers.create);

module.exports = router;