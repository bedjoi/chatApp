const mongoose = require('mongoose');
const User = mongoose.model("User");
const sha256 = require('sha256');
const jwt = require('jwt');

exports.register = async (req, res) =>{

    const { name,email,password } = req.body;

    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@live.com]$/;

    if (!emailRegex.test(email))  throw "This email is not a valid email";
    if (password.length < 6) throw "Password must be at least 6 characters";

    const user = new ({
        name,
        email,
        password: sha256(password + process.env.SALT ),
    });

    await user.save();
    res.json({
        message: "User ["+ name +"] registered successfully"
    })
    
};


 

exports.login = async (req, res) =>{
    const { email, password } = req.body;
    const user = await User.findOne({
        email,
        password: sha256(password + process.env.SALT),
    });
    if (!user) throw "Email and password did not match";
    const token =  jwt.sign({id: user.id},process.SECRET);

    
};