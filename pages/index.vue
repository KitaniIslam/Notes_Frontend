<template>
    <a-layout-content>
      <div class="hav-bg">  
          <user-info-card />
      </div>
      <div class="container">
        <list class="list"/>
      </div>
    </a-layout-content>
</template>

<script>
import List from '~/components/List.vue';
import UserInfoCard from '~/components/UserInfoCard.vue';
export default {
  middleware: 'auth',
  components: {
    List,
    UserInfoCard
  },
  mounted(){
    // fetch user Data :
    this.$axios.get('/auth/user')
    .then(res => {
      this.$store.commit('user/setUser',res.data);
      
      this.$notification.open({
        type: 'success',
        message: `Welcome back ${res.data.email}`,
        description: ''
      })
    })
    .catch(err => {
      this.$notification.open({
        type: 'error',
        message: 'Sorry something went wrong !',
        description : err.message
      })
      this.$auth.logout();
    })
  }
}
</script>

<style scoped>
  .container {
    width: 70vw;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .hav-bg {
    display: flex;
    align-items: center;
    height: 70vh;
    background-image: url('../assets/pictures/background2.jpg');
    background-size: cover;
    background-position: center;
  }

  .list {
    margin-top: 40px;
  }

</style>
