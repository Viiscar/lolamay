const date = new Date();

const sender = "eloisa17@ethereal.email";
const company = "noreply@company.com";

let string = '';

//creates a row for every item
function itemList(cart){
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
};

//Email
function mailOptions(order,address, customer,cartList){
    return(
        {from: sender,
        to: customer,
        bcc: company,
        subject: `Order Confirmation ${order}`,
        html: `
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
                string +
                `<tr>
                    <td></td>
                    <td></td>
                    <td class="bold">Subtotal</td>
                    <td>${cartList.subtotal}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="bold">Tax</td>
                    <td>${cartList.tax}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="bold">Total</td>
                    <td>${cartList.total}</td>
                </tr>
            </table>
            `})
        
};

module.exports = {
    mailOptions,
    itemList,
};