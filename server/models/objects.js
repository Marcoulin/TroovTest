const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const ObjectSchema = new Schema({
    id : {
        type: Schema.Types.ObjectId, 
    }, 
    

    state: {
        type: String, 
    },
    
    location: {
        type: String,
    },
    
    date: {
        type: String, 
        required: true
    }, 

    category: {
        type: String, 
        required: true
    },
    
}); 

const Objects = mongoose.model("object", ObjectSchema); 

module.exports = Objects; 