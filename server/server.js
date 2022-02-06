const mongoose = require("mongoose");

const password = "1234";
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

