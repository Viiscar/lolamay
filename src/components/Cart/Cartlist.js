import React from 'react';
import CartItem from './Cartitem';

function CartList({cartData}) {

    const {cart} = cartData;

    return (
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItem key={item.id} item={item} cartData={cartData} />
            })}
        </div>
    )
}

export default CartList;