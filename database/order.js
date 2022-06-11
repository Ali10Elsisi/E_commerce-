let mongoose = require('mongoose');
let OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: [{
        productId: { type: String },
        quantity: { type: Number, default: 1 },
    }],
    amount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "panding" },
}, { timestamps: true });
module.exports = OrderSchema;