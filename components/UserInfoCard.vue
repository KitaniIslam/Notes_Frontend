<template>
  <div class="container">
    <div class="left-container">
      <h1>You think, and we manage</h1>
      <new-note />
    </div>
    <div class="right-container">
      <a-radio-group v-model="filter">
        <a-list :grid="{ md: 2 ,gutter: 16}" :dataSource="cards">
          <a-list-item slot="renderItem" slot-scope="item,index">
            <a-card :class="item.value" size='small' hoverable @click="onChange(item.value)">
              <a-radio :value="item.value"></a-radio>
              <a-statistic :title="item.value" :value="counter[index]">
                <template v-slot:suffix>
                  <span> / {{bugs+fixs}}</span>
                </template>
              </a-statistic>
            </a-card>
          </a-list-item>
        </a-list>
      </a-radio-group>
    </div>
  </div>
</template>

<script>
import NewNote from '~/components/NewNote.vue'
  export default {
    components:{
      NewNote
    },
    computed: {
      bugs(){return this.$store.getters['user/getBugCount']},
      fixs(){return this.$store.getters['user/getFixCount']},
      filter(){return this.$store.getters['user/getCurrentFilter']},
      counter(){return [this.bugs+this.fixs,this.fixs,this.bugs]}
    },
    data() {
      return {
        cards: [{
            value: 'all'
          },
          {
            value: 'fix'
          },
          {
            value: 'bug'
          }
        ]
      }
    },
    methods: {
      onChange(e){
        this.filter = e;
        this.$store.commit('user/apllyFilter',{filter: e})
      }
    }
  }

</script>

<style scoped>
  .container {
    display: flex !important;
    flex-direction: row !important;
    flex: 1;
  }

  .left-container {
    display: flex !important;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 64px 10px 10px;
  }

  .right-container {
    display: flex !important;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 64px;
  }

  h3 {
      justify-self: flex-end;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .fix {
    background-color: #2ecc71;
  }

  .bug {
    background-color: #e74c3c;
    }

  .fix .ant-statistic {
      color : white;
  }

  .bug .ant-statistic {
      color : white;
  }
</style>
