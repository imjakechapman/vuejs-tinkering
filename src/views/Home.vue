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

        <base-input
          name="email"
          label="Email"
          type="text"
          placeholder="Email address"
          :errors="errors.email"
          v-model="form.email"></base-input>

        <base-select
          name="subject"
          label="Subject"
          placeholder="Select a subject"
          :options="options"
          :errors="errors.subject"
          v-model.sync="form.subject"></base-select>

        <base-checkbox
          name="terms"
          :value="form.terms"
          v-model="form.terms">
            I agree to the <a href="#" @click="handleShowTerms">terms and conditions</a>
        </base-checkbox>

        <button type="submit" :disabled="isDisabled" class="button is-link">{{ isSubmitting ? 'Submitting form...' : 'Submit Form'}}</button>
        <button type="button" :disabled="isClean" class="button is-text" @click.prevent="resetForm">Reset Form</button>
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
import Vue from 'vue';

// @ is an alias to /src
import BaseForm from '@/components/BaseForm';
import BaseInput from '@/components/BaseInput';
import BaseSelect from '@/components/BaseSelect';
import BaseCheckbox from '@/components/BaseCheckbox';
import BaseModal from '@/components/BaseModal';

export default {
  name: 'home',
  components: {
    BaseForm,
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseModal
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
      errors: {
        name: [],
        email: []
      },
      isSubmitting: false,
      showTermsAgreement: false
    }
  },
  computed: {
    isDisabled() {
      return this.isSubmitting || !this.form.terms;
    },
    isClean() {
      let isClean = true;
      Object.keys(this.form).forEach((key) => {
        let val = this.form[key];
        if (val != '' || val != false) {
          isClean = false;
        }
      })
      return isClean;
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
      Vue.nextTick(() => {
        this.form = {
          name: '',
          email: '',
          subject: '',
          terms: false
        };
        this.isSubmitting = false;
      });
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
  }
};
</script>


<style lang="scss" scoped>
  .box {
    box-shadow: 0 10px 35px rgba(0,0,0, .09);
    margin-bottom: 45px;
  }
</style>
