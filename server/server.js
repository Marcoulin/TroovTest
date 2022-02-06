const mongoose = require("mongoose");

const password = "1234";
const database = "ApprenticeShipTestDatabase";

mongoose.connect(
    `mongodb+srv://Frutz:${password}@apprenticeshiptestdatab.p0emu.mongodb.net/${database}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
);

