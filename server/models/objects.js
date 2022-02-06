const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const ObjectSchema = new Schema({

    id: Schema.Types.ObjectId, 
    status: String, 
    location: String, 
    date: String, 
    category: String  

}); 

const Objects = mongoose.model("object", ObjectSchema); 

module.exports = Objects; 