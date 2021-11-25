const express = require("express");

const apiServer= express()

apiServer.get("/", function(req,res) {
    res.send("hola desde node con express")
});

const obj1 = {n: "Mahmoud", age: 30}

const copy = Object.assign({}, obj1)

console.log(copy)
apiServer.listen(3000, () => console.log("APiServer started"))