<template>
    <a-layout-content>
      <div class="hav-bg">
        <div class="container">
          <user-info-card :user="userEmail" />
        </div>  
      </div>
      <div class="container">
        <list :notes="userNotes" class="list"/>
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
  data(){
    return {
      resp: null,
      userEmail: "",
      userNotes: []
    }
  },
  mounted(){
    // fetch user Data :
    this.$axios.get('/auth/user')
    .then(res => {
      this.userEmail = res.data.email;
      this.userNotes = res.data.notes;

      this.$notification.open({
        type: 'success',
        message: `Welcome back ${this.userEmail}`,
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
    height: 60vh;
    background-image: url('../assets/pictures/background.jpg');
    background-size: cover;
    background-position: center;
  }

  .list {
    margin-top: 40px;
  }

</style>
