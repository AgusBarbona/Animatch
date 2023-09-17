const sql = require("./db.js");

const usuarios = function(usuarios) {
    this.name = usuarios.name;
    this.lastname = usuarios.lastname;
    this.email = usuarios.email;
    this.password = usuarios.password;
  };
  
  usuarios.create = (newUsuario, result) => {
    sql.query("INSERT INTO newuser SET ?", newUsuario, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created usuarios: ", { id: res.insertId, ...newUsuario });
      result(null, { id: res.insertId, ...newUsuario });
    });
  };
  module.exports = usuarios;