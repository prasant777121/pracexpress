 module.exports=(app,router)=>{
    const userController=require('../controllers/users.controller.js');

    router.get('/',userController.index);

    app.use('/api/users', router);
 }