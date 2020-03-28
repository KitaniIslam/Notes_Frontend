<template>
  <a-card>
    <a-card-meta :title="toUperCase(simple.category.name)" :description="simple.note">
      <a-icon slot="avatar"
        :type="simple.category.name === 'bug'?'bug':'check'"
        :style="colorSelector(simple.category.name)" />
    </a-card-meta>
    <template class="ant-card-actions" slot="actions">
      <a-icon type="delete" key="setting" />
      <a-icon type="edit" key="edit" />
    </template>
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
    methods: {
      colorSelector(n) {
        return {
          'color': n === 'bug' ? 'red' : 'green',
          'font-size': '30px'
        }
      },
      toUperCase(t){
          return t.toUpperCase();
      }
    }
  }

</script>
