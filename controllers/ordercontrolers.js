let order = require('../models/order');
let {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("../routes/verifyToken");

let createOrder = ("/", verifyToken, async(req, res) => {
    let newOrder = new order(req.body);
    try {
        let savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});
let updatedOrder = ("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        let updatedOrder = await Order.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});
let deleteOrder = ("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});
let getUserOrder = ("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try {
        let orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});
let getAllOrder = ("/", verifyTokenAndAdmin, async(req, res) => {
    try {
        let orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = {
    createOrder,
    updatedOrder,
    deleteOrder,
    getUserOrder,
    getAllOrder
}