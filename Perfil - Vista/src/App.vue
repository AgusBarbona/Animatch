<template>
  <div id="app">
    <Header />
    <UserProfile />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import UserProfile from './components/UserProfile.vue';
//import ImageGallery from './components/ImageGallery.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    UserProfile,
    Footer
  },
};
</script>

<style scoped>
</style>
