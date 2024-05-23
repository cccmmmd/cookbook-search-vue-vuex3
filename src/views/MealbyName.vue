<template>
    <div class="p-8 pb-2">
        <input type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-200 w-full" 
        placeholder="搜尋料理"
        @change="searchMeals('all')"/>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
</template>
<script setup>
import {computed, ref, onMounted} from 'vue'
import {useRoute} from "vue-router"
import store from '../store'
import Mealitem from '../components/Mealitem.vue'


const route = useRoute() 
const keyword = ref('')
const meals = computed(() => 
    store.state.searchMeals
)

function searchMeals(params) {
    store.dispatch('searchMeals', keyword.value? keyword.value : params )
}

onMounted(()=> {
   keyword.value = route.params.name
   searchMeals('all')
})
</script>
<style>
</style>
