import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../../Context";
import PaypalButton from './Paypal'; // eslint-disable-line react-hooks/exhaustive-deps
import StripeButton from './Stripe';
import styled from 'styled-components';

function CartTotal({history}) {

    return (
        <>
             <ProductConsumer>
             {value => {
                const {cartSubtotal, cartTax, cartTotal, clearCart, openModal, cartList, shipping} = value;
                return(
                    <Wrapper className="container">
                        <div className="col-lg-9 d-sm-none bgWhite"></div>
                        <div className="col-lg-3 marginLeft ml-md-auto col-sm-8">
                        <Link to="/">
                            <button type="button" className="text-uppercase mb-3 px-5" onClick={()=> clearCart()}>
                                clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title text-uppercase">
                                Subtotal:
                            </span>
                            <strong className="subtotal">${cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title text-uppercase">
                                Tax:
                            </span>
                            <strong className="tax">${cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title text-uppercase">
                                Shipping:
                            </span>
                            <strong className="shipping">${shipping}</strong>
                        </h5>
                        <h5>
                            <span className="text-title text-uppercase">
                                Total:
                            </span>
                            <strong className="total">${cartTotal}</strong>
                        </h5>
                            <PaypalButton total={cartTotal} clearCart={clearCart} history={history} openModal={openModal} cartList={cartList}/>
                            <StripeButton history={history}/>
                        </div> 
                    </Wrapper>
                )  
            }}
                
            </ProductConsumer>
        </>
    )

}

const Wrapper = styled.div`
    border: 2px solid white;
    border-top: 1px;
    .bgWhite{
        background-color: white;
    }
    button{
        border: 1px solid white;
        color: var(--mainRed);
    }
    button:hover{
        border: 1px solid white;
        color: white;
        background-color: var(--mainRed);
    }
    margin-bottom: 5rem;
    padding-bottom: 1rem;
    .subtotal{
        padding-left: 1rem;
    }
    .tax{
        padding-left: 4.4rem;
    }
    .shipping{
        padding-left: 1.4rem; 
    }
    .total{
        padding-left: 3.15rem;
    }
    @media only screen and (max-width: 767px) {
        .marginLeft{
            margin-left: 9rem;
        } 
    }
    @media only screen and (max-width: 575px) {
        .marginLeft{
            margin-left: 0rem;
            text-align: center;
        } 
    }
`

export default CartTotal;