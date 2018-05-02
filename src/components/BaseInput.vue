<template>
  <div class="field">
    <label class="label">{{label}}</label>
    <input
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :class="['input', this.v.$error ? 'is-danger' : '']"
      :value="value"
      @input="onInput" />

    <div v-if="this.v.$error">
      <p v-if="!this.v.required" class="help is-danger">{{ label }} is required</p>
      <p v-if="!this.v.email && name == 'email'" class="help is-danger">Must be a valid email</p>
    </div>
  </div>
</template>

<script>

// Export Component
export default {
  name: "BaseInput",
  props: ['type', 'name', 'label', 'placeholder', 'value', 'validation'],
  data() {
    return {
      v: this.validation.form[this.name],
      classes: {
        errorClass: 'is-danger'
      }
    }
  },
  computed: {
  },
  methods: {
    onInput($e) {
      this.$emit('input', $e.target.value);
      this.v.$touch();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
