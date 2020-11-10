const cors = require("cors");
const express = require("express");
require('dotenv').config({ path: '../.env.development' });
const stripe = require("stripe")(process.env.NODEJS_STRIPE_PVK);
const { v4: uuidv4 } = require('uuid');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => (
    res.send("working")
))

app.post("/payment", (req,res) =>{
    const {product, token} = req.body;
    console.log("product", product);
    console.log("price", product.price);
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token.id
    })
    .then(customer => {
        stripe.charges.create({
            amount: Math.round(product.price * 100),
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchase of ${product.name}`,
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