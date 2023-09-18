<template>
  <form @submit.prevent="registrarUsuario">
   <div>
          <input type="text" id="name" name="name" placeholder="Nombre" >
  
          <input type="text" id="lastname" name="lastname" placeholder="Apellido">
  
          <input type="email" id="email" name="email" placeholder="Email">
  
          <input type="password" id="password" name="password" placeholder="Contraseña">
      
          <button type="submit">Crear cuenta</button>
          <router-link to="/login" class="link">o iniciar sesion</router-link>

   </div> 
  </form>
  </template>

  
<script>
export default {
  data() {
    return {
      name: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registrarUsuario() {
      try {
        const respuesta = await fetch("http://localhost:8080/api/newuser/registro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
          }),
        });

        if (respuesta.ok) {
          console.log("Registro exitoso.");
          this.$router.push("micuenta"); // Redirige al usuario al perfil
        } else {
          console.error("Error en el registro.");
        }
      } catch (error) {
        console.error("Error en la solicitud de registro:", error);
      }
    },
  },
};
</script>

   <style scoped>  
   form {
      background-color: rgba(173, 170, 165, 0.589);
      border-radius: 15px;
      padding: 35px;
      margin: 0 auto;
      width: 200px;
      position: relative;
      align-items: center;
      justify-content: center;
      top: auto;
      margin-top: 10%;
     }
     
     input {
      border: 0;
      border-radius: 5px;
      width: 100%;
      padding: 10px 0;
      font-size: 1.2em;
      margin: 10px 0;
    }
    ::placeholder {
      font-size: medium;
      color: #FFB8AE;
    }
    button {
        border-color: #c82711 !important;
        width: 150px;
        background-color: #FFB8AE;
        border-radius: 30px;
        color: #c82711;
        font-size: 16px;
        padding: 8px 10px;
        margin: 10% 45% 0 15%;
        cursor: pointer;
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex ; 
      }
      .link {
          color: rgb(3, 3, 3);
          font-size: 15px;
          padding: 10px 10px;
          text-align: center;  
          align-items: center;
          justify-content: center;
          display: flex;
        }
        /*  @media (min-width: 768px) {
          button {
            width: 20%;
            position: relative;
            display: flex;
            align-items: center;
          justify-content: center;
          }
        }
      @media (min-width: 1024px) {
          button {
          width: 40%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          }
        }*/
        </style> 
    