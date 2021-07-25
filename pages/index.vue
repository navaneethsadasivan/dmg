<template>
  <div class="infoBoxes">
    <info-card
      title="Products"
      icon="ri-store-fill"
      :details="productDetails"
    />
    <info-card
      title="Categories"
      icon="ri-file-copy-line"
      :details="productDetails"
    />
    <info-card
      title="Orders"
      icon="ri-shopping-basket-line"
      :details="productDetails"
    />
    <info-card
      title="[Beta Test]"
      icon="ri-test-tube-fill"
      :details="productDetails"
    />
  </div>
</template>

<script>
import InfoCard from "../components/home/info-card";
export default {
  components: {InfoCard},
  layout: 'app',
  data() {
    return {
      productDetails: [
        {name: 'Total', value: 20},
        {name: 'Active', value: 17}
      ]
    }
  }
}
</script>

<style>
  .infoBoxes {
    display: flex;
    justify-content: space-between;
  }
</style>
