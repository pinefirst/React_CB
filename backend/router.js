const express = require('express');
const passport = require('passport');

const ROLE_MEMBER = require('./constants').ROLE_MEMBER;
const ROLE_CLIENT = require('./constants').ROLE_CLIENT;
const ROLE_OWNER = require('./constants').ROLE_OWNER;
const ROLE_ADMIN = require('./constants').ROLE_ADMIN;

const AuthenticationController = require('./controller/authenticatoin');


module.exports = function (app) {
    const apiRoutes = express.Router(),
        authRoutes = express.Router(),
        userRoutes = express.Router();

    app.use('/api', apiRoutes);
    apiRoutes.use('/auth', authRoutes);

    authRoutes.post('/register', AuthenticationController.register);
}