const mongoose = require('mongodb-mongoose');
const messageSchema = new mongoose.Schema({

    chatroom: {
        type: mongoose.schema.types.Object,
        required: ' chatroom is required',
        ref: "Chatroom"
    },
    user: {
        type: mongoose.schema.types.Object,
        required: ' user is required',
        ref: "User"
    },
    message: {
        type: 'string',
        required: 'message is required'
    }


});

module.exports = mongoose.model('Message',messageSchema);