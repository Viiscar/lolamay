const cors = require("cors");
const express = require("express");
require('dotenv').config({ path: '../.env.development' });
const path = require('path');
const stripe = require("stripe")(process.env.NODEJS_STRIPE_PVK);
const { v4: uuidv4 } = require('uuid');
const { database } = require("./db");
const {itemList, disableItemList} = require('./mail-template');

const PORT = process.env.PORT || 8282;
const app = express();

//middleware
app.use(express.json());
app.use(cors());

//Sends static files if in production
if(process.env.NODE_ENV === "production"){
  console.log("production")
	app.use(express.static(path.join(__dirname, "../", "/build")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname,"../", "build", "index.html"));
	});
}else {
	app.get("/", (req, res) => {
		res.send("Development mode");
	});
}

//on receiving payment
app.post("/payment", async (req,res) =>{
    const {cartList, token} = req.body;

    //Getting cart items list to create email
    itemList(cartList);
    let address;
    
    if(token.paypal){
        address ={
            name: token.address.recipient_name,
            address: token.address.line2 === undefined ? token.address.line1 : token.address.line1 + ", " + token.address.line2,
            zipCode: token.address.state !== undefined ? token.address.state + " " + token.address.postal_code : token.address.postal_code,
            city: token.address.city,
            country: token.address.country_code === "US" ? "United States" : token.address.country_code
        }

        return database(cartList, address, token.email)
        
    }else{
        address = {
            name: token.card.name,
            address: token.card.address_line1,
            zipCode: token.card.address_zip,
            city: token.card.address_city,
            country: token.card.address_country
        }

        const idempotencyKey = uuidv4();

        let status;
        try {
          const { cartList, token } = req.body;
      
          const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const charge = await stripe.charges.create(
            {
              amount: Math.round(cartList.total * 100),
              currency: "usd",
              customer: customer.id,
              receipt_email: token.email,
              description: `Purchase of Lipstick`,
              shipping: {
                name: token.card.name,
                address: {
                  line1: token.card.address_line1,
                  line2: token.card.address_line2,
                  city: token.card.address_city,
                  country: token.card.address_country,
                  postal_code: token.card.address_zip
                }
              }
            },
            {
                idempotencyKey
            }
          );
          console.log("Charge:", { charge });
          status = 200;

        } catch (error) {
          status = 400;
        }
        
        res.status(status).json(status)

        //If successfull, sends data to db and sends confirmation email
        //If unsuccessfull, resets email cart values
        if(status === 200){
            database(cartList, address, token.email)
        }else{
            disableItemList()
        }

    }
})

//listen
app.listen(PORT, () => console.log("listening port", PORT));
