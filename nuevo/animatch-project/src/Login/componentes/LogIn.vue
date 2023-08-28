<template>
    <form action="">
       <div>
        <input type="email" id="email" name="email" placeholder="Email">
  
          <input type="password" id="psw" name="psw" placeholder="Contraseña">
      
        <p>¿Olvidaste tu contraseña?</p>

        <button type="submit">iniciar sesion</button>
        <router-link to="/registro" class="link">o Crear cuenta </router-link>
      </div>  
    </form>
    
   </template>
  
   <style scoped>

   form {
      background-color: rgba(151, 145, 145, 0.514);
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
      margin: 15px 0;
    }
       p{
        color: blue;
        font-size: 10px;
      }
      
      ::placeholder {
      font-size: medium;
      color: #FFB8AE;
    }
    button {
        border-color:  #FFB8AE!important;
        width: 150px;
        background-color:  #c82711;
        border-radius: 30px;
        color: #FFB8AE;
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
          align-items: center;
          justify-content: center;
          display: flex;
          
        }
       /*@media (min-width: 768px) {
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
          width: 15%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          }
        }*/
   </style>