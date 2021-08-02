<template>
  <div class="basketPage">
    <div style="width: 70%">
      <basket-list/>
    </div>
    <div style="width: 30%">
      <basket-summary/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Basket',
    layout: 'app'
  }
</script>

<style scoped>
  .basketPage {
    display: flex;
    justify-content: space-between;
  }
</style>
