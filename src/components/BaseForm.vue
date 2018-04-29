<template>
  <form v-on:submit.prevent="validateThenSubmit">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "BaseForm",
  data: () => ({

  }),
  methods: {
    validateThenSubmit() {
      this.$emit('form-submit');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
