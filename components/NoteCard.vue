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
      showConfirm() {
        this.$confirm({
          title: 'Do you want to delete these Note?',
          onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              })
              .catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      }
    }
  }

</script>
