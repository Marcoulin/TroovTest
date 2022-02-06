const express = require("express");
const app = express(); 
const cors = require("cors"); 
require("./server")
const objectsRoute = require("./routes/objectsRoute"); 
const bodyParser = require("body-parser"); 

app.use(bodyParser.json()); 

app.use(cors());

app.use(express.json()); 

app.use(express.urlencoded({extended: true})); 

app.use(express.static('public')); 

app.use('/objects', objectsRoute); 

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
