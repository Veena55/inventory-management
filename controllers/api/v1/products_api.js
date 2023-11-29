const Products = require('../../../models/products');

//list all products
module.exports.index = async(req,res) => {
    const products = await Products.find();
   return res.status(200).json({
        message : "All Products List",
        products : products
    });
}

//create/add new product
module.exports.create = async(req,res)=>{
    const product =  await Products.create(req.body);
    // if(req.xhr) {
        return res.status(200).json({
            message : "A new product added successfully",          
                products : product            
        });
    // }
}

//update any product by id
module.exports.update = async(req,res)=>{
    const product =  await Products.findByIdAndUpdate(req.params.id, {
       name : req.body.name,
       quantity : req.body.quantity
    });
    return res.status(200).json({
        message : "A product updated successfully",
        products : product
    });
}

//delete any product by id
module.exports.delete = async(req,res)=>{
    const product =  await Products.findByIdAndDelete(req.params.id);
    return res.status(200).json({
        message : "A product deleted successfully",
        products : product
    });
}