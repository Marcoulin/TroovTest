const User = require("../../models/users"); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.createUsers = async (user) => User.create(user); 

exports.getByEmailAndPassword = async (email, password) => {
    const user = await User.findOne({email}); 
    return bcrypt.compareSync(password, user.password) ? { secret: jwt.sign({
        id: user._id,
        name: user.name,
        email: user.email
    }, process.env.SECRET) } : { secret: null }
}