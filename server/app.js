const express = require("express"); 
const app = express(); 
require("./server")
const objectsRoute = require("./routes/objectsRoute"); 

app.use('/objects', objectsRoute); 


app.listen(3000, () => {
    console.log("Server is running at port 3000");
  });
  