import React, {useState} from 'react';
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

//Test card = 4242424242 12/21 123
// on refrsh props.total = 0
//total={cartTotal} clearCart={clearCart} history={history}
function StripeButton(props){
    const [product] = useState({
        name: "Lipstick",
        price: props.total,
        productBy: "Alluance"
    });

    console.log(product.price);
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
                props.clearCart();
                props.history.push('/');
                toast("Success! Check email for details", { type: "success" });
            } else {
                toast("Something went wrong", { type: "error" });
            }
        })
        .catch(err => console.log(err))
    }

    

    return(
        <StripeCheckout 
            stripeKey={process.env.REACT_APP_STRIPE_PBK}
            token={makePayment}
            name="Alluance"
            amount={product.price * 100}
            // shippingAddress
            // billingAddress
        >
            <button>Use Card</button>
        </StripeCheckout>
    )
}

export default StripeButton;