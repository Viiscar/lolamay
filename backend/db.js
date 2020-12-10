require('dotenv').config({ path: '../.env.development' });
var mongoDb = require('mongodb');
var mongoClient = mongoDb.MongoClient;
var serverUrl = process.env.MONGO_URL;
const {transporter} = require("./nodemailer");
var {mailOptions} = require('./mail-template');

function database(cartList, address, email){
  mongoClient.connect(serverUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("alluance");
  
    //create db if it doesn't exist
    if(!dbo.collection("orders")){
      dbo.createCollection("orders", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
    }
  
    function addOrder(order){
  
      let myobj = { _id: order, cartList,address,email};

      //insert collection
      dbo.collection("orders").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
      });
      
      //returns collection list
      // dbo.collection("orders").find({}).toArray(function(err, result) {
      //   if (err) throw err;
      //   console.log(result);
      //   db.close();
      // });
      
      //Sends email
      transporter.sendMail(mailOptions(order, address, email, cartList), function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            order = order +1;
        }
      });
    }
    
    //Promise to get last collection id and set it to order (+1)
    let newOrder = new Promise(function(myResolve, myReject) {
    
      let order; 
      let mysort = { _id: -1 };

      //Get last collection
      dbo.collection("orders").find({},{ projection: { _id: 1 } }).sort(mysort).limit(1).toArray(function(err, result) {
        if (err) throw err;
        console.log("res", result)
        if (result[0] !== undefined){
          order = result[0]._id + 1;
        }else{
          order = 1;
        }
        
        myResolve(order);
        myReject("Error");  
      });
    });
    
    
    newOrder.then(
      function(value) { addOrder(value)},
      function(error) { console.log(error) }
    );
  
  });
};


module.exports = {
  database
};