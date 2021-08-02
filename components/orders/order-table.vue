<template>
    <el-container style="margin: 0 2%">
        <el-table
            :data="list"
            border
            style="width:100%"
        >
        <el-table-column
            label="Order Number"
            prop="orderNumber"
            width="400"
            sortable
        ></el-table-column>
        <el-table-column
            label="Total Items"
            prop="totalItems"
            width="150"
            sortable
        ></el-table-column>
        <el-table-column
            label="CustomerId"
            prop="customerId"
            width="200"
            sortable
        >
        </el-table-column>
        <el-table-column
            label="Status"
            prop="status"
            width="150"
            sortable
        >
        </el-table-column>
        <el-table-column
            label="Total Price"
            prop="totalPrice"
            width="200"
            sortable
        >
        </el-table-column>
        <el-table-column
            label="Tracking ID"
            prop="trackingId"
            width="200"
            sortable
        >
        </el-table-column>
        <el-table-column 
            fixed="right"
            align="left"
            width="400"
        >
            <template slot="header">
                <div style="display:flex">
                    <el-input 
                        v-model="search"
                        size="mini"
                        placeholder="Type to search"
                    ></el-input>
                    <el-button
                        type="success"
                        size="mini"
                        plain
                        @click="openDrawer('new')"
                    >
                        + New
                    </el-button>
                </div>
            </template>
            <template slot-scope="scope">
            <el-button 
                size="mini"
                type="primary"
                plain
            >
                <i class="ri-eye-line"></i> 
            </el-button>
            <el-button 
                size="mini"
                type="warning"
                plain
                @click="openDrawer('edit', scope)"
            >
                <i class="ri-edit-line"></i> 
            </el-button>
            <el-button 
                size="mini"
                type="danger"
                plain
                @click="remove(scope)"
            >
                <i class="ri-delete-bin-line"></i> 
            </el-button>
            </template>
        </el-table-column>
        </el-table>

        <el-drawer
            ref="drawer"
            :title="drawer.title"
            :visible.sync="drawer.visibility"
            :custom-class="drawer.mode"
        >
            <el-container class="newOrderForm">
                <el-form ref="orderForm" :model="orderForm" :rules="orderRules">
                    <el-form-item label="Order Number" prop="orderNumber">
                        <el-input v-model="orderForm.orderNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="Total Items" prop="totalItems">
                        <el-input v-model="orderForm.totalItems"></el-input>
                    </el-form-item>
                    <el-form-item label="Customer ID" prop="customerId">
                        <el-input v-model="orderForm.customerId"></el-input>
                    </el-form-item>
                    <el-form-item label="Status" prop="status">
                        <el-select v-model="orderForm.status">
                            <el-option
                                v-for="(status,index) in availableStatus"
                                :key="index"
                                :label="status.label"
                                :value="status.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Total Price" prop="totalPrice">
                        <el-input v-model="orderForm.totalPrice"></el-input>
                    </el-form-item>
                    <el-form-item label="Tracking ID" prop="trackingId">
                        <el-input v-model="orderForm.trackingId"></el-input>
                    </el-form-item>
                    <el-form-item style="margin-top: 15%">
                        <el-button type="info" plain @click="submit('orderForm')">Submit</el-button>
                    </el-form-item>
                </el-form>
            </el-container>
        </el-drawer>
    </el-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default ({
        name: 'OrderTable',
        data() {
            return {
                search: '',
                editOrder: null,
                drawer: {
                    title: '',
                    mode: '',
                    visibility: false
                },
                availableStatus: [
                    {label: 'Completed', value: 'Completed'},
                    {label: 'Processing', value: 'Processing'},
                    {label: 'Cancelled', value: 'Cancelled'},
                    {label: 'Issue', value: 'Issue'}
                ],
                orderForm: {
                    orderNumber: '',
                    totalItems: null,
                    customerId: '',
                    status: '',
                    totalPrice: null,
                    trackingId: ''
                },
                orderRules: {
                    orderNumber: [
                        {required: true, message: 'Enter the order number', trigger: 'blur'}
                    ],
                    totalItems: [
                        {required: true, message: 'Enter the total items', trigger: 'blur'}
                    ],
                    customerId: [
                        {required: true, message: 'Enter the customer id', trigger: 'blur'}
                    ],
                    status: [
                        {required: true, message: 'Select a status', trigger: 'blur'}
                    ],
                    totalPrice: [
                        {required: true, message: 'Enter the total price', trigger: 'blur'}
                    ],
                    trackingId: [
                        {required: true, message: 'Enter the tracking id', trigger: 'blur'}
                    ]
                }
            }
        },
        computed: {
            ...mapGetters ({
                list: 'order/getOrders'
            })
        },
        methods: {
            openDrawer(mode, data=null) {
                if(mode === 'new') {
                    this.drawer.title = 'Add New Order'
                    this.drawer.mode = 'new'
                    this.drawer.visibility = true
                } else if (mode === 'edit') {
                    this.editOrder = data.row
                    this.orderForm.orderNumber = data.row.orderNumber
                    this.orderForm.totalItems = data.row.totalItems
                    this.orderForm.totalPrice = data.row.totalPrice
                    this.orderForm.status = data.row.status
                    this.orderForm.customerId = data.row.customerId
                    this.orderForm.trackingId = data.row.trackingId
                    this.drawer.title = 'Edit Order'
                    this.drawer.mode = 'edit'
                    this.drawer.visibility = true
                }
            },
            submit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (this.drawer.mode === 'edit') {
                            this.$store.dispatch('order/update', {
                                order: this.editOrder,
                                update: this.orderForm
                            })
                            this.drawer.visibility = false
                        } else {
                            this.$store.dispatch('order/add', this.orderForm)
                            this.resetForm(formName)
                            this.$refs.drawer.closeDrawer()
                        }
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields()
            },
            remove(order) {
                this.$confirm('Are you sure you want to remove this order').then(
                    _ => {
                        this.$store.dispatch('order/remove', order.row)
                        this.$notify({
                            title: 'Success',
                            message: 'Order Removed',
                            type: 'success'
                        });
                    }
                ).catch(
                    _ => {}
                )
            }
        }
    })
</script>

<style scoped>
    .newOrderForm {
        margin: 0 10%;
        background-color: #ebfceb;
        padding: 5%;
    }
    .el-form {
        width: 100%;
    }
</style>