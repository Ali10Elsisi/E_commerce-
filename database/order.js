let mongoose = require('mongoose');
let OrderSchema = new mongoose.Schema(
    {
userId :{type :String , required:true},
products:[
    { 
        productId:{ type:  string},
        quantity:{type:Number,default:1},
    }
],
amount:{type:Number,required:true},
address:{type:object,required:true },
status:{type:string, default:"panding"},

    },
    {timestamps:true}
);
module.exports = OrderSchema;