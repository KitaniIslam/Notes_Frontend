<template>
    <a-row class="container">
      <!-- <a-col span="12" class="right-container"> -->
        <!-- <h1 class="yellow-txt">WE SURVIVE TOGETHER</h1> -->
        <!-- <p class="orang34495e-txt">Community that fight corona together for a better tomorrow.</p> -->
      <!-- </a-col> -->
      <a-col span="24" class="left-container">
        <login />
      </a-col>
    </a-row>
</template>

<script>
import Login from '~/components/Login.vue'

export default {
  components: {
    Login
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
  }

  .left-container {
    
  }

  .right-container {
    background-image: url('../static/images/mask2.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .yellow-txt {
    color: #34495e;
  }

  .orang-txt {
    color: #34495e;
  }

  h1 {
    font-size: 36px;
    margin: 0;
  }

</style>
