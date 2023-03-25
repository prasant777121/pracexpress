const usersModel=require("../models/usersModel");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const registerUser=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        if(!name ||!email || !password){
            res.status(400);
            throw new Error("all fields are mandatory");
        }
      

        //hashed password
        const hasedPassword=await bcrypt.hash(password,10);
        console.log("hashed password: ",hasedPassword);
    

        
        const users=await usersModel.register(name,email,hasedPassword);
        res.send(users);
      
        
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}
const loginUser=async(req,res)=>{
    try {
        await res.json({message:"you are login"});
     
    } catch (error) {
        console.log(error);
    }

       
     
   
}
const currentUser=async(req,res)=>{
    try {
        await res.json({message:"current user"});
     
    } catch (error) {
        console.log(error);
    }
}
module.exports={registerUser,loginUser,currentUser}