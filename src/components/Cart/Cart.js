import React from 'react';
import CartColumns from './Cartcolumns';
import EmptyCart from './Emptycart';
import {ProductConsumer} from "../../Context";
import Cartlist from './Cartlist';
import CartTotal from './CartTotal'; 

function Cart(props) {
    window.scrollTo(0, 0);
    return (
        <section>
            <ProductConsumer>
                {value =>{
                    const {cart} = value;
                    if(cart.length>0){
                        return(
                            <>
                                <CartColumns />
                                <Cartlist />
                                <CartTotal history={props.history}/>
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