<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Customers
            </div>
            <div class="card-body">
                <router-link :to="{name:'create'}" class="btn btn-success">Add customer</router-link>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Customer ID<Input:password></Input:password></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Province</th>
                            <th>Cif</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="customer in customers" :key="customer.id">
                            <td scope="row">{{ customer.customerId }}</td>
                            <td scope="row">{{ customer.name }}</td>
                            <td scope="row">{{ customer.address }}</td>
                            <td scope="row">{{ customer.province }}</td>
                            <td scope="row">{{ customer.cif }}</td>
                            <td class="btn-group">
                               <div class="btn-group">
                                <router-link :to="{name:'update', params: {id: customer.id}}" class="btn btn-primary">Update</router-link>
                                <button type="button" v-on:click="deleteCustomer(customer.id)" class="btn btn-danger">Delete</button>
                               </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            customers: []
        }
    },
    created:function() {
        this.getAllCustomers();
    },
    methods: {
        getAllCustomers() {
            fetch('http://localhost/read')
            .then(response => response.json())
            .then(response => {
                if(response.length > 0) {
                    this.customers = response;
                }
            })
        },
        deleteCustomer(id) {
            fetch('http://localhost/delete/'+id, {
                    method: "DELETE"
                })
            .then(response => {
                console.log(response)
                window.location.href = "read";
            })
        }
    }
}

</script>

<style lang="scss" scoped>

</style>