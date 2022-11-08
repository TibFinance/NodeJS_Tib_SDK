const ServerCallerModule = require("./tib-finance/ServerCaller");
const express = require('express'); 

let sessionId = "e983da54-7347-465a-b5af-4c79acaff7db";

const app  = express();
const ServerCaller = new ServerCallerModule.ServerCaller();

ServerCaller.initalize("http://sandboxportal.tib.finance");

// helper Class for html Use
// given a list of object or an object, returns a html table.
class HtmlHelper {
  SetTableHeader = function (obj) {
    let titles = "";
    let keys = Object.keys(obj);

    keys.forEach((elem) => {
      titles += `<th>${elem}</th>`;
    });

    return `<table border='1' style='text-align: center;'><thead>${titles}</thead><tbody>`;
  };

  SetListInTable = function (dataValues) {
    if (dataValues.length == 0) {
      return "No Items ";
    }

    let table = this.SetTableHeader(dataValues[0]);

    let values = "";
    dataValues.forEach((elm) => {
      values += "<tr>";
      for (const [key, value] of Object.entries(elm)) {
        if(typeof value === "object"){
          if(value === null){
            values += `<td>${value}</td>`
          }else if(Array.isArray(value)){          
            values += `<td>${this.SetListInTable(value)}</td>`
          }else{
            values += `<td>${this.SetObjectInTable(value)}</td>`
          }
        }else{
          values += `<td>${value}</td>`;
        }
      }
      values += "</tr>";
    });
    table += values;

    table += this.SetTableFooter();
    return table;
  };

  SetObjectInTable = function (obj) {
    let table = this.SetTableHeader(obj);

    let values = "";
    values += "<tr>";
    for (const [key, value] of Object.entries(obj)) {
      if(typeof value === "object"){
        if(value === null){
          values += `<td>${value}</td>`
        }else if(Array.isArray(value)){          
          values += `<td>${this.SetListInTable(value)}</td>`
        }else{
          values += `<td>${this.SetObjectInTable(value)}</td>`
        }
      }else{
        values += `<td>${value}</td>`;
      }
      

    }
    values += "</tr>";
    table += values;

    table += this.SetTableFooter();
    return table;
  };

  SetTableFooter = function () {
    return "</tbody></table>";
  };
}

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