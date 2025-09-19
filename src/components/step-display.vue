<script setup lang="ts">
import { computed } from 'vue';


const props = defineProps<{
  description: string;
  number: number;
  currentStep: number;
}>();

const isCurrentStep = computed(() => (props.currentStep === props.number));
</script>

<template>
  <li class="step">
    <span class="step-icon" :class="{ active : isCurrentStep} ">{{ number }}</span>
    <div class="step-text">
      <span class="step-label">STEP {{ number }}</span>
      <h2 class="step-description">{{ description }}</h2>
    </div>
  </li>
</template>

<style scoped>

.step {
  display: flex;
  gap: 1rem;
  color: var(--white);
  align-items: center;
}

.step-icon {
  display: flex;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 50%;
  border: solid 1px var(--white);
  align-items: center;
  justify-content: center;
}

.step-label {
  font-weight: 300;
  color: var(--purple-200);
  font-size: small;
}

.step-description {
  font-size: 16px;
}

.active {
  background-color: var(--blue-200);
  color: black;
  border: none;
}

@media screen and ( max-width: 480px) {
  .step-text {
    display: none;
  }
};
</style>