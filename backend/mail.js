const nodemailer = require('nodemailer');
require('dotenv').config({ path: '../.env.development' });

const address ={name: 'Le Roux Fanch',
  address: '28 rue de kelournou',
  zipCode: '00902',
  city: 'San Juan',
  country: 'Puerto Rico'
};

//array de produits
const cart = {
    items: [
      { name: 'HTC 10 - Black', price: 8, quantity: 3 },
      { name: 'Samsung S7', price: 16, quantity: 1 },
      { name: 'Iphone44', price: 78, quantity: 1 }
    ],
    subtotal: 40,
    tax: 8,
    total: 48
};

function itemList(){
    let string = '';
    for(let i = 0; i < cart.items.length; i++){
        string += 
        `<tr>
            <td>${cart.items[i].name}</td>
            <td>${cart.items[i].quantity}</td>
            <td>${cart.items[i].price}</td>
            <td>${cart.items[i].price*cart.items[i].quantity}</td>
        </tr>`;
    }
    return string
}

const date = new Date();

const sender = "eloisa17@ethereal.email"; //process.env.PLAZA_EMAIL;
const customer = process.env.PLAZA_CUSTOMER; //"burley.bogisich43@ethereal.email";
const company = process.env.PLAZA_COMPANY;  //"noreply@company.com";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email', // Host	mail.gmx.com
    port: 587,
    tls: {
        ciphers:'SSLv3',
        rejectUnauthorized: false
      },
    auth: {
        user: 'eloisa17@ethereal.email', // Username	process.env.PLAZA_EMAIL
        pass: 'xVZ4uakUKvtbpb8Rb2' // Password	process.env.PLAZA_PASS
    }
});
  
  
function mailOptions (order) {
    return({
        from: sender,
        to: customer,
        bcc: company,
        subject: `Order Confirmation ${order}`,
        html: `
            <head>
            <style>
            table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            }

            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }

            tr:nth-child(even) {
            background-color: #dddddd;
            }

            .bold{
                font-weight: bold;
            }
            </style>
            </head>
            <h1>Thanks for your purchase ${address.name}</h1>
            <p>Here you can find a recap of your order:</p>
            <p>Order: ${order}</p> 
            <p>Order Date: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</p>
            <h1>Address:</h1>
            <p>${address.name}</p>
            <p>${address.address}</p>
            <p>${address.zipCode}</p>
            <p>${address.city}</p>
            <p>${address.country}</p>
            <h1>Items</h1>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>` +
                itemList() +
                `<tr>
                    <td></td>
                    <td></td>
                    <td class="bold">Subtotal</td>
                    <td>${cart.subtotal}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="bold">Tax</td>
                    <td>${cart.tax}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="bold">Total</td>
                    <td>${cart.total}</td>
                </tr>
            </table>
        `}
    )
};

module.exports = {
    mailOptions,
    transporter,
};