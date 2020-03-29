<template>
  <div>
    <a-button type="primary" @click="showModal" icon="edit">Start Writing Now</a-button>
    <a-modal title="Edit Note" v-model="visible">
      <template slot="footer">
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button key="submit" type="primary" @click="handleOk">
          Submit
        </a-button>
      </template>
      <a-form-item label="Category">
        <a-select :defaultValue="category" style="width: 120px" @change="handleChange">
          <a-select-option value="fix">Fix</a-select-option>
          <a-select-option value="bug">Bug</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Description">
        <a-textarea v-model="newNote" clearable />
      </a-form-item>
    </a-modal>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: this.$form.createForm(this),
        visible: false,
        category: 'fix',
        newNote:''
      };
    },
    methods: {
      showModal() {
        this.visible = true;
      },
      noteIsNotValidate(str){
        return (!str || str.length === 0 || /^\s*$/.test(str))
      },
      handleOk() {
        this.visible = false;
        const load = this.$message;

        if(this.noteIsNotValidate(this.newNote)){
          this.$notification.open({
            type: 'error',
            message: `Submition not complete`,
            description: 'Note is required you cant submit an empty note'
          })
        }else {
          load.loading('Action in progress..',1);
          this.$axios.post('/api/note',{
            category: this.category,
              note: (this.newNote).replace(/^\s+/g, '')
          })
          .then(res => {
            this.$notification.open({
              type: 'success',
              message: `Submition complete`,
              description: 'Note added successfully'
            })
            this.newNote= '';
          })
          .catch(err => {
            this.$notification.open({
              type: 'error',
              message: `Something went wrong`,
              description: `${err.message} please try again,still not working Reload the page !`
            })
          })
        }
      },
      handleCancel() {
        this.visible = false;
      },
      handleChange(e){
        this.category= e;
      }
    },
  };

</script>
