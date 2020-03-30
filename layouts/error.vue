<template>
<div class="container">
  <div v-if="error.statusCode === 404" class="center">
    <img src="~/assets/SVG/_404.svg" class="logo" alt="">
    <h1>Page not found</h1>
    <nuxt-link to="/">
      <a-button>Go Back Home</a-button>
    </nuxt-link>
  </div>
  <div v-else class="center">
    <img src="~/assets/SVG/error.svg" class="logo" alt="">
    <h1>Ops something is broken</h1>
  </div>
</div>
</template>

<script>
  export default {
    props: ['error'],
    data() {
      return {};
    },
  }

</script>


<style scoped>
  .container {
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
  }

  .logo {
    width: 300px;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
