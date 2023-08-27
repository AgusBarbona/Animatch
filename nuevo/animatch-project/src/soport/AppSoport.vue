<template>
    <div>
        <NavDesplegable />
        <formularioEnvio />
    </div>
</template>

<script>
import NavDesplegable from '../components/principal/NavDesplegable.vue';
import formularioEnvio from './components/formularioEnvio.vue';

export default {
    components: {
        NavDesplegable,
        formularioEnvio,
    }
}
</script>
