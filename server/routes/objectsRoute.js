const express = require("express"); 
const objectsModel = require("../models/objects")
const app = express(); 


app.post("/add_object", async(req, res) => {
    const object = new objectsModel(req.body)
    try{
        await object.save(); 
        res.send(object); 
    } catch (error){
        res.status(500).send(error); 
    }
});


app.get("/list_objects", async(req, res) => {
    const objects = await objectsModel.find({}); 

    try {
        res.send(objects); 
    }catch(error){
        res.status(500).send(error); 
    }
})

module.exports = app; 