<template>
    <button type="button" class="btn-profile-edit">
        <img :src="imagen.src" :alt="imagen.alt">
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        imagen: Object,
    },
});
</script>

