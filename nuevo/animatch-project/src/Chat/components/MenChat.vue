<template>

<section class="chatUser">
        <header> 
            <div class="imgUserChat">
                <img class="iconoder" v-bind:src="Icono" alt="Foto de usuario 1">
            </div>
            <h2>Pepe Cat</h2>
        </header>
</section>
</template>
<script>
import IconoD from "./IMG/imgUser4.jpeg"
export default{
  name: "MenChat",
  data(){
    return {
      Icono: IconoD,
    };
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

.chatUser header h2 {
    font-family: 'Merienda', cursive;
    color: black;
    padding-bottom: 6px;
    font-size: 1.25rem;
    font-weight: bolder;
}




.chatUser{
    width: 65vw;
    background-color: var(--Perla);
    justify-content: space-between;
}
.imgUserChat{
    max-width: 5vw;
    max-height: 5vw;
    border-radius: 50%;
    overflow: hidden;
}

.chatUser header{
    height: 65px;
    background-color: var(--RosaClaro);
    padding: 2px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--RosaClaro);
    flex: 1;
}


.chatUser header h2{
    padding-left: 15px;
}

.iconoder{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>