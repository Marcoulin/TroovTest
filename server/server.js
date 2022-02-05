const express = require("express");
const mongoose = require("mongoose");
//const router = require("./routes")

const app = express();

app.use(express.json());

const username = "Frutz";
const password = "1234";
const cluster = "Troov_Test";
const database = "ApprenticeShipTestDatabase";

mongoose.connect(
    `mongodb+srv://Frutz:${password}@apprenticeshiptestdatab.p0emu.mongodb.net/${database}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//app.use(router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
