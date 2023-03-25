const sql = require("../config/db.config.js");

const findAll = () => {
    return new Promise((resolve, reject) => {
        sql.query('SELECT * FROM products', (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
}
const create=(name,brand,price)=>{
    return new Promise((resolve,reject)=>{
        sql.query('INSERT INTO products set ?',{name,brand,price},(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
const update=(id,name,brand,price)=>{
    return new Promise((resolve,reject)=>{
        sql.query('UPDATE products set name=? ,brand=?,price=? WHERE id=?',[name,brand,price,id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}
const Delete=(id)=>{
    return new Promise((resolve,reject)=>{
        sql.query('DELETE from products WHERE id=?',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}
// const findById = (id) => {
//     return new Promise((resolve, reject) => {
//         sql.query('SELECT * FROM users WHERE id = ?', id, (err, results) => {
//             if(err) {
//                 return reject(err);
//             }
//             if(results.length === 0 ) {
//                 return reject('product Not Found');
//             }
//             return resolve(results[0]);
//         });
//     });
// }
module.exports={findAll,create,update,Delete}