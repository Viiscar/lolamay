import React from 'react';
import CartItem from './Cartitem';

function CartList({cartData}) {

    const {finalCart} = cartData;
    //let retreivedStorage = localStorage.getItem('myCart');

    // let cartData;
    // if (typeof(Storage) !== "undefined") {
    //     let retreivedStorage = localStorage.getItem('myCart');
    //     cartData = JSON.parse(retreivedStorage); 
    // } else {
    //     let {cart} = cartData;
    // }

    return (
        <div className="container-fluid">
            {finalCart.map(item=>{
                return <CartItem key={item.id} item={item} cartData={cartData} />
            })}
            <h1>merde</h1>
        </div>
    )
}

export default CartList;