<template>
  <div>
    <Header />
    <UserProfile />
  </div>
</template>

<script>
import Header from './components/HeaderP.vue';
import UserProfile from './components/UserProfileC.vue';

export default {
  components: {
    Header,
    UserProfile
  },
};
</script>

<style>
/*IMPORTACION DE FUENTES*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

/*Estilo para toda la pagina*/
:root{
    --Blanco: #FFFFFF;
    --SalmonClaro: #FFF9F8;
    --SalmonMedio: #FFDDD9;
    --RojoOscuro: #C82711;
    --Rojo:  #FF5454;
    --Naranja: #F57D26;
    --Verde: #26F52E;
    --Celeste: #26C3F5;
    --Violeta: #9A26F5;
    --Azul: #0075CA;
}

*{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}


body{
    max-width: 100%;
}

header{
    height: 20%;
}

nav{
    height: 30%;
    padding: 15px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

main{
    height: 70%;
    padding: 30px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

footer{
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 25px;
}

</style>
