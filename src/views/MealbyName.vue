<template>
    <div class="p-8 pb-2">
        <input type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="搜尋料理"
        @change="searchMeals"/>
    </div>
    <div class="grid grid-cols-1 md: grid-cols-3 gap-5 p-5">
        <div v-for="meal of meals" :key="meal.idMeal" class=" bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" alt="meal.strMeal" class=" rounded-t-xl w-full h-52 object-cover">
            </router-link>
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4"> delicious meal delicious meal delicious meal delicious meal </p>
            <div class="py-3 flex justify-between">
                <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-400 hover:bg-red-400 hover:text-white ">Youtube</a>
                <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="px-3 py-2 rounded border-2 border-blue-400 hover:bg-blue-400 ">View</router-link>
            </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {computed, ref, onMounted} from 'vue'
import {useRoute} from "vue-router"
import store from '../store'


const route = useRoute() 
const keyword = ref('')
const meals = computed(() => 
    store.state.searchMeals
)

function searchMeals(params) {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(()=> {
   keyword.value = route.params.name
   if(keyword.value) {
    searchMeals()
   }
})
</script>
<style>
</style>
