<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input
          :name="name"
          type="checkbox"
          :checked="checked"
          v-on:change="$emit('change', $event.target.checked)">
        <slot></slot>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: ['name', 'checked'],
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
</style>
