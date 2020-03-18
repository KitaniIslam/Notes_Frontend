<template>
  <a-card :title="buttonTxt" :bordered="true" style="width: 300px" hoverable>
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
      <a-input-password v-if="!haveAccount" class="password" placeholder="Repeate Password" v-model="password">
        <a-icon slot="prefix" type="lock" />
      </a-input-password>
    </a-input-group>

    <a-button class="login-button" block @click="login()">{{buttonTxt}}</a-button>
    <div class="btn-action">
      <a-button type="link" @click="register()">{{btnAction}}</a-button>
    </div>
  </a-card>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        haveAccount: true,
        userName: "",
        password: "",
        confermedPassword : "",
        buttonTxt : "Login",
        btnAction: "Register",
        value: 'a',
      }
    },
    methods: {
      login() {
        this.$notification.open({
            message: `${this.buttonTxt}`,
            type:"success"
          })
      },
      register(){
        
        if(this.haveAccount){
          this.haveAccount = false;
          this.buttonTxt = "Register";
          this.btnAction = "Login"
        } else {
          this.haveAccount = true;
          this.buttonTxt = "Login";
          this.btnAction = "Register"
        }
      }
    }
  }

</script>

<style scoped>
  .login-button {
    background-color: #34495e;
    color: white;
    margin-top: 20px;
  }

  .password {
    margin-top: 20px;
    /* margin-bottom: 20px; */
  }

  .btn-action {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 5px;
    color: #34495e;
  }

</style>
