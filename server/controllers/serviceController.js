const mongoose = require('mongoose')
const ServiceDetails = require('../models/serviceModel')



const sendTheUserData = async (req,res) =>{
    const {customer,phone,email,
    address,brand,product,
    date,problem} = req.body;
    const imageFile = req.file;

    if(!req.body || !req.file){
        return res.status(400).json({"error":"file not uploaded"})
    }
   
    // console.log(dataRequest)
    
    const data = new ServiceDetails({
        customer,phone,email,
        address,brand,product,
        date,problem,
        imageFile:{
            data: imageFile.buffer,
            contentType: imageFile.mimetype,
        }
    });
    
    const saveData = await data.save();
    if(saveData){
        return  res.status(200).json({saveData});
    }
   
}

module.exports = {sendTheUserData};