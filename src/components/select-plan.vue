<script setup lang="ts">
import FrequencySelector from './frequency-selector.vue';
import { type FormDetails } from '@/App.vue';
import { plans } from '@/data/plans';
import { ref } from 'vue';

const formDetails = defineModel<FormDetails>({required: true});
const hasError = ref(false);

function validate() {
  let valid = true;

  if(!formDetails.value.plan) {
    valid = false;
    hasError.value = true;
  }

  return valid;
}

defineExpose({ validate });

</script>

<template>
  <div class="content-header">  
    <h1>Select your plan</h1>
    <p class="content-description">You have the option of monthly or yearly billing.</p>
    <p v-if="hasError" class="validation">Please select a plan</p>
  </div>
  <div class="content-content">
    <div class="plans">
      <label v-for="plan in plans" :key="plan.value" :class="[{selected: formDetails.plan ==  plan.value}, {error: hasError}, 'plan']">
        <input type="radio" :name="plan.value" :value="plan.value" v-model="formDetails.plan" />
        <img :src="`../../assets/images/${plan.src}`" :alt="plan.name" />
        <div class="plan-details">
          <span class="plan-type">{{ plan.name }}</span>
          <p v-if="formDetails.isYearly" class="text-secondary">${{plan.yearlyCost}}/yr</p>
          <p v-else class="text-secondary">${{plan.monthlyCost}}/mo</p>
        </div>
      </label>
    </div>
    <FrequencySelector v-model="formDetails.isYearly"></FrequencySelector>
  </div>
</template>


<style scoped>

.content-content {
  display: flex;
  flex-direction: column;
}

.plans {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.plan {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 9rem;
  height: 10rem;
  border: 2px solid var(--grey-500);
  border-radius: 10px;
  justify-content: space-between;
}

.plan:hover {
  background-color: var(--purple-200);
  transition: 0.5s;
  cursor: pointer;
}

.plan img {
  width: 40%;
  height: auto;
}

.plan-type {
  color: var(--primary-blue);
  font-weight: 500;
}

/* hide the radio but keep it accessible */
.plan input[type="radio"] {
  display: none;
}

.selected {
  background-color: var(--purple-200);
}

</style>