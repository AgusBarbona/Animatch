<template>
  <div class="body">
    <MessageUser />
    <MenChat />
  </div>
</template>

<script>
import MessageUser from "./components/MessageUser.vue";
import MenChat from "./components/MenChat.vue";

export default {
    components: {
        MessageUser,
        MenChat,
},

};
</script>

<style>
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
    --RosaOpaco: #c9a6a663;
    --Gris: #26262664;
    --Perla:  #F6F4EF;
    --Negro: #302929;
    --RosaClaro: #fe7f7d39;
}


*{ margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
}
.body{
    max-width: 100%;
    display: flex;
    flex-direction: row;
    min-height: 100vh;
}



@media (max-width: 550px) {
    .msjUserText{
        font-size: 0.7rem;
    }
}

@media (max-width: 760px) {
    .chatUser {
        display: none;
    }

    .logSupport{
        display: inline-block;
    }

    .msjUserView{
        width:100%;
    }

    .msjsUser{
        width: 75%;
    }

    .msjUserTextLogo{
        max-width: 5vw;
        max-height: 3vw;
    }

    .msjUserImg{
        max-width: 13vw;
        max-height: 13vw;
    }

    

}

@media (min-width: 761px) and (max-width: 1020px){
    .msjUserTextLogo{
        max-width: 2.3vw;
        max-height: 2.3vw;
    }
}

</style>
