var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

const productSchema = new Schema ({
    
    id : String,
    title: String,
    description : String,
    price : String

}) ;

module.exports = mongoose.model('productSchema',productSchema);
