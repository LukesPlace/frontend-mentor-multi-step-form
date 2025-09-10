<script setup lang="ts">
import { defineModel } from 'vue'

const checked = defineModel();

</script>

<template>
  <div class="frequency-selector">
    <span class="toggle-default" :class="{selected : !checked}">Monthly</span>
    <label class="toggle">
      <input
      type="checkbox"
      v-model="checked"
      />
      <span class="slider" ></span>
    </label>
    <span class="toggle-default" :class="{selected : checked}">Yearly</span>
  </div>
</template>

<style scoped>

.frequency-selector {
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  background-color: var(--purple-200);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.toggle {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-blue);
  transition: 0.3s;
  border-radius: 9999px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 5px;
  bottom: 5px;
  background-color: white;
  transition: 0.3s;
  border-radius: 50%;
}


input:checked + .slider::before {
  transform: translateX(20px);
}

.toggle-default {
  color: var(--grey-500);
  font-weight: 700;
}
.selected {
  color: var(--primary-blue);
}
</style>
