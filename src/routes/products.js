const express=require('express');
// importando la data fake
const ds= require("../datasource/products");
const routers=express.Router();

routers.get('/',function (req, res) {
    const products=ds.fetchProducts();
    res.status(200).json(products);
});

// obtener un producto por su id
routers.get('/:id',function (req, res) {
    const productid=req.params.id;
    const product=ds.fetchProductById(productid);

    if(product != undefined){
        res.status(200).json(product);
    }else{
        res.status(200).json(`No se encontro producto con el id ${productid}`)
    }
});

module.exports=routers
