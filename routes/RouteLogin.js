const express = require('express');

const router = express.Router();

const ControllerUsers = require('../controllers/ControllerUsers');

router.post('/', ControllerUsers.create);

module.exports = router;