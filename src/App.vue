<script setup lang="ts">
  import { ref, type Ref } from 'vue'; 
  import step from './components/step-display.vue'; 
  import PersonalInfo from './components/personal-info.vue'; 
  import SelectPlan from './components/select-plan.vue'; 
  import AddOns from './components/add-ons.vue';
  import Summary from './components/summary-step.vue'; 
  import ThankYou from './components/thank-you.vue'; 

  export interface FormDetails { 
    name: string | null; 
    email: string | null; 
    phone: string | null; 
    plan: 'arcade' | 'advanced' | 'pro' | null; 
    isYearly: boolean; 
    addOns: Array<'onlineService' | 'largerStorage' | 'customizableProfile'>; 
  }
  
  interface Step { id: string; description: string; } 

  const steps: Array<Step> = [
    { id: crypto.randomUUID(), description: "YOUR INFO" }, 
    { id: crypto.randomUUID(), description: "SELECT PLAN" }, 
    { id: crypto.randomUUID(), description: "ADD-ONS" }, 
    { id: crypto.randomUUID(), description: "SUMMARY" },
  ]
    
  const formDetails: Ref<FormDetails> = ref({ name: null, email: null, phone: null, plan: null, isYearly: false, addOns: [] });
  const currentStep = ref(1); 
  const personalInfoRef = ref<InstanceType<typeof PersonalInfo> | null>(null); 
  const selectPlanRef = ref<InstanceType<typeof SelectPlan> | null>(null); 

  function nextStep() { 
    let valid = true; 
    if (currentStep.value === 1) { 
      valid = personalInfoRef.value?.validate() ?? false; 
    } 
    
    if (currentStep.value === 2) { 
      valid = selectPlanRef.value?.validate() ?? false; 
    } 
    if (!valid) {
      return; 
    }
    
    currentStep.value += 1; 
  } 
  
  function onChangeAddOns() 
  { 
    currentStep.value = 3; 
  } 
  </script>


<template>
  <div class="wrapper">
    <div class="form-wrapper">
      <ol class="step-tracker">
        <step v-for="(step, index) in steps" :key="step.id" :description="step.description" :number="index + 1"
          :current-step="currentStep"></step>
      </ol>
      <div class="form-content">
        <div class="steps">
          <PersonalInfo v-if="currentStep === 1" v-model="formDetails" ref="personalInfoRef"></PersonalInfo>
          <SelectPlan v-if="currentStep === 2" v-model="formDetails" ref="selectPlanRef"></SelectPlan>
          <AddOns v-if="currentStep === 3" v-model="formDetails"></AddOns>
          <Summary @changeAddOns="onChangeAddOns" v-if="currentStep === 4" v-model="formDetails"></Summary>
          <ThankYou v-if="currentStep === 5"></ThankYou>
        </div>
        <div v-if="currentStep !== 5" class="content-footer">
          <div>
            <button v-if="currentStep !== 1" @click="currentStep -= 1" class="secondary-button">Go back</button>
          </div>
          <button id="nextStepButton" @click="nextStep">{{ currentStep !== 4 ? 'Next Step' : 'Confirm' }}</button>
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
   padding: 5% 10% 0 10%;
   border-radius: 15px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
 }

 .steps {
   max-height: 25rem;
 }
 
 /* Center content as there is no footer for this step */
 .form-content:has(.thank-you-wrapper) {
  justify-content: center;
  max-height: none;
}

 .content-footer {
   display: flex;
   justify-content: space-between;
 }

@media screen and (max-width: 480px) {
  .wrapper {
    background-color: var(--blue-100);
    width: 100vw;
    height: 100vh;
  }

  .form-wrapper {
    display: flex;
    justify-content: center;
    width: 100vw; 
    height: 100vh;
    background-color: var(--blue-50);
    padding: 0;
    border-radius: 0;
  }

  .step-tracker {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    padding-top: 2rem;
    border-radius: 0;
    top: 0;
    width: 100vw;
    height: 12rem;
    background-image: url('assets/images/bg-sidebar-mobile.svg');
    background-size: cover;
    gap: 1rem;
  }

  .form-content {
    position: relative;
    top: -1rem;
    background-color: var(--white);
    border-radius: 10px;
    padding: 2rem;
    width: 90%;
    height: auto;
    min-height: 30rem;
    max-width: 400px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    align-self: center;
  }
   /* Remove max height as there is no footer for this step */
  .steps:has(.thank-you-wrapper) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: none;
  }

  .steps {
    max-height: none;
  }

  .content-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 5rem;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    background-color: var(--white);
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
}

</style>
