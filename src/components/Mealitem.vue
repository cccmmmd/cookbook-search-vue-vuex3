<template>
      <div class=" bg-white shadow rounded-xl">
            <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
                <img :src="meal.strMealThumb" alt="meal.strMeal" class=" rounded-t-xl w-full h-52 object-cover">
            </router-link>
            <div class="p-3">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4"> delicious meal delicious meal delicious meal delicious meal </p>
            <div class="py-3 flex justify-between">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
                <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}" class="px-3 py-2 text-blue-600 rounded border-2 border-blue-400 hover:bg-blue-400 hover:text-white">View</router-link>
            </div>
            </div>
        </div>
</template>
<script setup>
import YoutubeButton from '../components/YoutubeBtn.vue'
const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})
</script>