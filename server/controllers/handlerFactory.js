const Customer = require('../models/customerModel');
const Seller = require('../models/sellerModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const Admin = require('../models/adminModel');

exports.filterObj = (obj, ...alloweFeilds) => {
    const newObj = {};

    Object.keys(obj).forEach(el => {
        if (alloweFeilds.includes(el)) newObj[el] = obj[el];
    });

    return newObj;
};