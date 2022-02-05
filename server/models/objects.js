const mongoose = require("mongoose"); 
const schema = mongoose.Schema; 

const ObjectSchema = new mongoose.Schema({
    id : {
        type: schema.Types.ObjectId, 
    }, 

    state: {
        type: String, 
        required: true,
    },

    location:[
        {
            locationType:{
                type: String,
            },
            adress:{
                type: String,
            }
        }
    ],

    date: {
        type: Date, 
        required: true
    }, 

    category: {
        type: String, 
        required: true
    },
}); 

const Objects = mongoose.model("User", ObjectSchema); 

module.exports = Objects; 