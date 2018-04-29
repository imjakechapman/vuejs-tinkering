<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :class="[hasErrors ? classes.errorClass : '', 'input']"
      :value="value"
      @input="$emit('input', $event.target.value)" />
    <p :class="[hasErrors ? classes.errorClass : '', 'help']">{{formattedErrors}}</p>
  </div>
</template>

<script>

// Export Component
export default {
  name: "BaseInput",
  props: ['type', 'name', 'label', 'placeholder', 'errors', 'value'],
  data: () => ({
    classes: {
      errorClass: 'is-danger',
      successClass: 'is-success'
    }
  }),
  computed: {
    hasErrors() {
      return this.errors.length >= 1
    },
    formattedErrors() {
      return this.errors.map((error) => error.text).join(' - ');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
