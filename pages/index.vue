<template>
<a-layout id="components-layout-demo-top-side">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme='dark'
        mode="horizontal"
        :defaultSelectedKeys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">Home</a-menu-item>
        <a-menu-item key="2">About</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div>
        <h1>{{userEmail}}</h1>
      </div>
    </a-layout-content>
</a-layout>
</template>

<script>
export default {
  middleware: 'auth',
  data(){
    return {
      resp: null,
      userEmail: "",
      userNotes: []
    }
  },
  methods:{
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
    height: 100vh;
    display: flex;
    flex: 1;
    width: 100vw;
  }

</style>
