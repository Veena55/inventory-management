const mongoose= require('mongoose');

const productSchema =  new mongoose.Schema({
    name : {
        type : String
    },
    quantity : {
        type : String
    }
},
{
    timestamps : true
}
);

const Products = mongoose.model('Products', productSchema);
module.exports=Products;