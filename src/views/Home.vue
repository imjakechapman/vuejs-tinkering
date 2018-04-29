<template>
  <div class="home" style="max-width: 45%; margin: 0 auto;">
    <div class="box" style="margin-top: 45px;">
      <base-form v-on:form-submit="validateSubmitForm">
        <base-input
          name="name"
          label="Name"
          type="text"
          placeholder="My Name"
          :errors="errors.name"
          v-model="form.name"></base-input>

        <base-select
          name="subject"
          label="Subject"
          placeholder="Select a subject"
          :options="options"
          :errors="errors.subject"
          v-model="form.subject"></base-select>

        <base-checkbox
          name="terms"
          :value="form.terms"
          v-model="form.terms">
            I agree to the <a href="#">terms and conditions</a>
        </base-checkbox>

        <button type="submit" :disabled="isDisabled" class="button is-link">{{ isSubmitting ? 'Submitting form...' : 'Submit Form'}}</button>
        <button type="button" class="button is-text" @click.prevent="resetForm">Reset Form</button>
      </base-form>
    </div>


    <div v-if="true">
      <hr />
      <label class="label">Submitted Form:</label>
      <div class="box">
        <div v-for="(val, key) in form" :key="key">
          <p><strong>{{key}}:</strong> {{val}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

// @ is an alias to /src
import BaseForm from '@/components/BaseForm';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import BaseCheckbox from '@/components/BaseCheckbox';

export default {
  name: 'home',
  components: {
    BaseForm,
    BaseInput,
    BaseSelect,
    BaseCheckbox
  },
  data() {
    return {
      form: {
        name: '',
        subject: '',
        terms: false
      },
      options: [
        { 'id': 1, 'value': 'React.js'},
        { 'id': 2, 'value': 'Vue.js'}
      ],
      errors: {
        name: []
      },
      isSubmitting: false
    }
  },
  computed: {
    isDisabled() {
      return this.isSubmitting || !this.form.terms;
    }
  },
  methods: {
    validateSubmitForm() {
      this.isSubmitting = true;
      setTimeout(() => {
        alert('Form submitted');
        this.resetForm();
      }, 2000);
    },
    resetForm() {
      this.form = {
        name: '',
        subject: '',
        terms: false
      };
      this.isSubmitting = false;
    }
  }
};
</script>
