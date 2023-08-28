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
        <h2 class= "label" v-for="(texto, index) in listaDeTextos" :key="index" :style="estilosPorIndice(index)">{{ texto }}</h2>
    </div>
    
</template>

<style>
    .LabelsProfile{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content:center;
        padding-top: 25px;
        
    }

    .label {
        padding: 7px 15px;
        margin-left: 13px;
        border-radius: 20px;
        border: 1px solid transparent;
        color: var(--Blanco);
        font-size: 0.8rem;
        font-weight: 500;
    }
</style>