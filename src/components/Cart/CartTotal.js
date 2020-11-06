import React from 'react';
import {Link} from 'react-router-dom';
import PaypalButton from './Paypal';
import Stripe from './Stripe';
function CartTotal({cartData, history}) {
    const { cartSubtotal, cartTax, cartTotal, clearCart} = cartData;
    
    return (
        <>
            <div className="container">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                <Link to="/">
                    <button type="button" className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=> clearCart()}>
                        clear cart
                    </button>
                </Link>
                <h5>
                    <span className="text-title">
                        Subtotal:
                    </span>
                    <strong>$ {cartSubtotal}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Tax:
                    </span>
                    <strong>$ {cartTax}</strong>
                </h5>
                <h5>
                    <span className="text-title">
                        Total:
                    </span>
                    <strong>$ {cartTotal}</strong>
                </h5>
                    <PaypalButton total={cartTotal} clearCart={clearCart} history={history}/>
                    <Stripe />
                </div> 
            </div>
        </>
    )

}

export default CartTotal;