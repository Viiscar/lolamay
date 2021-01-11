import React from 'react';
import {ProductConsumer} from "../../Context";
import StripeCheckout from "react-stripe-checkout";
import styled from 'styled-components';

//Test card = 4242424242 12/21 123
// eslint-disable-line react-hooks/exhaustive-deps
function StripeButton(props){

    return(
        <>
            <ProductConsumer>
                {value => {
                const {cartList, cartTotal, clearCart} = value;
                const makePayment = token =>{
                    
                    const body = {
                        token,
                        cartList
                    }
                    const headers = {
                        "Content-Type": "application/json"
                    }
            
                    return fetch("http://localhost:8282/payment", {
                        method: "POST",
                        headers,
                        body: JSON.stringify(body)
                    })
                    .then(response => {
                        console.log("Response", response)
                        const {status} = response;
                        console.log("Status", status)
                        if (status === 200) {
                            console.log("success");
                            clearCart();
                            setTimeout( function(){value.openModal(true)}, 500);
                            props.history.push('/');
                        } else {
                            setTimeout( function(){value.openModal(false)}, 400);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        setTimeout( function(){value.openModal(false)}, 400);
                    })
                }

                return(
                    <StripeCheckout 
                        stripeKey={process.env.REACT_APP_STRIPE_PBK}
                        token={makePayment}
                        name="Alluance"
                        amount={Math.round(cartTotal * 100)}
                        //shippingAddress
                        billingAddress
                    >
                        <Btn>Use Credit Card</Btn>
                    </StripeCheckout>
                )  
            }} 
            </ProductConsumer>
        </>
    )
}

const Btn = styled.button`
    background: #ffffff;
    color: #c0181c;
    border-radius: 15px 15px 15px 15px;
    width: 100%;
    max-width: 152px;
    border: none;
    :hover{
        background: var(--mainRed);
    }
`

export default StripeButton;