<script setup lang="ts">
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
          <span class="plan">Arcade (Monthly)</span>
          <a>Change</a>
        </div>
        <span class="price">$9/mo</span>
      </div>
      <div class="spacer"></div>
      <ul class="selected-add-ons">
        <li>
          <span class="text-secondary">Online service</span>
          <span class="price">+$1/mo</span>
        </li>
        <li>
          <span class="text-secondary">Larger storage</span>
          <span class="price">+2/mo</span>
        </li>
      </ul>
    </div>
    <div class="total">
      <span class="text-secondary">Total (per month)</span>
      <span class="total-price">+$12/mo</span>
    </div>
  </div>
</template>

<style scoped>

a {
  color: var(--purple-600)
}
a:hover {
  cursor:pointer;
  text-decoration: solid 2px underline;
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