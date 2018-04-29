<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input
          :name="name"
          type="checkbox"
          v-model="accepted">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  props: ['name', 'value'],
  data: function() {
    return {
      accepted: this.value
    }
  },
  watch: {
    accepted(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
