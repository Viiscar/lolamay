const date = new Date();
let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

const sender = process.env.SENDER_EMAIL; //;"eloisa17@ethereal.email"
const company = process.env.RECEIVER_COMPANY;

let string = '';

//creates a row for every item
function itemList(cart){
    for(let i = 0; i < cart.items.length; i++){
        string += 
        `<tr>
            <td class="items">${cart.items[i].name}</td>
            <td class="items">${cart.items[i].quantity}</td>
            <td class="items">${cart.items[i].price}</td>
            <td>${cart.items[i].price*cart.items[i].quantity}</td>
        </tr>`;
    }
    return string
};

// Resets string to initial value
function disableItemList(){
    string = ''
    return string
}

//Email
function mailOptions(order,address, customer,cartList){
    let finalString = string;
    string = '';
    return(
        {from: sender,
        to: customer,
        bcc: company,
        subject: `Order Confirmation ${order}`,
        html: `
            <head>
                <style>
                    h2{
                        color: #c0181c;
                    }
                    p{
                        font-style: italic;
                    }
                    .order{
                        text-align: center;
                    }
                    table {
                    font-family: trebuchet MS, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                    }
                    td, th {
                    border: 1px solid transparent;
                    text-align: left;
                    padding: 8px;
                    }
                    .address {
                        padding: 0px 0px 0px 20px; 
                    }
                    .items{
                        border-right: 1px solid #c0181c;
                    }
                    
                    .bold{
                        font-weight: bold;
                    }
                </style>
            </head>
            <table bgcolor="#ffffff">
                <tr>
                    <th class="order"><img src="cid:logo-top" alt="logo white"/></th>
                </tr>
            </table>
            <table bgcolor="#e6e6e6">
                <tr>
                    <td>
                        <h2>Your order confirmation</h2>
                    </td>
                </tr>
            </table>
            <table bgcolor="#e6e6e6">
                <tr>
                    <th class="order">
                        <p>Order: #${order}</p>
                    </th>
                </tr>                
                <tr>
                    <th class="order">
                        <p>Order Date: ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}</p>
                    </th>
                </tr>
            </table>
            <table bgcolor="#e6e6e6">              
                <tr>
                    <td>
                        <p>Hello ${address.name},</p>
                    </td>
                </tr>                
                <tr>
                    <td>
                        <p>Thank you for believing in our philosophy! We received your order and we're working on it. We will send you another email as soon as it ships.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h2>Shipping Address</h2>
                    </td>
                </tr>    
                <tr>
                    <td class="address">
                        <p>${address.name},</p>
                    </td>
                </tr>    
                <tr>
                    <td class="address">
                        <p>${address.address}</p>
                    </td>
                </tr>    
                <tr>
                    <td class="address">
                        <p>${address.zipCode}</p>
                    </td>
                </tr>    
                <tr>
                    <td class="address">
                        <p>${address.city}</p>
                    </td>
                </tr>    
                <tr>
                    <td class="address">
                        <p>${address.country}</p>
                    </td>
                </tr>    
                <tr>
                    <td>
                        <h2>Items ordered</h2>
                    </td>
                </tr>    
            </table> 
            <table bgcolor="#e6e6e6">
                <tr>
                    <th class="items">Name</th>
                    <th class="items">Quantity</th>
                    <th class="items">Price</th>
                    <th>Total</th>
                </tr>` +
                finalString +
                `<tr>
                    <td></td>
                    <td></td>
                    <td class="items bold">Subtotal</td>
                    <td>${cartList.subtotal}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="items bold">Tax</td>
                    <td>${cartList.tax}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="items bold">Shipping</td>
                    <td>${cartList.shipping}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td class="items bold">Total</td>
                    <td>$${cartList.total}</td>
                </tr>
            </table>
            <table bgcolor="#ffffff">
                <tr>
                    <th class="order"><img src="cid:logo-bottom" alt="logo black"/></th>
                </tr>
            </table> 
            `,
            attachments: [{
                filename: 'haut.png',
                path: 'haut.png',
                cid: 'logo-top'
            },{
                filename: 'bas.png',
                path: 'bas.png',
                cid: 'logo-bottom'
            }]
        }
    )
        
};

module.exports = {
    mailOptions,
    itemList,
    disableItemList
};