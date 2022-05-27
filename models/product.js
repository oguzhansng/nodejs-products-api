var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

const ProductSchema = new Schema ({
    name: { type:String , required:true } ,
    description : { type: String, required:true },
    price : { type: String , required:true },
    createdAt : { type: Date, default:Date.now,},

}) ;

module.exports = mongoose.model('productSchema',ProductSchema);
