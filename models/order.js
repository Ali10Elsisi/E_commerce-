let mongoose = require("mongoose");
let mongoose = require('mongoose');
let OrderSchema = require('../database/order');
let order = mongoose.model('orders', OrderSchema);
module.exports = order;