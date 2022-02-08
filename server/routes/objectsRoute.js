const express = require("express"); 
const objController = require("../controllers/objectsController") 
const router = express.Router();

router.post("/add_objects", objController.postObjects); 
router.get("/read_objects", objController.listObjects); 
router.delete("/delete_objects/:id", objController.removeObjects); 

module.exports = router; 