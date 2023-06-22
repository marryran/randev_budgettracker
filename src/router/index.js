import { createRouter, createWebHistory } from 'vue-router'

// Import Frontend Layout
import FrontendLayout from '@/layouts/Frontend.vue'

// Import Frontend Page
import Home from '@/views/frontend/Home.vue'
import Income from '@/views/frontend/Income.vue'
import Expense from '@/views/frontend/Expense.vue'
import Savings from '@/views/frontend/Savings.vue'
import Contact from '@/views/frontend/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //Frontend Route
    {
      //เรียกตัว Frontend Layout (แม่)
      path: '/',
      name: 'Frontend',
      component: FrontendLayout,
      // เรียกตัวลูกมาใส่
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            title: 'หน้าหลัก'
          }
        },
        {
          path: 'income',
          name: 'Income',
          component: Income,
          meta: {
            title: 'รายรับ'
          }
        },
        {
          path: 'expense',
          name: 'Expense',
          component: Expense,
          meta: {
            title: 'รายจ่าย'
          }
        },
        {
          path: 'savings',
          name: 'Savings',
          component: Savings,
          meta: {
            title: 'เงินเก็บ'
          }
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact,
          meta: {
            title: 'ติดต่อเรา'
          }
        },
      ]
    }
 
  ]
})

export default router
