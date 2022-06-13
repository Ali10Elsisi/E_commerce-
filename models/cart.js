const { string } = require('joi');
const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'products'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    // price: {
    //     type: String,
    //     required: true
    // },
    // vendor_id: {
    //     type: String,
    //     required: true
    // },

    // store_id: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model("cart", cartSchema)