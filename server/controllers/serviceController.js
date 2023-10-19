
const sendTheUserData = (req,res) =>{
console.log("sendTheData")
console.log("hi")
res.status(200).json({data:"data is here"})

}

module.exports = {sendTheUserData};