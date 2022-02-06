const objectService = require("../services/objectServices")

exports.postObjects = async (req, res, next) => {
    try {
        const {
            status,
            location,
            date,
            category

        } = req.body;
        const object = await objectService.createObj({
            status,
            location,
            date,
            category
        });
        return res.status(200).json(object);
    } catch (error) {
        console.log(error);
    }
}

exports.listObjects = async (req, res, next) => {
    console.log("retrieving users"); 
    try {
        var listOfObjects = await objectService.readObj({});
        return res.status(200).json({ data: listOfObjects, message: "Objects successfuly retrieved" });
    } catch (error) {
        console.log(error);
    }
}


