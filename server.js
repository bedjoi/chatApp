const dotenv = require("dotenv");
dotenv.config();

const  mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.2qyykqo.mongodb.net/?retryWrites=true&w=majority`,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose Is Connected");
  }
);
mongoose.connection.on("error", (err)=>{
    console.log("nongoose connection ERROR"+ err.message);
});
mongoose.connection.once("open", () => {
    console.log("MongoDB Connected!");
  });

// bring in the models

require("./models/User");
require("./models/Chatroom");
require("./models/Message");

const app= require('./app');

app.listen(8000, ()=>{
    console.log('the server start on port 8000')
})