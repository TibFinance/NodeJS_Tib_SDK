const ServerCallerModule = require("./tib-finance/ServerCaller");
const express = require('express'); 

let sessionId = "";

const app  = express();
const ServerCaller = new ServerCallerModule.ServerCaller();

ServerCaller.initalize("http://sandboxportal.tib.finance");


app.get('/createsession', (req, res) => {
  ServerCaller.createSession(
          "clientid",
          "username", 
          "password"
        )
          .then((result) => {
            
            sessionId = result.SessionId
            res.json(result);
          })
          .catch((err) => console.log(err));
})

// end Points 
app.get('/getcustomer', function(req, res){
  ServerCaller.getCustomer("bf199033-53a1-48cd-8f17-04254d026ecd", sessionId)
      .then((result) => {
        console.log(result)
        res.json(result.Customer);
      })
      .catch((err) => {
        console.log(err);
        res.end("something.");
      });
}); 

app.get('/listcustomers', (req, res) => {
  ServerCaller.listCustomers(
          "038D7171-BF23-4F3C-9E78-CF6342624FC7",
          sessionId
        )
          .then((result) => {
            res.json(result.Customers);
          })
          .catch((err) => console.log(err));
})

app.get('/listservices', (req, res) => {
  ServerCaller.listServices(
          "EA34F2C6-36B2-4513-973E-A2C91E7985D3",
          sessionId
        )
          .then((result) => {
            res.json(result.Services);
          })
          .catch((err) => console.log(err));
})

// Start the Server.
app.listen(3000, function (req, res){
  console.log(`Server Running at post 300`)
})