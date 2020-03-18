<template>
  <a-card title="Login" :bordered="true" style="width: 300px">
    <a-input-group>

      <a-input placeholder="User name" v-model="userName" ref="userNameInput">
        <a-icon slot="prefix" type="user" />
        <a-tooltip slot="suffix" title="You can use your phone number">
          <a-icon type="info-circle" />
        </a-tooltip>
      </a-input>
      <a-input-password class="password" placeholder="Password" v-model="password">
        <a-icon slot="prefix" type="lock" />
      </a-input-password>
    </a-input-group>
    <a-button class="login-button" block @click="login()">Login</a-button>
  </a-card>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        userName: "",
        password: ""
      }
    },
    methods: {
      login() {
        this.$notification.open({
            message: 'Login',
            type:"success"
          })
      }
    }
  }

</script>

<style scoped>
  .login-button {
    background-color: #34495e;
    color: white;
  }

  .password {
    margin-top: 20px;
    margin-bottom: 20px;
  }

</style>
