const express = require("express"); 
const router = express.Router();
const userController = require("../controllers/objectsController") 
const objectsModel = require("../models/objects")

router.post("/add_object", async(req, res) => {
    const object = new objectsModel(req.body); 
    try{
        await object.save(); 
        console.log("Object send"); 
        res.send(object); 
    } catch (error){
        res.status(500).send(error);
    }
});


router.get("/list_objects", async(req, res) => {
    const objects = await objectsModel.find({}); 

    try {
        res.send(objects); 
    }catch(error){
        res.status(500).send(error); 
    }
})

module.exports = router; 