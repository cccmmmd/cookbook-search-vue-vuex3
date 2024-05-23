import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import GuestLayout from '../components/GuestLayout.vue';
import DefaultLayout from '../components/DefaultLayout.vue'
import MealbyName from '../views/MealbyName.vue';
import MealbyLetter from '../views/MealbyLetter.vue';
import MealbyIngredient from '../views/MealbyIndregient.vue';
import MealDetails from '../views/MealDetails.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealbyName,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealbyLetter,
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealbyIngredient,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            },
        ]
    },
    {
       path: '/guest' ,
       component: GuestLayout,
    }
   
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;