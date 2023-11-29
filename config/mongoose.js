const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/product-inventory');

const db = mongoose.connection;

db.on('error',(err)=>{console.log("Something went wrong!!")});
db.once('open',(c)=>{console.log("Connect to database!")});

module.exports = db;