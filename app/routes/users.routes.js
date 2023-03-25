const userController=require('../controllers/userscontroller')
module.exports=(app,router)=>{


        router.post('/register',userController.registerUser);   // http://localhost:8080/api/users/register
        router.get('/login',userController.loginUser);         // http://localhost:8080/api/users/login
        router.get('/current',userController.currentUser);      // http://localhost:8080/api/users/current
  

    app.use('/api/users', router);
}