const express=require('express');


const routers=express.Router();

routers.get('/',function (req, res) {
    res.send("Productos")
});

module.exports=routers
