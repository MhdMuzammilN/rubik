const mongoose = require('mongoose')
const {Schema} = mongoose;

const serviceSchema = new Schema({
    customer:String,
    email:String,
    address:String,
    Phone:String,
    brand:String,
    product:String,
    date:String,
    problem:String,
    imageFile:
    {
        data: Buffer,
        contentType: String
    }
})

const ServiceDetails = mongoose.model('ServiceDetails',serviceSchema);
module.exports = ServiceDetails;