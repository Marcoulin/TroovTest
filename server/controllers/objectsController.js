const postObjectService = require("../services/objects/post") 
const getObjectService = require("../services/objects/get")

const postObjects = async (req, res) => {
    try{
        const {
            state, 
            location, 
            date, 
            category
        } = req.body
        const newObj = await postObjectService.create({
            state, 
            location, 
            date, 
            category
        }); 
        res.status(200).json(newObj); 
    }catch(error){
        res.status(500).json(error); 
    }
}

const getObjects = async (req, res) => {
    try{
        res.status(200).json((await getObjectService.all()))
    }catch (error)
    {
        res.status(500).json(error)
    }
}

