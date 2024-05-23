<template>
    <div class="max-w-[800px] mx-auto py-4">

        <h1 class=" text-5xl font-bold my-5">{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-100">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong>Category</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong>Area</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags</strong> {{ meal.strTags }}
            </div>
        </div>
        <div class="my-3">
            {{ meal.strInstructions }}
        </div>
        <div class="grid grid-cols-4">
            <div>
                <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
                <ul>
                    <template v-for="n in 20" :key="n">
                        <li v-if="meal[`strIngredient${n}`]">
                            {{n}}. {{ meal[`strIngredient${n}`] }}
                        </li>
                    </template>
                </ul>
                
            </div>

            <div>
                <h2 class="text-2xl font-semibold mb-3">Measures</h2>
                <ul>
                    <template v-for="n in 20" :key="n">
                        <li v-if="meal[`strMeasure${n}`] && meal[`strMeasure${n}`]!== ' '">
                            {{ meal[`strMeasure${n}`] }}
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="mt-4">
            <YoutubeButton :href="meal.strYoutube">Go To Youtube</YoutubeButton>
            <a :href="meal.strSource" target="_blank" class="ml-3 px-3 py-2 rounded text-indigo-600 border-2 border-indigo-400 hover:bg-indigo-400 hover:text-white ">
                View orginal Source
            </a>
        </div>
       
    </div>
</template>
<script setup>
import { onMounted, ref} from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient'
import YoutubeButton from '../components/YoutubeBtn.vue';

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {}
        // commit('setSearchMeals', data.meals)
    })
})

</script>
