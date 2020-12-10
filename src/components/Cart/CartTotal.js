import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../../Context";
import PaypalButton from './Paypal'; // eslint-disable-line react-hooks/exhaustive-deps
import StripeButton from './Stripe';
function CartTotal({history}) {

    return (
        <>
             <ProductConsumer>
             {value => {
                const {cartSubtotal, cartTax, cartTotal, clearCart, openModal, cartList} = value;
                return(
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
                            <PaypalButton total={cartTotal} clearCart={clearCart} history={history} openModal={openModal} cartList={cartList}/>
                            <StripeButton history={history}/>
                        </div> 
                    </div>
                )  
            }}
                
            </ProductConsumer>
        </>
    )

}

export default CartTotal;