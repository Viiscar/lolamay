require('dotenv').config({ path: '../.env.development' });
var mongoDb = require('mongodb');
var mongoClient = mongoDb.MongoClient;
var serverUrl = process.env.MONGO_URL;
var {transporter, mailOptions} = require('./mail');

mongoClient.connect(serverUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
  if (err) throw err;
  var dbo = db.db("alluance");

  //create db
  if(!dbo.collection("orders")){
    dbo.createCollection("orders", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  }

  function addOrder(order){
    //insert collection
    console.log("addorder", order)

    let myobj = { _id: order, name: "Company Inc", address: "Higo" };

    dbo.collection("orders").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });

    dbo.collection("orders").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
    
    transporter.sendMail(mailOptions(order), function(error, info){
      if (error) {
          console.log(error);
      } else {
          console.log('Email sent: ' + info.response);
          order = order +1;
      }
    });
  }
  
  let newOrder = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
    let order; 
    
    let mysort = { _id: -1 };
    //get last collection
    dbo.collection("orders").find({},{ projection: { _id: 1 } }).sort(mysort).limit(1).toArray(function(err, result) {
      if (err) throw err;
      console.log("res", result)
      if (result[0] !== undefined){
        order = result[0]._id + 1;
      }else{
        order = 1;
      }
      
      myResolve(order); // when successful
      myReject("Error");  // when error
    });
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise)
  newOrder.then(
    function(value) { addOrder(value)},
    function(error) { console.log(error) }
  );

});