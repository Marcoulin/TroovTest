const usrService = require("../services/usersService");

exports.login = async (req, res) => {
    try{
        const{
            email, 
            password
        } = req.body; 

        const logged = await usrService.getByEmailAndPassword(
            email, 
            password
        );
        res.status(200).json(logged)
    }catch(error){
        console.log(error); 
    }
}

exports.createUser=  async(req, res) => {
    try{
        const{
            username, 
            email, 
            password
        } = req.body; 

        const signed = await usrService.createUsers({
            username, 
            email, 
            password
        }); 
        res.status(200).json(signed); 
    }catch(error){
        console.log(error); 
    }
}