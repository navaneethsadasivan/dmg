<template>
    <el-card>
        <template slot="header">
            <h4>Summary</h4>
        </template>
        <div>
            <div class="summaryDetails">
                <h5>Total items</h5>
                <span>{{ totalItems }}</span>
            </div>
            <div class="summaryDetails">
                <h5>Total Price</h5>
                <span>&#8377;{{ totalPrice }}</span>
            </div>
        </div>
    </el-card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'BasketSummary',
        computed: {
            ...mapGetters({
                totalItems: 'basket/getTotalCount',
                totalPrice: 'basket/getTotalPrice'
            })
        }
    }
</script>

<style scoped>
    .el-card {
        width: 100%;
    }
    .summaryDetails {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 40%;
    }
    .summaryDetails > h5 {
        margin: 5% 0;
    }
</style>
