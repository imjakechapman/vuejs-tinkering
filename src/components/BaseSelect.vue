<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div class="select">
        <select :value="value" v-on:change="$emit('change', $event.target.value)">
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
  model: {
    prop: 'value',
    event: 'change'
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
</style>
