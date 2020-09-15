import React from 'react';
import Title from '../Title';
import CartColumns from './Cartcolumns';
import EmptyCart from './Emptycart';
import {ProductConsumer} from "../../Context";
import Cartlist from './Cartlist';

function Cart() {
    return (
        <section>
            <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length>0){
                        return(
                            <>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <Cartlist cartData={value}/>
                            </>
                        )
                    }else{
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
    )
}

export default Cart;