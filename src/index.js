const express = require("express");
// importando routers
const productsRouters=require('./routes/products');

const apiServer= express()

apiServer.get("/", function(req,res) {
    res.send("hola desde node con express")
});
// productos
apiServer.use("/products", productsRouters);



apiServer.listen(3000, () => console.log("APiServer started"))