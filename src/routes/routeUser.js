const express = require('express');
const userController = require('../controller/userController');

const userRoute = express.Router();

userRoute.post('/', userController.create);

module.exports = userRoute;