<template>
  <div class="container">
    <div class="left-container"></div>
    <div class="right-container">
      <a-radio-group v-model="filter">
        <a-list :grid="{ md: 2 ,gutter: 16}" :dataSource="cards">
          <a-list-item slot="renderItem" slot-scope="item,index">
            <a-card :class="item.value" size='small' hoverable @click="filter=item.value">
              <a-radio :value="item.value"></a-radio>
              <a-statistic :title="item.value" :value="93">
                <template v-slot:suffix>
                  <span> / 100</span>
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
  export default {
    props: {
      user: {
        type: String,
        default: {
          user: ''
        }
      }
    },
    data() {
      return {
        cards: [{
            value: 'All'
          },
          {
            value: 'Fix'
          },
          {
            value: 'Bug'
          }
        ],
        filter: 'All'
      }
    },
    methods: {}
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
    align-items: center;
    justify-content: center;
  }

  .right-container {
    display: flex !important;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }

  h3 {
      justify-self: flex-end;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .Fix {
    background-color: #2ecc71;
  }

  .Bug {
    background-color: #e74c3c;
    }

  .Fix .ant-statistic {
      color : white;
  }

  .Bug .ant-statistic {
      color : white;
  }
</style>
