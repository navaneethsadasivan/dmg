<template>
  <div>
    <div class="infoCards">
      <info-card
        class="completed"
        title="Completed"
        icon='ri-calendar-check-fill'
        :details="details.completed"
      />
      <info-card
        class="processing"
        title="Ongoing"
        icon='ri-draft-line'
        :details="details.processing"
      />
      <info-card
        class="completed"
        title="Cancelled"
        icon='ri-close-circle-line'
        :details="details.cancelled"
      />
      <info-card
        class="completed"
        title="Issues"
        icon='ri-customer-service-line'
        :details="details.issue"
      />
    </div>
    <order-table/>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import InfoCard from "../components/home/info-card";
    import OrderTable from "../components/orders/order-table"

    export default {
      name: "Orders",
      components: {InfoCard, OrderTable},
      layout: 'app',
      computed: {
        ...mapGetters ({
          details: 'order/getStatusOrders'
        })
      }
    }
</script>

<style scoped>
  .infoCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .completed > .icon > .i {
    color: #46d846;
  }
</style>
