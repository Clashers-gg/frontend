import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import LoginPage from '../views/LoginPage.vue'
import LogoutPage from '../views/LogoutPage.vue'
import Dashboard from '../views/Dashboard.vue'

// Each route maps to a component.
const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/logout', name: 'Logout', component: LogoutPage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
]

// Creates the router instance and passes the `routes` option
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
