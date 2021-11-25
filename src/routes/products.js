const express=require('express');
// importando la data fake
const ds= require("../datasource/data");
const routers=express.Router();

routers.get('/',function (req, res) {
    const products=ds.fetchProducts();
    res.status(200).json(products);
});

module.exports=routers
