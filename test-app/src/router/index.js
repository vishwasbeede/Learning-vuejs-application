import {createRouter, createWebHistory}  from 'vue-router'
import userData from '../views/usersData.vue'
import studensData from '../views/studenstsData.vue'

const router = createRouter({
    history: createWebHistory(),
    routes :[
        {
            path: '/users',
            component: userData
        },
        {
            path: '/students',
            component: studensData
        }
    ]
})

export default router