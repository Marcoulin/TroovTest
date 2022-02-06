const express = require("express"); 
const router = express.Router(); 
const mongoose = require("mongoose"); 
const objectsModel = require("../models/objects")

router.post("/add_object", async(req, res) => {
    const object = new objectsModel({
        state: req.body.state,
        location: req.body.location, 
        date: req.body.date, 
        category: req.body.category
    });
    try{
        await object.save()
        .then(data => (res.json(data))); 
        
    } catch (error){
        console.log(error); 
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