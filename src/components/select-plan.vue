<script setup lang="ts">
import Toggle from './toggle.vue';

</script>

<template>
  <div class="content-header">  
    <h1>Select your plan</h1>
    <p class="content-description">You have the option of monthly or yearly billing.</p>
  </div>
  <div class="content-content">
    <div class="plans">
      <div class="plan arcade">
        <img src="../../assets/images/icon-arcade.svg"></img>
        <div>
          <span>Arcade</span>
          <p class="content-description">$9/mo</p>
        </div>
      </div>
      <div class="plan advanced">
        <img src="../../assets/images/icon-advanced.svg"></img>
        <div>
          <span>Advanced</span>
          <p class="content-description">$12/mo</p>
        </div>
      </div>
      <div class="plan pro">
        <img src="../../assets/images/icon-pro.svg"></img>
        <div>
          <span>Pro</span>
          <p class="content-description">$15/mo</p>
        </div>
      </div>
    </div>
    <Toggle></Toggle>
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

.plan img {
  width: 40%;
}
</style>