import React from 'react';
import {ProductConsumer} from "../../Context";
import StripeCheckout from "react-stripe-checkout";

//Test card = 4242424242 12/21 123
// eslint-disable-line react-hooks/exhaustive-deps
function StripeButton(props){
    
    return(

        <>
            <ProductConsumer>
                {value => {
                const {cartTotal, clearCart} = value;

                const product = {
                    name: "Lipstick",
                    price: cartTotal,
                    productBy: "Alluance"
                };
            
                const makePayment = token =>{
                    const body = {
                        token,
                        product
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
                        // shippingAddress
                        // billingAddress
                    >
                        <button>Use Card</button>
                    </StripeCheckout>
                )  
            }} 
            </ProductConsumer>
        </>
    )
}

export default StripeButton;