<template>
    <div class="flex gap-2 justify-center mt-3">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" 
        :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
    </div>
</template>
<script setup>
import { computed, onMounted, watch } from 'vue';
import {useRoute} from 'vue-router';
import store from '../store'
import Mealitem from '../components/Mealitem.vue'

const route = useRoute()
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const meals = computed(()=> store.state.mealsbyLetter)



watch(route, ()=>{
    store.dispatch('searchMealsbyLetter', route.params.letter )
})

onMounted(()=>{
    store.dispatch('searchMealsbyLetter', 'A')
})


</script>
<style>
</style>
