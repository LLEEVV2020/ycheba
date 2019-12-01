import Home from './pages/Home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'

// fix
export default [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/Cars', 
        component: Cars
    },
    {
        path: '/car/:id',
        component: Car
    }
]