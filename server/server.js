const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

//route paths
const serviceRoute = require('./routes/service')



//middlewares
app.use(bodyParser.json())
app.use(cors());



//routes
app.use('/service',serviceRoute)

const serverAndDatabse = async ()=>{
try{
    await mongoose.connect('mongodb+srv://rubiksalesandservice:rubik123@cluster0.ro7enho.mongodb.net/?retryWrites=true&w=majority')
    //server listening 
    app.listen(4000,()=>{
    console.log("server started running on port 4000")
})
}catch(e){
    console.log(e)
}
}

//server and database
serverAndDatabse();
