<template>
  <a-list :grid="{ md: 3 ,gutter: 16}"  :dataSource="notes">
    <a-list-item slot="renderItem" slot-scope="item,index">
      <note-card :simple="item"/>
    </a-list-item>
  </a-list>
</template>

<script>
import NoteCard from '~/components/NoteCard.vue'
export default {
    components : {
        NoteCard
    },
    computed: {
      notes(){ return this.$store.getters['user/getNotes']}   
    }
}
</script>