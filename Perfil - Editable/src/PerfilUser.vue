<template>
  <div id="app">
    <Header />
    <UserProfile />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import UserProfile from './components/UserProfile.vue';

export default {
  components: {
    Header,
    UserProfile
  },
};
</script>

<style scoped>
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



main{
    height: 70%;
    padding: 30px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

@media (max-width: 720px){
    .profileBackground{
        height: 34rem;
    }

    main{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 25px 20px;
    }

    .userDescription, .gallery{
        width: 85%;
    }

    .gallery{
        margin-top: 20px;
    }

    .userPhoto{
        width: 40vw;
        height: 30vw;
        overflow: hidden;
        padding: 10px;
    }

}

</style>
