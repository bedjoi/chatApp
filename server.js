requires("dotenv").config();

const { default: mongoose } = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.connection.on("error", (err)=>{
    console.log("nongoose connection ERROR"+ err.message);
});

const app= require('./app');

app.listen(8000, ()=>{
    console.log('the server start on port 8000')
})