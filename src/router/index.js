import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Promotions from '../views/Promotions.vue'
import PromotionDetail from '../views/PromotionDetail.vue'
import CarListing from '../views/CarListing.vue'
import Branches from '../views/Branches.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import FAQ from '../views/FAQ.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Account from '../views/Account.vue'
import ChangeEmail from '../views/ChangeEmail.vue'
import ChangePassword from '../views/ChangePassword.vue'
import ResetPassword from '../views/ResetPassword.vue'
import BookingDetail from '../views/BookingDetail.vue'
import CarDetail from '../views/CarDetail.vue'
import Checkout from '../views/Checkout.vue'
import Payment from '../views/Payment.vue'
import BookingConfirmation from '../views/BookingConfirmation.vue'
import OnlineCheckin from '../views/OnlineCheckin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/promotions',
    name: 'Promotions',
    component: Promotions
  },
  {
    path: '/promotions/:id',
    name: 'PromotionDetail',
    component: PromotionDetail
  },
  {
    path: '/cars',
    name: 'CarListing',
    component: CarListing
  },
  {
    path: '/branches',
    name: 'Branches',
    component: Branches
  },
  {
    path: '/articles',
    name: 'Articles',
    component: Articles
  },
  {
    path: '/articles/:id',
    name: 'ArticleDetail',
    component: ArticleDetail
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/change-email',
    name: 'ChangeEmail',
    component: ChangeEmail
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  },
  {
    path: '/booking/:id',
    name: 'BookingDetail',
    component: BookingDetail
  },
  {
    path: '/car/:id',
    name: 'CarDetail',
    component: CarDetail
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/booking-confirmation',
    name: 'BookingConfirmation',
    component: BookingConfirmation
  },
  {
    path: '/checkin/:code',
    name: 'OnlineCheckin',
    component: OnlineCheckin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
