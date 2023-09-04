<template>
    <main>
        <section class="userDescription">
            <div class="titleWithIcon Line">
                <div class="info-Distance">
                    <img class="icons" src="../assets/img/IconodeUbicacion.png" alt="Location Icon">
                    <p>700km de distancia</p>
                </div>
                <BtnEdit text = "Editar" :imagen='imagenSeleccionada' class="edit-Data"></BtnEdit>
            </div>
            <h2>Sobre mi...</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio sed vero molestiae fugit, 
                vitae consectetur perspiciatis nemo maiores obcaecati possimus quas. Culpa sequi inventore 
                doloribus a mollitia assumenda ullam quis!</p>
        </section>
        <ImageGallery></ImageGallery>
    </main>
</template>

<script>
    import ImageGallery from './ImageGallery.vue';
    import IconEditt from '../assets/img/editor-de-documentos-negro.png';
    import BtnEdit from './BtnEdit.vue';

    export default{
        name: 'UserProfile',
        components: {
            ImageGallery,
            BtnEdit,
        },
        data() {
            return {
                imagenSeleccionada: {
                        src: IconEditt ,
                        alt: 'Icono de Editar',
                    },
            };
        },
    };
</script>

<style scoped>
.userDescription{
    width: 45%;
    padding: 30px 30px;
}

.icons{
    height: 40px;
    padding-right: 25px;
}

.titleWithIcon{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    font-size: 1.1rem;
    padding-bottom: 20px;
    
}

.Line{
    border-bottom: 2px solid var(--RojoOscuro);
}

.userDescription{
    background-color: var(--SalmonClaro);
}

.userDescription h2{
    padding-top: 30px;
    padding-bottom: 20px;
    font-size: 1.1rem;
    font-weight: bold;
}

    .titleWithIcon{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        align-items: center;
        padding-bottom: 20px;
    
    }
    .info-Distance{
        display: flex;
        flex-direction: row;
        justify-items: start;
        align-items: center;
        font-size: 1.1rem;
    }

    @media (max-width: 720px){
    .userDescription{
        width: 85%;
    }
}

</style>