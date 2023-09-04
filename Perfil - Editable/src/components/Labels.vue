<script setup>
    const listaDeTextos = ['Apasionado', 'Castrado', 'Desparasitado', 'Mimoso', 'Amigable'];
    const estilosPorIndice = (index) => {
    const estilos = [
        { backgroundColor: 'var(--Rojo)'},
        { backgroundColor: 'var(--Naranja)'},
        { backgroundColor: 'var(--Verde)'},
        { backgroundColor: 'var(--Celeste)'},
        { backgroundColor: 'var(--Violeta)'}
    ];

    return estilos[index];
};
</script>

<template>
    <div class="LabelsProfile">
        
        <button class="label" v-for="(texto, index) in listaDeTextos" :key="index" :style="estilosPorIndice(index)">
            <img class="IconX" src="../assets/img/IconodeX.png" alt="IconoX">{{ texto }}
        </button>
    </div>
    
</template>

<style>

    .LabelsProfile {
    display: flex;
    flex-direction: row;
    justify-items: end;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 0.8rem;
    margin-bottom: 20px;
    }

    .label {
        padding: 7px 15px;
        margin: 4px;
        border-radius: 20px;
        border: 1px solid transparent;
        color: var(--Blanco);
        font-size: 0.8rem;
        font-weight: 500;
    }

    .IconX{
        width: 9px;
        height: 9px;
        margin-right: 10px;
        border-radius: 100px;
        opacity: 0.5;
}

    .IconX:hover{
        background-color: rgba(0, 0, 0, 0.259);
        opacity: 0.7;
}
</style>