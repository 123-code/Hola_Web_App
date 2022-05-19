const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    Nombre:{reuired:true,type:String},
    Precio:{required:true,type:Number},

})
module.exports = mongoose.model("Producto",ProductSchema);

 