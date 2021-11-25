const {v4: uuidv4}=require('uuid')
const cart=[];

const cartDS={
    addToCart: (cartItem)=>{
        cart.push(cartItem);
        return uuidv4();
    },
    fetchCartItems : ()=>{
        return cart.map( (c) =>{
            const carts=Object.assign( {}, c);
            return carts;
        })
    }
}

module.exports=cartDS;