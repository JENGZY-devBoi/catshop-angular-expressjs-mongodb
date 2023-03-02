const Customer = require('../models/customerModel');
const Seller = require('../models/sellerModel');
const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

const handlerError = require('./handlerError');

// Customer
exports.auth = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) throw Error('Unauthorized');

        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_SECRET,(err, decoded) => {
            if (err) throw Error('Invalid token');

            req.email = decoded.email; // Verify with Email
            next();
        });
    } catch (err) {
        handlerError.auth(err, res);
    }
};

exports.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await Customer.login(email, password);

        const token = jwt.sign({ email }, process.env.JWT_SECRET);

        res
            .header('Authorization', `Bearer ${token}`)
            .status(200)
            .send({
                stutus: 'success',
                data: user
            });
    } catch (err) {
        handlerError.auth(err, res);
    }
};

exports.logout = async(req, res, next) => {
    try {
        res.status(204).send();
    } catch (err) {
        handlerError.auth(err, res);
    }
};

// Seller
exports.signupSeller = async(req, res, next) => {
    try {

    } catch (err) {
        console.log(err);
    }
};

// Admin
exports.loginAdmin = async(req, res, next) => {
    try {

    } catch (err) {
        console.log(err);
    }
};