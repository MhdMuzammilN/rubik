const AdminCredential = require('../models/adminCredential')


const adminLogin = async (req,res)=>{
   
    const username = req.body.username;
    const password = req.body.password;
    
    console.log(req.body);
    if(!username || !password){
        return res.status(400).json({"error":"username and password needed"})
    }
    try{
    const loginCredentials = await AdminCredential.findOne({})
    //console.log(loginCredentials);
    if(loginCredentials.username == username && loginCredentials.password == password)
    {
        res.status(200).json({"admin":true})
    }
    else{
        res.status(400).json({"admin":false});
    }

    }
    catch(e){
        console.log(e)
    }
    
    // const data = new AdminCredential({
    //     "username":username,
    //     "password":password
    // })
    // const datasaves = await data.save();
    // res.status(200).json(datasaves);
    
}

module.exports = {adminLogin};