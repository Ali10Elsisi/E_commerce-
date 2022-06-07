const { get } = require("express/lib/response");
// const cart = require("../models/cart")
const Cart =require("../models/cart")

const add_to_cart = async(req,res)=>{

    try{

        const cart_obj =new Cart({
            product_id :req.body.product_id,
            price :req.body.price,
            vendor_id:req.body.vendor_id,
            store_id:req.body.status
        })
        const cartData =await cart.obj.save();
        res.status(200).send({succes:true,msg:"Cart Product detail",data:cartData})
    }
    catch(error){
        res.status(400).send({succes:false,msg:error.mesage})
    }

}

const getAllCard = async(req, res) => {
    res.send(await Cart.find());
}

const deleteCard = async(req, res) => {
    res.send(await Cart.findByIdAndDelete(req.params.id));
}

const editCard = async(req, res) => {
    res.send(await Category.findByIdAndUpdate(req.params.id, req.body));
}

module.exports={
    add_to_cart,
    getAllCard,
    deleteCard,
    editCard
}