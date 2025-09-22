<script setup lang="ts">
import { type FormDetails } from '@/App.vue';
import { plans } from '@/data/plans';
import { computed } from 'vue';
import { addOns } from '@/data/add-ons';

const emit = defineEmits(['changeAddOns']);
const formDetails = defineModel<FormDetails>({ required: true });
const selectedPlan = computed(() => plans.find(p => p.value == formDetails.value.plan));
const selectedAddOns = computed(() => addOns.filter(ao => formDetails.value.addOns.includes(ao.value as 'onlineService' | 'largerStorage' | 'customizableProfile')) ?? null);

const total = computed(() => {
  let total = 0;
  
  if(formDetails.value.isYearly) {
    total += selectedPlan.value!.yearlyCost;

    selectedAddOns.value.forEach(ao => {
      total += ao.yearlyCost;
    })

    return total;
  }

  total += selectedPlan.value!.monthlyCost;

  selectedAddOns.value.forEach(ao => {
    total += ao.monthlyCost;
  })

  return total;
})

function onChangeAddOns() {
  emit('changeAddOns');
}

</script>

<template>

  <div class="content-header">
    <h1>Finishing up</h1>
    <p class="content-description">Double-check everything looks OK before confirming.</p>
  </div>
  <div class="content-content">
    <div class="summary">
      <div class="selected-plan-wrapper">
        <div class="selected-plan">
          <span class="plan">{{selectedPlan!.name}} ({{ (formDetails.isYearly ? 'Yearly' : 'Monthly') }})</span>
          <a @click="onChangeAddOns">Change</a>
        </div>
        <span v-if="formDetails.isYearly" class="price">${{selectedPlan?.yearlyCost}}/yr</span>
        <span v-else class="price">${{selectedPlan?.monthlyCost}}/mo</span>
      </div>
      <div v-if="selectedAddOns.length > 0" class="spacer"></div>
      <ul class="selected-add-ons">
        <li v-for="addOn in selectedAddOns" :key="addOn.value">
          <span class="text-secondary">{{addOn.name}}</span>
          <span v-if="formDetails.isYearly" class="price">+${{addOn.yearlyCost}}/yr</span>
          <span v-else class="price">+${{addOn.monthlyCost}}/mo</span>
        </li>
      </ul>
    </div>
    <div class="total">
      <span class="text-secondary">Total (per {{formDetails.isYearly ? 'year' : 'month'}})</span>
      <span v-if="formDetails.isYearly" class="total-price">+${{total}}/yr</span>
      <span v-else class="total-price">+${{total}}/mo</span>
    </div>
  </div>
</template>

<style scoped>

a {
  color: var(--grey-500);
  text-decoration: solid 2px underline;
}
a:hover {
  cursor:pointer;
}
.summary {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: var(--blue-100);
  border-radius: 10px;
}

.spacer {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--purple-200) ;
}

.total {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.selected-plan-wrapper span {
  color: var(--primary-blue);
  font-size: large;
  font-weight: 500;
}
.price {
  color: var(--primary-blue);
}
.total-price {
  color: var(--purple-600);
  font-size: larger;
  font-weight: 700;
}

.selected-add-ons {
  display: flex;
  flex-direction: column;
} 
.selected-add-ons li {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
}
.selected-plan-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.selected-plan {
  display: flex;
  flex-direction: column;
}
</style>