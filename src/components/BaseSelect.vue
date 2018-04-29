<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div class="select">
        <select v-model="val">
          <option disabled value="">{{ placeholder }}</option>
          <option v-for="opt in options" :key="opt.id" v-bind:value="opt.value">{{ opt.value }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: [
    'name',
    'label',
    'placeholder',
    'options',
    'value'
  ],
  data: () => ({
    val: this.value
  }),
  watch: {
    val(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
