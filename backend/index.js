const cors = require("cors");
const express = require("express");
require('dotenv').config({ path: '../.env.development' });
const stripe = require("stripe")(process.env.NODEJS_STRIPE_PVK);
const { v4: uuidv4 } = require('uuid');
require("./db");
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => (
    res.send("working")
))

app.post("/payment", (req,res) =>{
    const {cartList, token} = req.body;
    console.log("product", cartList);

    const address = {
        name: token.card.name,
        address: token.card.address_line1,
        zipCode: token.card.address_zip,
        city: token.card.address_city,
        country: token.card.address_country
    }
    //console.log(address);

    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    })
    .then(customer => {
        stripe.charges.create({
            amount: Math.round(cartList.total * 100),
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchase of Lipstick`,
            // shipping: {
            //     name: token.card.name,
            //     address: {
            //         country: token.card.address_country
            //     }
            // }
        }, {idempotencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

//listen
app.listen(8282, () => console.log("listening port 8282"));