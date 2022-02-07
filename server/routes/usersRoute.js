const express = require("express"); 
const usrController = require("../controllers/usersController"); 
const router = express.Router(); 

router.post("/login", usrController.login); 
router.post("/signing", usrController.createUser); 

module.exports = router; 

