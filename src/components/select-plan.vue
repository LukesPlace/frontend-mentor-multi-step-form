<script setup lang="ts">
import FrequencySelector from './frequency-selector.vue';
import { FormDetails } from '@/App.vue';
import { plans } from '@/data/plans';

const formDetails = defineModel<FormDetails>();
</script>

<template>
  <div class="content-header">  
    <h1>Select your plan</h1>
    <p class="content-description">You have the option of monthly or yearly billing.</p>
  </div>
  <div class="content-content">
    <div class="plans">
      <label v-for="plan in plans" :class="[{selected: formDetails.plan ==  plan.value}, 'plan']">
        <input type="radio" :name="plan.value" :value="plan.value" v-model="formDetails.plan" />
        <img :src="`../../assets/images/${plan.src}`" :alt="plan.name" />
        <div class="plan-details">
          <span class="plan-type">{{ plan.name }}</span>
          <p class="text-secondary">${{plan.cost}}/mo</p>
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