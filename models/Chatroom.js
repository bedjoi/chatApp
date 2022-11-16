const mongoose = require('mongodb-mongoose');
const chatroomSchema = new mongoose.Schema({

    name: {
        type: 'string',
        required: 'name is required'
    }


});

module.exports = mongoose.model('Chatroom',chatroomSchema);