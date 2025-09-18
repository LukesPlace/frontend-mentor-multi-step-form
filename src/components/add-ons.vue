<script setup lang="ts">
import { type FormDetails } from '@/App.vue';
import { ref } from 'vue';

const formDetails = defineModel<FormDetails>({ required: true });
const selectedAddOns = ref<Array<'onlineService' | 'largerStorage' | 'customizableProfile'>>([]);
</script>

<template>
  <div class="content-header">
    <h1>Pick add-ons</h1>
    <p class="content-description">Add-ons help enhance your gaming experience.</p>
  </div>
  <div class="content-content">
    <ol class="add-on-list">
      <li class="add-on">
        <label for="onlineService" class="add-on-label" :class="{ selected : selectedAddOns.includes('onlineService') }">
          <input type="checkbox" id="onlineService" value="onlineService" v-model="formDetails.addOns"/>
          <span class="custom-checkbox"></span>
          <div class="add-on-details">
            <div class="add-on-description">
              <span class="title">Online service</span>
              <span class="text-secondary">Access to multiplayer games</span>
            </div>
            <span class="price">+$2/mo</span>
          </div>
        </label>
      </li>
      <li class="add-on">
        <label for="largerStorage" class="add-on-label" :class="{ selected : selectedAddOns.includes('largerStorage') }">
          <input type="checkbox" id="largerStorage" value="largerStorage" v-model="formDetails.addOns"/>
          <span class="custom-checkbox"></span>
          <div class="add-on-details">
            <div class="add-on-description">
              <span class="title">Larger storage</span>
              <span class="text-secondary">Extra 1TB of cloud save</span>
            </div>
            <span class="price">+$2/mo</span>
          </div>
        </label>
      </li>
      <li class="add-on">
        <label for="customizableProfile" class="add-on-label" :class="{ selected : selectedAddOns.includes('customizableProfile') }">
          <input type="checkbox" id="customizableProfile" value="customizableProfile" v-model="formDetails.addOns"/>
          <span class="custom-checkbox"></span>
          <div class="add-on-details">
            <div class="add-on-description">
              <span class="title">Customizable Profile</span>
              <span class="text-secondary">Custom theme on your profile</span>
            </div>
            <span class="price">+$2/mo</span>
          </div>
        </label>
      </li>
    </ol>
  </div>

</template>

<style scoped>

.selected {
  background-color: var(--purple-200)
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


</style>