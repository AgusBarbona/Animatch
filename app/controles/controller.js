const usuarios = require("../modelo.js");

// crear y guardar un nuevo usuario
 exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
          message: "El contenido esta vacio!"
        });
      }
    
      // Crear usuarios 
      const newUsuario = new usuarios({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password 
      });
    
      // guardar usuarios en database
      usuarios.create(newUsuario, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Ocurrio un error al crear el usuario."
          });
        else res.send(data);
      });
};
