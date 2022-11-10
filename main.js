const ServerCallerModule = require("./tib-finance/ServerCaller");
const express = require('express'); 
const { response } = require("express");
const e = require("express");

let sessionId = "";

const app  = express();
const ServerCaller = new ServerCallerModule.ServerCaller();

ServerCaller.initalize("http://sandboxportal.tib.finance");
class ResultHandler {
  constructor() {
      this.content = "";
      this.errorMessages = "";
  }
  Handle(resObj, expectedResult, message) {
      if (!resObj.HasError) {
          if(Array.isArray(expectedResult)){
            // do Something When result is an array 
            this.content = expectedResult
          }else{
              // in the case of null show desired message.
              if(expectedResult == null || expectedResult == undefined){
                  this.content = message
              }else if(typeof expectedResult == "object"){
                // do Something when result is not an array.
                this.content = expectedResult
              }else{
                // this is a place holder for whatever you wanna do with results that are neither object not lists.
                this.content = {
                  value : expectedResult
                }
              }
          }
          return true;
      } else {
          if (resObj.Messages.includes("Need an authenticated user to perform this action") || resObj.Messages.includes("Call received with no session token")) {
              this.errorMessages ={
                message : "need to authenticate to perform this call."
              }
          }else{
            this.errorMessages = {
              message: resObj.Messages
            }
          }
      }
      return false;
  }
  getContent(){
      return this.content;
  }
  getErrors(){
    return this.errorMessages; 
  }  
}

let responseHandler = new ResultHandler();

app.get('/', (req, res) => {
  res.end("main")
})

app.get('/createsession', (req, res) => {
  ServerCaller.createSession(
          "clientId",
          "username", 
          "pasword"
        )
          .then((result) => {
            let content = null;
            sessionId = result.SessionId
            if(responseHandler.Handle(result, result.SessionId)){
              // do something when the response is correct
              content = (responseHandler.getContent());
            }else{
              // do something else when the respose has errors .
              content = responseHandler.getErrors();
            }
            res.json(content)
          })
          .catch((err) => console.log(err));
})

app.get('/getcustomer', function(req, res){
  ServerCaller.getCustomer("bf199033-53a1-48cd-8f17-04254d026ecd", sessionId)
      .then((result) => {
        let content = null;
        if(responseHandler.Handle(result, result.Customer)){
          // do something when the response is correct
          content = (responseHandler.getContent());
        }else{ 
          // do something else when the respose has errors .
          content = responseHandler.getErrors();
        }
        res.json(content)
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
            let content = null;
            if(responseHandler.Handle(result, result.Customers)){
              // do something when the response is correct
              content = (responseHandler.getContent());
            }else{ 
              // do something else when the respose has errors .
              content = responseHandler.getErrors();
            }
            res.json(content)
          })
          .catch((err) => console.log(err));
})

app.get('/listservices', (req, res) => {
  ServerCaller.listServices(
          "EA34F2C6-36B2-4513-973E-A2C91E7985D3",
          sessionId
        )
          .then((result) => {
            let content = null;
            if(responseHandler.Handle(result, result.Services)){
              // do something when the response is correct
              content = (responseHandler.getContent());
            }else{ 
              // do something else when the respose has errors .
              content = responseHandler.getErrors();
            }
            res.json(content)
          })
          .catch((err) => console.log(err));
})

// Start the Server.
app.listen(3000, function (req, res){
  console.log(`Server Running at  'http://127.0.0.1:3000'`)
})