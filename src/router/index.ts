import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import LoginPage from '../views/LoginPage.vue'
import LogoutPage from '../views/LogoutPage.vue'
import Dashboard from '../views/Dashboard.vue'
import FriendFinder from '../views/FriendFinder.vue'
import PageNotFound from '../views/PageNotFound.vue'
import About from '@/views/About.vue'
import Player from '@/views/Player.vue'
import Friends from '@/views/Friends.vue'
import Messages from '@/views/Messages.vue'
import Profile from '@/views/Profile.vue'

// Each route maps to a component.
const routes = [
    { 
        path: '/', 
        name: 'Home', 
        component: () => import('../views/Home.vue')
    },
    { 
        path: '/register', 
        name: 'Register', 
        component: () => import('../views/Register.vue')
    },
    { 
        path: '/login', 
        name: 'Login', 
        component: () => import('../views/LoginPage.vue')
    },
    { 
        path: '/logout', 
        name: 'Logout', 
        component: () => import('../views/LogoutPage.vue')
    },
    { 
        path: '/dashboard', 
        name: 'Dashboard', 
        component: () => import('../views/Dashboard.vue')
    },
    { 
        path: '/friendfinder', 
        name: 'Friend Finder', 
        component: () => import('../views/FriendFinder.vue')
    },
    {
        path: '/player/:player_name',
        name: "Player",
        component: () => import('../views/Player.vue')
    },
    {
        path: '/about',
        name: "About",
        component: () => import('../views/About.vue')
    },
    {
        path: '/profile',
        name: "Profile",
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/friends',
        name: "Friends",
        component: () => import('../views/Friends.vue')
    },
    {
        path: '/message/:friend',
        name: "Message",
        component: () => import('../views/Messages.vue')
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: () => import('../views/PageNotFound.vue')
    },
]

// Creates the router instance and passes the `routes` option
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
