import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
//sb-tf7fz3240936@personal.example.com
//Udjz!17P
 
export default class MyApp extends React.Component {
    render() {
        const makePayment = (token, cartList) =>{ 
            const body = {
                token,
                cartList
            }
            const headers = {
                "Content-Type": "application/json"
            }
    
            return fetch("/payment", {
                method: "POST",
                headers,
                body: JSON.stringify(body)
            })
            .then(response => {
                console.log("Response", response)
                const {status} = response;
                console.log("Status", status)
            })
            .catch(err => {
                console.log(err);
            })
        }

        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data

            const token = {address:payment.address, email:payment.email, paypal:true};
            const cartList = this.props.cartList;
            makePayment(token, cartList);

            this.props.clearCart();
            this.props.history.push('/');
            this.props.openModal(true);
        }
 
        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            this.props.openModal(false);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        //let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    process.env.REACT_APP_PAYPAL_ID,
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={this.props.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}