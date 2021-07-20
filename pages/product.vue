<template>
  <div>
    <dashboard/>
    <product-item
      :title="productItem.title"
      :type="productItem.type"
      :category="productItem.category"
      :color="productItem.color"
      :description="productItem.description"
    ></product-item>
  </div>
</template>

<script>
    import ProductItem from "../components/product-item";
    export default {
      name: "Product",
      auth: false,
      components: {ProductItem},
      data() {
        return {
          productItem: {
            title: 'Test',
            type: 'B',
            category: 'Testing',
            color: 'Black',
            description: 'This is nothing but a test'
          }
        }
      }
    }
</script>

<style scoped>

</style>
