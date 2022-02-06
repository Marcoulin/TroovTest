const express = require("express"); 
const app = express(); 
require("./server")
const objectsRoute = require("./routes/objectsRoute"); 

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "*");

  next();
});

app.use('/objects', objectsRoute); 


app.listen(4000, () => {
    console.log("Server is running at port 4000");
  });
  