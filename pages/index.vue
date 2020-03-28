<template>
    <a-layout-content>
      <div class="container">
        <h3>{{userEmail}}</h3>
        <a-list :grid="{ gutter: 16, column: 2 }" :dataSource="userNotes">
          <a-list-item slot="renderItem" slot-scope="item, index" >
          <a-card >
            <a-card-meta title="Note" :description="item.note">
              <a-icon
                slot="avatar"
                :type="item.category.name === 'bug'?'bug':'check'"
                :style="colorSelector(item.category.name)"
              />
            </a-card-meta>
              <template class="ant-card-actions" slot="actions">
                <a-icon type="delete" key="setting" />
                <a-icon type="edit" key="edit" />
              </template>
          </a-card>
          </a-list-item>
        </a-list>
      </div>
    </a-layout-content>
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
    colorSelector(n){
      const customStyle ={
        'color': n === 'bug'?'red':'green',
        'font-size': '30px' 
      }
      
      return customStyle 
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
