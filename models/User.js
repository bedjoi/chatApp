const mongoose = require('mongodb-mongoose');
const userSchema = new mongoose.Schema({

    name: {
        type: 'string',
        required: 'name is required'
    },
    email:{
        type: 'string',
        required: 'email is required'
    },
    password:{
        type: 'string',
        required: 'password is required'
    }


});

module.exports = mongoose.model('User',userSchema);