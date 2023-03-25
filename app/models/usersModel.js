const sql = require("../config/db.config.js");

const register=(name,email,password)=>{
    return new Promise((resolve,reject)=>{
        sql.query('INSERT INTO users set ?',{name,email,password},(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
module.exports={register}