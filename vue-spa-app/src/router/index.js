import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
//import About from '@/views/About.vue'
//import Signup from '@/views/Signup.vue'

const routes = [
    
        { path: '/', name: 'Home', component: Home},
        { path: '/product', name: 'Product', component: ()=>import('@/views/Product.vue')},
        { path: '/signup', name: 'Signup', component: ()=>import('@/views/Signup.vue')},
        { path: '/login', name: 'Signon', component: ()=>import('@/views/Signon.vue')}
    
]
const router = createRouter ( {
    history: createWebHistory(),
    routes
})

export default router