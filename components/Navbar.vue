<template>
  <a-layout-header class="header">
    <div class="action">
      <nuxt-link to="/">
        <a-button type="link"><p>Home</p></a-button>
      </nuxt-link>
      <nuxt-link to="/about">
        <a-button type="link" disabled><p>About</p></a-button>
      </nuxt-link>
      <div class="logo" />
      <a-button type="link" disabled=""><p>slmkitani</p></a-button>
      <nuxt-link to="">
      <a-button type="link"><p @click="logout()">Logout</p></a-button>

      </nuxt-link>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$auth.logout();
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
  .header {
    background-color: #CBC7C4;
    display: flex;
    flex-direction: row;
  }

  .action {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  p {
    margin: 0;
    color: #242425;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    margin-left: 20px;
    background-image: url('../assets/pictures/my_logo.jpg');
    background-size: cover;
    background-position: center;
  }
</style>