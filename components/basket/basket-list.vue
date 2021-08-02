<template>
    <div class="basketList">
        <el-table
            :data="basketData"
            style="width:100%"
        >
            <el-table-column
                label="Item"
                prop="productName"
                min-width="40"
            ></el-table-column>
            <el-table-column
                label="Quantity"
                min-width="20"
            >
                <template slot-scope="scope">
                    <div style="display: flex; max-width:70%; justify-content:space-between">
                        <el-button size="small" circle @click="updateQuantity('add', scope.row)">
                            <i class="ri-add-line"></i>
                        </el-button>
                        <span>{{ scope.row.quantity}}</span>
                        <el-button size="small" circle @click="updateQuantity('substract', scope.row)">
                            <i class="ri-subtract-line"></i>
                        </el-button>
                    </div>
                </template>
            </el-table-column>
            <el-table-column
                label="Price"
                prop="totalPrice"
                min-width="20"
            ></el-table-column>
            <el-table-column
                label="Action"
                min-width="20"
            >
                <template slot-scope="scope">
                    <div style="display: flex; justify-content: space-between">
                        <el-button type="danger" size="mini" @click="removeItem(scope)">
                            <i class="ri-close-line"></i> 
                        </el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default ({
    name: 'BasketList',
    computed: {
        ...mapGetters ({
            basketData: 'basket/getListItems'
        })
    },
    methods: {
        updateQuantity(update, data) {
            if (data.quantity === 1 && update === 'substract') {
                this.removeItem(data)
            } else {
                const payload = {
                    product: data,
                    mode: update
                }
                this.$store.dispatch('basket/updateItemQuantity', payload)
            }
        },
        removeItem(product) {
            this.$store.dispatch('basket/removeFromBasket', product)
        }
    }
})
</script>

<style scoped>
    .basketList {
        margin: 0 5%;
    }
</style>
