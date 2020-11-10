import React from 'react';
import {ProductConsumer} from "../../Context";
import CartItem from './Cartitem';

function CartList() {

    return (
        <ProductConsumer>
            {value => {
                const {cart} = value;

                return(
                    <div className="container-fluid">
                        {cart.map(item=>{
                            return <CartItem key={item.id} item={item} cartData={value} />
                        })}
                    </div>
                )  
            }}

        </ProductConsumer>
    )
}

export default CartList;