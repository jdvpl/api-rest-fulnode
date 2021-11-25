const express = require("express");
// importando routers
const productsRouters=require('./routes/products');
// importar el router de las compras
const cartRouters=require('./routes/cart');
const apiServer= express()
// para enviar parametros tipo json
apiServer.use(express.json());

// productos
apiServer.use("/products", productsRouters);
// cart
apiServer.use("/cart", cartRouters);

apiServer.get("/", function(req,res) {
    res.send("hola desde node con express")
});



apiServer.listen(3000, () => console.log("APiServer started"))