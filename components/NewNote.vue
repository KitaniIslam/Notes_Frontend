<template>
  <div>
    <a-button type="primary" @click="showDrawer" icon="edit">Start Writing Now</a-button>
    <a-drawer title="Create a new note" :width="720" @close="onClose" :visible="visible"
      :bodyStyle="{paddingBottom: '80px'}">
      <a-form :form="form" layout="vertical" hideRequiredMark>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="Type">
              <a-select defaultValue="fix" style="width: 120px" @change="handleChange">
                <a-select-option value="fix">Fix</a-select-option>
                <a-select-option value="bug">Bug</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="24">
            <a-form-item label="Description">
              <a-textarea v-decorator="['description', {
                  rules: [{ required: true, message: 'Please enter note description' }]
                }]" :rows="4" placeholder="please enter note description" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
      <div :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }">
        <a-button :style="{marginRight: '8px'}" @click="onClose">
          Cancel
        </a-button>
        <a-button @click="onClose" type="primary">Submit</a-button>
      </div>
    </a-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: this.$form.createForm(this),
        visible: false,
      };
    },
    methods: {
      showDrawer() {
        this.visible = true;
      },
      onClose() {
        this.visible = false;
      },
    },
  };

</script>
