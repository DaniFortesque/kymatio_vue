<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                Add new customer
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="createCustomer">
                    <div class="form-group mb-3">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" name="name" id="name" v-model="customer.name" required>
                        <small id="helpId" class="form-text text-muted">Write customer name here</small>
                    </div>
                    <div class="form-group mb-3">
                        <label for="address">Address:</label>
                        <input type="text" class="form-control" name="address" id="address" v-model="customer.address" required>
                        <small id="helpId" class="form-text text-muted">Write customer address here</small>
                    </div>

                    <div class="form-group mb-3">
                        <label for="address">Province:</label>
                        <input type="text" class="form-control" name="province" id="province" v-model="customer.province" required> 
                        <small id="helpId" class="form-text text-muted">Write customer province here</small>
                    </div>

                    <div class="form-group mb-3">
                        <label for="address">CIF:</label>
                        <input type="text" class="form-control" name="cif" id="cif" v-model="customer.cif" required>
                        <small id="helpId" class="form-text text-muted">Write customer CIF here</small>
                    </div>

                    <div class="btn-group d-flex" role="group">
                        <button type="submit" class="btn btn-primary">Add</button>
                        <router-link :to="{name:'read'}" class="btn btn-secondary">Cancel</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                customer: {}
            }
        },
        methods: {
            createCustomer() {
                fetch('http://localhost/create', {
                    method: "POST",
                    body: JSON.stringify(this.customer)
                })
                .then(response => {
                    console.log(response);
                    window.location.href = "/read";
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>