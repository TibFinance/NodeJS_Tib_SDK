const ServerCallerModule = require("./tib-finance/ServerCaller"); 

let sessionId  = "0d730644-1054-4a87-a456-e9573f25a86f"; 

const ServerCaller = new ServerCallerModule.ServerCaller();

ServerCaller.initalize("http://sandboxportal.tib.finance"); 

// ServerCaller.createSession("4671a4c9-4367-4934-bb23-a8886cebd028", "sdkdev", "Test123!")
// .then( res => {
//     sessionId = res.SessionId
// })
// .catch(err => console.log(err));


ServerCaller.listCustomers("038D7171-BF23-4F3C-9E78-CF6342624FC7", sessionId)
.then( res => console.log(res.Customers))
.catch( err => console.log(err));