module.exports = app => {
    const newuser = require("../controles/controller.js");
  
    let router = require("express").Router();
  
    // Create a new 
    router.post("/registro", newuser.create);

    app.use('/api/newuser', router);
};
