import Home from './pages/Home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import ErrorComp from './pages/Error.vue'
import CarFull from './pages/CarFull.vue'

// fix
export default [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/Cars', 
        component: Cars,
        name: 'cars'
    },
    {
        path: '/car/:id',
        component: Car,
        children:[
            {
                path: 'full', // localhost:8080/car/10/full
                component: CarFull,
                name: 'Carful',
                beforeEnter(to, from, next){
                    if(true){
                        next(true)
                    } else{
                        next(false)
                    }
                }
            }
        ]
    },
    {
        path: '/none', 
        //redirect: '/Cars'
        redirect: {
            name: 'cars'
        }
    },
    {
        path: '*', 
        component: ErrorComp
    }
]