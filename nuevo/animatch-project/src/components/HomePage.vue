<template>
    <div>
    <AnimatchHeader />
    <BienvenidaText />
    <BotonesPrincipal />
    </div>
</template>

<script>
import AnimatchHeader from './principal/AnimatchHeader.vue'
import BienvenidaText from './principal/BienvenidaText.vue'
import BotonesPrincipal from './principal/BotonesPrincipal.vue'

export default {
components: {
    AnimatchHeader,
    BienvenidaText,
    BotonesPrincipal,
}
}
</script>
