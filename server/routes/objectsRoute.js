const express = require("express"); 
const router = express.Router();
const objController = require("../controllers/objectsController") 

router.post("/add_object", () => {
    objController.postObjects; 
}); 

module.exports = router; 