import Home from './pages/Home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import CarFull from './pages/CarFull.vue'

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
        component: Car,
        children:[
            {
                path: 'full', // localhost:8080/car/10/full
                component: CarFull,
                name: 'Carful'
            }
        ]
    }
]