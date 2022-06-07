const express = require("express");
const cart_route =express.Router();
const bodyParser =require("body-parser");
cart_route.use(bodyParser.json());
cart_route.use(bodyParser.urlencoded({extended:true}));

const auth =require("../middleware/auth");


const cart_controller=require("../controllers/cart");
const cart = require("../models/cart");

cart_route.post('/',auth,cart_controller.add_to_cart);
cart_route.get('/',auth,cart_controller.getAllCard);
cart_route.delete('/:id',auth,cart_controller.deleteCard);
cart_route.put('/:id',auth,cart_controller.editCard);

module.exports=cart_route;
