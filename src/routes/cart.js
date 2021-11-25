const express=require("express");
// importar el arreglo de cart
const ds=require("../datasource/cart");

const routers=express.Router();

// para agregar
routers.post('/', function(req, res){
    const cartItem=req.body;
    console.log(cartItem);
    console.log(req.headers)
   const id= ds.addToCart(cartItem);

   res.status(201).location(`/cart/${id}`).send()
})

routers.get("/", function(req, res){
    res.status(200).json(ds.fetchCartItems());
})

module.exports=routers;