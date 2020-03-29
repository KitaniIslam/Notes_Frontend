<template>
  <a-card>
    <a-card-meta :title="toUperCase(simple.category.name)" :description="simple.note">
      <a-icon slot="avatar" :type="simple.category.name === 'bug'?'bug':'check'"
        :style="colorSelector(simple.category.name)" />
    </a-card-meta>
    <template class="ant-card-actions" slot="actions">
      <a-icon type="delete" key="delete" @click="showConfirm()" />
      <a-icon type="edit" key="edit" @click="showModal" />
    </template>
    <a-modal title="Edit Note" v-model="visible">
      <template slot="footer">
        <a-button key="back" @click="handleOk">Cancel</a-button>
        <a-button key="submit" type="primary" @click="handleOk">
          Submit
        </a-button>
      </template>
      <a-textarea v-model="newNote" />
    </a-modal>
    <a-modal title="Delete Note" v-model="deleteVisible">
      <template slot="footer">
        <a-button key="back" @click="handleOk">Cancel</a-button>
        <a-button type="danger" @click="deletePost">Delete</a-button>
      </template>
      <p>Are you sure you want to delete this Note ?</p>
    </a-modal>
  </a-card>
</template>

<script>
  export default {
    props: {
      simple: {
        type: Object,
        default: {
          note: '',
          category: {
            name: ''
          }
        }
      }
    },
    data() {
      return {
        visible: false,
        deleteVisible: false,
        newNote: this.simple.note
      }
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      handleOk(e) {
        console.log(e);
        this.visible = false;
      },
      colorSelector(n) {
        return {
          'color': n === 'bug' ? 'red' : 'green',
          'font-size': '30px'
        }
      },
      toUperCase(t) {
        return t.toUpperCase();
      },
      deletePost(){
        this.$axios.delete('/api/note',{
          params : {
            id: this.simple.id
          }
        })
        .then(res => {
          this.deleteVisible= false;
          this.$notification.open({
            type: 'success',
            message: 'Note added successfully !'
          })
        })
        .catch(err =>{

          this.$notification.open({
            type: 'error',
            message: 'Something went wrong ! please try again'
          })
        })
      },
      showConfirm() {
        this.deleteVisible = true;
      }
    }
  }

</script>
