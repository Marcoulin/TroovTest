const Objs = require("../models/objects")

exports.createObj = async (objects) => {
    try{
        var cObj = await Objs.create(objects);
        console.log(cObj); 
    }catch(e){
        console.log(e); 
    }
      

}

exports.readObj = async (query) => {
    try {
        var rObj = await Objs.find(query);  
        return rObj; 
    }catch(error){
        console.log(e); 
    }
}

exports.deleteObj = async (id) => {
    try {
        var dObj = await Objs.findByIdAndDelete(id); 
    }catch (e){
        console.log(e)
    }
}


  