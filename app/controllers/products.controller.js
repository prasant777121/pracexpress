
const productsModel = require("../models/products.models.js");
const index=async(req,res)=>{
    try {
   
        const products = await productsModel.findAll();
        res.send(products);
     
    } catch (error) {
        console.log(error);
    }
}
const create=async(req,res)=>{
    try{
        const{name,brand,price}=req.body;
        const products=await productsModel.create(name,brand,price);
        res.send(products);
        res.status(200).send("product successfully created");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

const update=async(req,res)=>{
    const{id}=req.params;
    try{
        const{name,brand,price}=req.body;
        const products=await productsModel.update(id,name,brand,price);
        res.send(products);
        res.status(200).send("product updated");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}
const Delete=async(req,res)=>{
    const{id}=req.params;
    try{
        await productsModel.Delete(id);
       
        res.send("deleted");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}
const findById=async(req,res)=>{
    const{id}=req.params;
    try{
        const products=await productsModel.findById(id);
        res.send(products);
        res.status(200).send("users");
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}
module.exports={index
,create,update,findById,Delete}