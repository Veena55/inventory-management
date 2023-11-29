const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./config/mongoose');

const expressLayout = require('express-ejs-layouts');
app.use(express.urlencoded({ extended: false }));
app.use(expressLayout);
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.use('/', require('./routes'));

app.listen(PORT,(err)=>{
    if(err) {
        console.log("Something went wrong!!");
        return;
    }
    console.log(`Server is connected on PORT - ${PORT}`);
});