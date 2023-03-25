 module.exports=(app,router)=>{
    const productsController=require('../controllers/products.controller.js');

    router.get('/',productsController.index);    //http://localhost:8080/api/products  GET
    router.post('/',productsController.create);   //http://localhost:8080/api/products  post
    router.put('/:id',productsController.update);   //http://localhost:8080/api/products/1  put
    router.delete('/:id',productsController.Delete);   //http://localhost:8080/api/products/1  delete
   //  router.get('/:id',productsController.findById);   //http://localhost:8080/api/products/1  post

    app.use('/api/products', router);
 }