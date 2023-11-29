const Products = require("../models/products");

//list all products
module.exports.index = async(req,res) => {
    const products = await Products.find();
    return res.render('all_products',{
    title : "All Products",
    productList : products
});
}

module.exports.addProduct = async(req,res) => {
    const products = await Products.find();
    return res.render('add_products',{
    title : "All Products",
    productList : products
});
}