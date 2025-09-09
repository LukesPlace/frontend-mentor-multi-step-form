<script setup lang="ts">
import { ref } from 'vue';
import step from './components/step.vue';
import PersonalInfo from './components/personal-info.vue';
import SelectPlan from './components/select-plan.vue';
interface Step {
  id: string;
  description: string;
}

const steps: Array<Step> = [
  { id: crypto.randomUUID(), description: "YOUR INFO"},
  { id: crypto.randomUUID(), description: "SELECT PLAN"},
  { id: crypto.randomUUID(), description: "ADD-ONS"},
  { id: crypto.randomUUID(), description: "SUMMARY"},
]

const currentStep = ref(1);
</script>

<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <ol class="step-tracker">
        <step v-for="(step, index) in steps" :key="step.id" :description="step.description" :number="index + 1" :current-step="currentStep"></step>
      </ol>
      <div class="form-content">
        <PersonalInfo v-if="currentStep === 1"></PersonalInfo>
        <SelectPlan v-if="currentStep === 2"></SelectPlan>
        <div v-if="currentStep === 1">

        </div>
        <div class="content-footer">
          <div>
            <button v-if="currentStep !== 1" @click="currentStep -= 1" class="secondary-button">Go back</button>
          </div>
          <button @click="currentStep += 1">Next Step</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.wrapper {
  background-color: var(--blue-100);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper {
  display: flex;
  padding: 1%;
  background-color: var(--blue-50);
  height: 35rem;
  width: 60rem;
  border-radius: 15px;
  box-shadow: 2px 2px 15px -7px var(--grey-500);
}

.step-tracker {
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 100%;
  padding: 2rem;
  border-radius: 15px;
  background-image: url('assets/images/bg-sidebar-desktop.svg');
  background-size: cover;
  gap: 2rem;
}

.form-content {
  width: 100%;
  height: 100%;
  padding: 5% 10%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
}

.content-footer {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}

.secondary-button {
  background-color: unset;
  color: var(--grey-500);
  padding: 1em;
  justify-content: left;
}

.secondary-button:hover {
  color: var(--primary-blue);
  cursor: pointer;
}

.content-description {
  color: var(--grey-500);
  padding-bottom: 3rem;
}
</style>
