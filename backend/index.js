const cors = require("cors");
const express = require("express");
require('dotenv').config({ path: '../.env.development' });
const stripe = require("stripe")(process.env.NODEJS_STRIPE_PVK);
const { v4: uuidv4 } = require('uuid');
const { database } = require("./db");
const {itemList} = require('./mail-template');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.get("/", (req, res) => (
    res.send("working")
))

//on receiving payment
app.post("/payment", (req,res) =>{
    const {cartList, token} = req.body;

    const address = {
        name: token.card.name,
        address: token.card.address_line1,
        zipCode: token.card.address_zip,
        city: token.card.address_city,
        country: token.card.address_country
    }

    //Getting cart items list to create email
    itemList(cartList);

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
        }, {idempotencyKey})
    })
    //Sends data to db and send confirmation email
    .then(
        database(cartList, address, token.email)
    )
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

//listen
app.listen(8282, () => console.log("listening port 8282"));
