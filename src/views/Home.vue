<template>
  <div class="section">
    <div class="box container">
      <base-form
        @form-submit="validateSubmitForm"
        v-model="form">

        <base-input
          name="name"
          label="Name"
          type="text"
          placeholder="My Name"
          :validation="this.$v"
          v-model.sync="form.name"></base-input>

        <base-input
          name="email"
          label="Email"
          type="text"
          placeholder="Email address"
          :validation="this.$v"
          v-model.sync="form.email"></base-input>

        <base-select
          name="subject"
          label="Subject"
          placeholder="Select a subject"
          :validation="this.$v"
          :options="options"
          v-model.sync="form.subject"></base-select>

        <base-checkbox
          name="terms"
          :value="form.terms"
          v-model="form.terms">
            I agree to the <a href="#" @click="handleShowTerms">terms and conditions</a>
        </base-checkbox>

        <button type="submit" :disabled="isDisabled || this.$v.form.$invalid" class="button is-link">{{ isSubmitting ? 'Submitting form...' : 'Submit Form'}}</button>
        <button type="button" :disabled="!this.$v.form.$dirty" class="button is-text" @click.prevent="resetForm">Reset Form</button>
      </base-form>
    </div>


    <div v-if="isSubmitting">
      <hr />
      <label class="label">Submitted Form:</label>
      <div class="box">
        <div v-for="(val, key) in form" :key="key">
          <p><strong>{{key}}:</strong> {{val}}</p>
        </div>
      </div>
    </div>

    <base-modal
      modalTitle="Terms and Conditions"
      showClose="true"
      saveText="Agree"
      showCancel="true"
      cancelText="Cancel"
      :modalOpen="showTermsAgreement"
      v-on:acceptTermsAgreement="acceptTermsAgreement"
      v-on:closeModal="closeModal"
      ></base-modal>
  </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'

// BaseComponents
import BaseForm from '@/components/BaseForm';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import BaseCheckbox from '@/components/BaseCheckbox';
import BaseModal from '@/components/BaseModal';

// Directives
import ClickOutside from 'vue-click-outside';

export default {
  name: 'home',
  components: {
    BaseForm,
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseModal
  },
  directives: {
    ClickOutside
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        terms: false
      },
      options: [
        { 'id': 1, 'value': 'React.js'},
        { 'id': 2, 'value': 'Vue.js'}
      ],
      isSubmitting: false,
      showTermsAgreement: false
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
        email: '',
        subject: '',
        terms: false
      };
      this.$v.form.$reset();
      this.isSubmitting = false;
    },
    handleShowTerms() {
      this.showTermsAgreement = true;
    },
    closeModal() {
      this.showTermsAgreement = false;
    },
    acceptTermsAgreement() {
      this.form.terms = true;
      this.closeModal();
    }
  },
  validations: {
    form: {
      name: { required },
      email: { required, email, minLength: minLength(4) },
      subject: { required }
    }
  }
};
</script>


<style lang="scss" scoped>
  .box {
    box-shadow: 0 10px 35px rgba(0,0,0, .09);
    margin-bottom: 45px;
  }
</style>
