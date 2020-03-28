<template>
  <a-list :grid="{ gutter: 16, column: 2 }" :dataSource="notes">
    <a-list-item slot="renderItem" slot-scope="item,index">
      <note-card :simple="item"/>
    </a-list-item>
  </a-list>
</template>

<script>
import NoteCard from '~/components/NoteCard.vue'
export default {
    props: {
        notes: {
            type: Array,
            default: () => []
        }
    },
    components : {
        NoteCard
    }
}
</script>