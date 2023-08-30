<template>
    <header class="HeaderMsjUserView">
            <h1>Chats</h1>
            <img class="logSupport" v-bind:src="logoUrl" alt="Icono de ayuda">
    </header>
</template>

<script>
import IconHelp from "./img/Help_icon-icons.com_55891.png"

export default{
        name: 'HeaderMsj',
        data(){
            return {
                logoUrl: IconHelp
            };
        },
    };
</script>

<style scoped>

.HeaderMsjUserView {
    display: flex;
    background: linear-gradient(0deg, #ff6c6c, #facec9);
    height: 65px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2px 38px;
    border-bottom: 1px solid #ff5c6c;
}

.HeaderMsjUserView h1{
    color: white;
    font-size: 1.6rem;
    font-weight: bolder;
}

.HeaderMsjUserView img{
    width: 45px;
    filter:opacity(0.7);
}

.logSupport{
    display: none;
}

</style>