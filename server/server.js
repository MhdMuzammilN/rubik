const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()


app.use(bodyParser.json())
app.use(cors());
app.listen(4000,()=>{
    console.log("server started running on port 4000")
})