const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

const ObjectSchema = new Schema({
    /*
    id : {
        type: schema.Types.ObjectId, 
    }, 
    */

    state: {
        type: String, 
    },
    /*
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
    */
}); 

const Objects = mongoose.model("object", ObjectSchema); 

module.exports = Objects; 