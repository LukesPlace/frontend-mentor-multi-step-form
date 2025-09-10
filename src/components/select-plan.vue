<script setup lang="ts">
import { ref } from 'vue';
import FrequencySelector from './frequency-selector.vue';

const selectedPlan = ref(null);
const isYearly = ref(false);
</script>

<template>
  <div class="content-header">  
    <h1>Select your plan</h1>
    <p class="content-description">You have the option of monthly or yearly billing.</p>
  </div>
  <div class="content-content">
    <div class="plans">
      <label class="plan" :class="{selected: selectedPlan == 'arcade'}">
        <input type="radio" name="plan" value="arcade" v-model="selectedPlan" />
        <img src="../../assets/images/icon-arcade.svg" alt="Arcade" />
        <div class="plan-details">
          <span class="plan-type">Arcade</span>
          <p class="text-secondary">$9/mo</p>
        </div>
      </label>

      <label class="plan" :class="{selected: selectedPlan == 'advanced'}">
        <input type="radio" name="plan" value="advanced" v-model="selectedPlan" />
        <img src="../../assets/images/icon-advanced.svg" alt="Advanced" />
        <div class="plan-details">
          <span class="plan-type">Advanced</span>
          <p class="text-secondary">$12/mo</p>
        </div>
      </label>

      <label class="plan" :class="{selected: selectedPlan == 'pro'}">
        <input type="radio" name="plan" value="pro" v-model="selectedPlan" />
        <img src="../../assets/images/icon-pro.svg" alt="Pro" />
        <div class="plan-details">
          <span class="plan-type">Pro</span>
          <p class="text-secondary">$15/mo</p>
        </div>
      </label>
    </div>
    <FrequencySelector v-model="isYearly"></FrequencySelector>
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