<template>
    <a-layout-content>
      <div class="container">
        <h3>{{userEmail}}</h3>
        <list :notes="userNotes"/>
      </div>
    </a-layout-content>
</template>

<script>
import List from '~/components/List.vue'
export default {
  middleware: 'auth',
  components: {
    List
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

<style>
  .container {
    width: 70vw;
    margin: auto;
    height: 100%;
  }

</style>
