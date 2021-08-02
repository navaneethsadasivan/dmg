<template>
  <div class="infoBoxes">
    <info-card
      title="Products"
      icon="ri-store-fill"
      :details="productInfo"
    />
    <info-card
      title="Categories"
      icon="ri-file-copy-line"
      :details="categoryInfo"
    />
    <info-card
      title="Orders"
      icon="ri-archive-line"
      :details="orderInfo"
    />
    <info-card
      title="[Beta Test]"
      icon="ri-test-tube-fill"
      :details="productDetails"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import InfoCard from "../components/home/info-card";
  export default {
    components: {InfoCard},
    layout: 'app',
    data() {
      return {
        productDetails: {
          featuredName: 'Active',
          featuredValue: 20,
          additionalDetails: [
            {name: 'Total', value: '50'}
          ]
        }
      }
    },
    computed: {
      ...mapGetters ({
        productInfo: 'product/getProductsInfo',
        categoryInfo: 'category/getCategoryInfo',
        orderInfo: 'order/getOrdersInfo'
      })
    }
  }
</script>

<style>
  .infoBoxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
