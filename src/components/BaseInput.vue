<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :class="[hasErrors ? classes.errorClass : '', 'input']"
      v-model="val"/>
    <p v-bind:class="[hasErrors ? classes.errorClass : '', 'help']">{{formattedErrors}}</p>
  </div>
</template>

<script>

// Export Component
export default {
  name: "BaseInput",
  props: ['type', 'name', 'label', 'placeholder', 'errors'],
  data: () => ({
    val: this.value,
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
  },
  watch: {
    val(val) {
      this.$emit('input', val);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
