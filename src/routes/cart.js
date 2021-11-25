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
// obtener todos
routers.get("/", function(req, res){
    res.status(200).json(ds.fetchCartItems());
})
// obtener por id
routers.get("/:id", function(req, res){

    const cartid=req.params.id;
    const cart=ds.fetchCartItemById(cartid);

    if(cart != undefined){
        res.status(200).json(cart);
    }else{
        res.status(200).json(`No se encontro canasta con el id ${cartid}`)
    }
})

module.exports=routers;