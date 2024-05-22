<template>
    <div>
        <pre>
            {{  meal }}
        </pre>
    </div>
</template>
<script setup>
import { onMounted, ref} from 'vue';
import {useRoute} from 'vue-router';
import axiosClient from '../axiosClient'

const route = useRoute()
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${router.params.id}`)
    .then(({data}) => {
        commit('setSearchMeals', data.meals)
    })
})

</script>
