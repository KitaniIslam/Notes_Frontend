<template>
    <a-layout-content>
      <div class="hav-bg">  
          <user-info-card />
      </div>
      <div class="container">
        <a-divider>Notes</a-divider>
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
    this.$axios.get('/auth/user')
    .then(res => {
      this.$store.commit('user/setUser',res.data);
      
      this.$notification.open({
        type: 'success',
        message: `Welcome ${res.data.email}`,
        description: ''
      })
    })
    .catch(err => {
      const message = 'Something went wrong !';
      const description = `${err.message} Pleas try again or reload page.`;
      if(err.response.status === 401){
        this.$router.push('/logout');
        message= 'Session expired';
        description= 'Please Login !';
      }
      this.$notification.open({
        type: 'error',
        message: message,
        description : description
      })
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
    height: 80vh;
    background-image: url('../assets/pictures/background2.jpg');
    background-size: cover;
    background-position: center;
  }


</style>
