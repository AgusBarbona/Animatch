<script setup>
import { ref } from 'vue'
    tagsName({
        txt: String
    })
</script>

<template>
    <h2 class="label">{{ txt }}</h2>
</template>

<style>
    .label {
        padding: 7px 15px;
        margin-left: 13px;
        border-radius: 20px;
        border: 1px solid transparent;
    }
</style>