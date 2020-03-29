<template>
<div class="container">
  <img src="~/assets/SVG/_404.svg" class="logo" alt="">
  <h1>Page not found</h1>
  <nuxt-link to="/">
    <a-button>Go Back Home</a-button>
  </nuxt-link>
</div>
</template>

<script>
  export default {
    // you can set a custom layout for the error page

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

</style>
