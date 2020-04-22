const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../models/adminUser');
const setUserInfo = require('../helpers').setUserInfo;
const getRole = require('../helpers').getRole;
const config = require('../config/main');


function generateToken(user){
    return jwt.sign(user, config.secret, {
        expiresIn:604800
    });
}


exports.login = function (req, res, next) {
    console.log('login route');
    console.log(req.body);
    console.log(req.user);
    const userInfo = setUserInfo(req.user);

    res.status(200).json({
        token: `JWT ${generateToken(userInfo)}`,
        user: userInfo
    });
};


exports.register = function (req, res, next) {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;

    if (!email){
        return res.status(422).send({error : 'You must enter an email address.'});
    }

    if (!password){
        return res.status(422).send({error: 'You must enter a password.'});
    }

    User.findOne({email}, (err, existingUser) => {
        if (err){
            console.log("error", err);
            return next(err);
        }

        if (existingUser){
            return  res.status(422).send({error:'That email address is already in use.'});
        }

        // If email is unique and password was provided, create account
        const user  = new User({
            email,
            password,
            profile:{firstName, lastName}
        });
        user.save((err, user) => {
            if (err){
                return next(err);
            }
            const userInfo = setUserInfo(user);
            const host = 'http://' + res.req.headers.host;
            const activationUrl = host + "/api/active_account/" + userInfo['_id'];
            setTimeout(function () {
                res.status(201).json({
                    token:`JWT ${generateToken(userInfo)}`,
                    user:userInfo
                })
            })
        })
    })
}


