const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
require("./server")
const objectsRoute = require("./routes/objectsRoute"); 

app.use(cors()); 

app.use('/objects', objectsRoute); 

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
