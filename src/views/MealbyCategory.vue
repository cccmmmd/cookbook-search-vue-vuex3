<template>
	<div class="p-8 pt-3">
		<a @click="goBack" class="text-yellow-700 block py-2 cursor-pointer">
			< 上一頁</a
		>
		<h1 class="text-4xl font-bold mb-0 text-yellow-700">
			{{ route.params.category }} 下有：
		</h1>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
			<Mealitem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
		</div>
	</div>
</template>
<script setup>
import { computed, onMounted } from "vue";
import store from "../store";
import { useRoute, useRouter } from "vue-router";
import Mealitem from "../components/Mealitem.vue";

const route = useRoute();
const router = useRouter();
const meals = computed(() => store.state.mealsbyCategory);


onMounted(() => {
	store.dispatch("searchMealsbyCategory", route.params.category);
});

const goBack = () => {
	//  數字 -1 代表返回上一步
	router.go(-1);
};
</script>
<style></style>
