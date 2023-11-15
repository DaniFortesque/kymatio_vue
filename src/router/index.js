import { createRouter, createWebHashHistory } from 'vue-router'
import Read from '../components/ReadCustomer.vue'
import Create from '../components/CreateCustomer.vue'
import Update from '../components/UpdateCustomer.vue'

const routes = [
  {
    path: '/',
    name: 'read',
    component: Read
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/update/:id',
    name: 'update',
    component: Update
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
