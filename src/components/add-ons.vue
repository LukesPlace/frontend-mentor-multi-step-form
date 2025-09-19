<script setup lang="ts">
import { type FormDetails } from '@/App.vue';
import { addOns } from '@/data/add-ons';

const formDetails = defineModel<FormDetails>({ required: true });
</script>

<template>
  <div class="content-header">
    <h1>Pick add-ons</h1>
    <p class="content-description">Add-ons help enhance your gaming experience.</p>
  </div>
  <div class="content-content">
    <ol class="add-on-list">
      <li v-for="addOn in addOns" :key="addOn.value" class="add-on">
        <label :for="addOn.value" class="add-on-label" :class="{ selected : formDetails.addOns.includes(addOn.value as 'onlineService' | 'largerStorage' | 'customizableProfile') }">
          <input type="checkbox" :id="addOn.value" :value="addOn.value" v-model="formDetails.addOns"/>
          <span class="custom-checkbox"></span>
          <div class="add-on-details">
            <div class="add-on-description">
              <span class="title">{{addOn.name}}</span>
              <span class="text-secondary description">{{addOn.description}}</span>
            </div>
            <span v-if="formDetails.isYearly" class="price">+${{addOn.yearlyCost}}/yr</span>
            <span v-else class="price">+${{addOn.monthlyCost}}/mo</span>
          </div>
        </label>
      </li>
    </ol>
  </div>

</template>

<style scoped>

.selected {
  background-color: var(--blue-100)
}
.add-on-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.add-on {
  display: flex;
  width: 100%;
  height: 25%;
  gap: 2rem;
  border: 2px solid var(--purple-600);
  border-radius: 10px;
}

.add-on label {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
}

.add-on input {
  opacity: 0;
  width: 0;
  height: 0;
}

.add-on input::before {
  position: absolute;
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid var(--grey-500);
}

.add-on-details {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.add-on-description {
  display: flex;
  flex-direction: column;
}

.price {
  color: var(--purple-600);
}

/* Hide native checkbox */
.add-on-label input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--grey-500);
  border-radius: 4px;
  margin-right: 1rem;
}

.add-on-label input:checked + .custom-checkbox {
  background: var(--purple-600);
  border-color: var(--purple-600);
  position: relative;
  background-image: url("assets/images/icon-checkmark.svg");
  background-size: 16px;
  background-repeat: round;
}
.title {
  font-weight: bold;
  color: var(--primary-blue);
}


@media screen and (max-width: 480px) {

  .description {
    font-size: small;
  }

}

</style>