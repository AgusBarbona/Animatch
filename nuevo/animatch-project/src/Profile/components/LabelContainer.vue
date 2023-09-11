<script setup>
    const listaDeTextos = ['Apasionado', 'Castrado', 'Desparasitado', 'Mimoso', 'Amigable'];
    const estilosPorIndice = (index) => {
    const estilos = [
        { backgroundColor: '#FF5454'},
        { backgroundColor: '#F57D26'},
        { backgroundColor: '#26F52E'},
        { backgroundColor: '#26C3F5'},
        { backgroundColor: '#9A26F5'},
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

