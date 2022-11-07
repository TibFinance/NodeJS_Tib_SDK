const ServerCallerModule = require("./tib-finance/ServerCaller");
let sessionId = "29dce411-90d9-4933-a3f7-29ae62465e90";
const ServerCaller = new ServerCallerModule.ServerCaller();
ServerCaller.initalize("http://sandboxportal.tib.finance");

// Server config .
const http = require("http");
const { cp } = require("fs");
const hostname = "127.0.0.1";
const port = 3000;

// helper Class

class HtmlHelper {
  
  SetTableHeader = function (obj) {
    let titles = "";
    let keys = Object.keys(obj);

    keys.forEach((elem) => {
      titles += `<th>${elem}</th>`;
    });

    return `<table border='1' style='text-align: center;'><thead>${titles}</thead><tbody>`;
  };

  SetTableData = function (dataValues) {
    if(dataValues.length == 0){
      return "<h1> the given list is empty</h1>"
    }
    
    let table = this.SetTableHeader(dataValues[0]);
    
    let values = "";
    dataValues.forEach((elm) => {
      values += "<tr>";
      for (const [key, value] of Object.entries(elm)) {
        values += `<td>${value}</td>`;
      }
      values += "</tr>";
    });
    table += values;

    table += this.SetTableFooter();
    return table;
  };
  SetTableFooter = function(){
    return "</tbody></table>";
  }
}

// init the HtmlHelper
let helper = new HtmlHelper();
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    ServerCaller.createSession(
      "4671a4c9-4367-4934-bb23-a8886cebd028",
      "sdkdev",
      "Test123!"
    )
      .then((result) => {
        sessionId = result.SessionId;
        res.end(`<h1>${sessionId}</h1>`);
      })
      .catch((err) => console.log(err));
  }

  // list customers EndPoint.
  if (req.url === "/listCustomers") {
    ServerCaller.listCustomers(
      "038D7171-BF23-4F3C-9E78-CF6342624FC7",
      sessionId
    )
      .then((result) => {
        let _html = helper.SetTableData(result.Customers);
        res.end(_html);
      })
      .catch((err) => console.log(err));
  }

  // list of Services .
  if (req.url === "/listServices") {
    ServerCaller.listServices(
      "EA34F2C6-36B2-4513-973E-A2C91E7985D3",
      sessionId
    ).then((result) => {
      let _html = helper.SetTableData(result.Services);
      res.end(_html);
    })
    .catch(err => console.log(err));
  }
});

// Start the Server.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
