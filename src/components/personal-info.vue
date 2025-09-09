<script setup lang="ts">
</script>


<template>
  <div class="content-header">  
    <h1>Personal info</h1>
    <p class="content-description">Please provide your name, email address, and phone number.</p>
  </div>
  <div class="content-content">
    <div class="personal-info-input">
      <label for="name">Name</label>
      <input id="name" placeholder="e.g. Stephen King"></input>
    </div>
    <div class="personal-info-input">
      <label for="emailAddress">Email Address</label>
      <input id="emailAddress" placeholder="e.g. stephenking@lorem.com"></input>
    </div>
    <div class="personal-info-input">
      <label for="phoneNumber">Phone Number</label>
      <input id="phoneNumber" placeholder="e.g. +1 234 567 890"></input>
    </div>
  </div>
</template>

<style scoped>

.personal-info-input {
  display: flex;
  flex-direction: column;
}

.personal-info-input input {
  margin-bottom: 1rem;
}
</style>