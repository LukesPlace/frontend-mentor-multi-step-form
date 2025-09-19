<script setup lang="ts">
import { type FormDetails } from '@/App.vue';
import { computed, ref, type Ref } from 'vue';


const formDetails = defineModel<FormDetails>({required: true});
const errorMessages: Ref<Array<string>> = ref([]);

const hasNameError = computed(() => errorMessages.value.includes('name'));
const hasEmailError = computed(() => errorMessages.value.includes('email'));
const hasPhoneError = computed(() => errorMessages.value.includes('phone'));

function validate() {
  let valid = true;

  if(!formDetails.value.name) {
    valid = false;
    errorMessages.value.push('name');
  }

  if(!formDetails.value.email) {
    valid = false;
    errorMessages.value.push('email');
  }

  if(!formDetails.value.phone) {
    valid = false;
    errorMessages.value.push('phone');
  }

  return valid;
}

defineExpose({ validate });
</script>


<template>
  <div class="content-header">
    <h1>Personal info</h1>
    <p class="content-description">Please provide your name, email address, and phone number.</p>
  </div>
  <div class="content-content">
    <div class="personal-info-input">
      <div class="label-wrapper">
        <label for="name">Name</label>
        <span v-if="hasNameError" class="validation">This field is required</span>
      </div>
      <input :class="{ error: hasNameError}" id="name" placeholder="e.g. Stephen King" v-model="formDetails.name"/>
    </div>
    <div class="personal-info-input">
      <div class="label-wrapper">
        <label for="emailAddress">Email Address</label>
        <span v-if="hasEmailError" class="validation">This field is required</span>
      </div>
      <input :class="{ error: hasEmailError}" id="emailAddress" placeholder="e.g. stephenking@lorem.com" v-model="formDetails.email"/>
    </div>
    <div class="personal-info-input">
      <div class="label-wrapper">
        <label for="phoneNumber">Phone Number</label>
        <span v-if="hasPhoneError" class="validation">This field is required</span>
      </div>
      <input :class="{ error: hasPhoneError}" id="phoneNumber" placeholder="e.g. +1 234 567 890" v-model="formDetails.phone"/>
    </div>
  </div>
</template>

<style scoped>

.personal-info-input {
  display: flex;
  flex-direction: column;
}

.personal-info-input input {
  margin-bottom: 1rem;
}

.label-wrapper {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 480px) {
  h1 {
    font-size: x-large;
  }

  .label-wrapper {
    font-size: small;
  }

  .content-description {
    padding-bottom: 1rem;
  }
  .personal-info-input input {
    border-radius: 5px;
  }
}
</style>