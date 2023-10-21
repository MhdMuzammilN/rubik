const mongoose = require('mongoose')
const {Schema} = mongoose;

const adminCredential = new Schema({

    username: {type:String,required:true},
    password:{type:String, required:true}

})

const AdminCredential = mongoose.model('AdminCredential',adminCredential)
module.exports = AdminCredential;