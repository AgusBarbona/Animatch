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

<style>

.btn-profile-edit{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    bottom: -5px;;
    border: 0;
    background-color: #fff;
    box-shadow: 0 0 12px rgba(0, 0, 0, .2);
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
}

.btn-profile-edit img{
    width: 25px;
    height: 20px;
    object-fit: contain;
}

</style>