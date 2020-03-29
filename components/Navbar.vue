<template>
  <a-layout-header class="header">
    <div class="action">
      <nuxt-link to="/about">
        <a-button type="link">
          <p>About</p>
        </a-button>
      </nuxt-link>
      <nuxt-link to="/">
        <div class="logo" />
      </nuxt-link>
      <a-dropdown v-if="$auth.loggedIn" placement="bottomCenter">
        <a-button type="link">
          <p>{{userName}}</p>
        </a-button>
        <a-menu slot="overlay">
          <a-menu-item @click="logout()">
            <a>Logout</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-button v-else type="link">
        <p>Login</p>
      </a-button>
    </div>
  </a-layout-header>
</template>

<script>
  export default {
    computed: {
      userName() {
        return this.$store.getters['user/getName']
      }
    },
    methods: {
      logout() {
        this.$router.push('/logout');
      }
    }
  }

</script>

<style scoped>
  .header {
    background-color: #E4E7EE;
    display: flex;
    flex-direction: row;
    z-index: 1;
    width: 100% !important;
    position: absolute !important;
    opacity: 0.8;

  }

  .action {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
