<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div :class="['select', this.validation.form[name].$error ? 'is-danger' : '']">
        <select :value="value" v-on:change="onSelectChange">
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
    'value',
    'validation'
  ],
  model: {
    prop: 'value',
    event: 'change'
  },
  data: () => ({}),
  methods: {
    onSelectChange($e) {
      this.$emit('change', $e.target.value);
      this.validation.form[this.name].$touch();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
