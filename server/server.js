const express = require("express")
const multer = require("multer")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


//route paths
const serviceRoute = require('./routes/service')
const adminRoute = require('./routes/admin')

//middlewares
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//filestorage using multer
const storage = multer.memoryStorage();
const upload = multer({storage:storage});


//routes
app.use('/service',upload.single('imageFile'),serviceRoute);
app.use('/admin',adminRoute);



const serverAndDatabse = async ()=>{
try{
    await mongoose.connect(process.env.MONGODB_URI)
    //server listening 
    app.listen(process.env.PORT,()=>{
    console.log("server started running on port 4000")
})
}catch(e){
    console.log(e)
}
}

//server and database
serverAndDatabse();
