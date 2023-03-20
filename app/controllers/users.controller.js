
const userModel = require("../models/users.models.js");
const index=async(req,res)=>{
    try {
   
        const users = await userModel.findAll();
        res.send(users);
     
    } catch (error) {
        console.log(error);
    }
}
module.exports={index}