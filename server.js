requires("dotenv").config();

const { default: mongoose } = require('mongoose');

mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.connection.on("error", (err)=>{
    console.log("nongoose connection ERROR"+ err.message);
});
mongoseErrors.connection.once('open', ()=>{
    console.log("mongodb connected successfully")
});

// bring in the models

require("./models/User");
require("./models/Chatroom");
require("./models/Message");

const app= require('./app');
const { mongoseErrors } = require('./handlers/errorHandlers');

app.listen(8000, ()=>{
    console.log('the server start on port 8000')
})