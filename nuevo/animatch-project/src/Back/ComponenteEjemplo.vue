
<template>
  <div>
    <button @click="fetchData">datos Backend</button>
    <div v-if="responseData">
      <p>{{ responseData }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responseData: null
    };
  },
  methods: {
    fetchData() {
      this.fetchDataFromBackend(); // Llama al método para obtener los datos
    }
  }
};
</script>


<style scoped>

button {
        border-color: #FFB8AE;
        width: 150px;
        background-color:  #c82711;
        border-radius: 30px;
        color: #FFB8AE;
        font-size: 16px;
        padding: 8px 10px;
        margin: 10% 50% 0 50%;
        cursor: pointer;
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex ; 
      }
</style>









 