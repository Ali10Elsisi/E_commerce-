const { string } = require('joi');
const mongoose =require('mongoose');
const cartSchema =mongoose.Schema({
    product_id :{
        type:string,
        required:true
    },
    price:{
        type:string,
        required:true
    },
    vendor_id:{
        type:string,
        required:true
    },
    store_id:{
        type:string,
        required:true
    }
})

module.exports=mongoose.model("cart",cartSchema)