<template>
    <header class="bg-white shadow-md h-24 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center px-5">
      Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center  px-2 h-full translation-colors hover:bg-purple-100">Search Meals</router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-2 h-full translation-colors hover:bg-purple-100">Meals by letter</router-link>
        <router-link :to="{name: 'byIngredient'}" class="inline-flex items-center px-2 h-full translation-colors hover:bg-purple-100">Meals by ingredients</router-link>
      </div>
    </header>
</template>