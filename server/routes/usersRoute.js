const express = require("express"); 
const usrController = require("../controllers/usersController"); 
const router = express.Router(); 

router.get("/login", usrController.login); 
router.post("/signing", usrController.createUser); 

module.exports = router; 

