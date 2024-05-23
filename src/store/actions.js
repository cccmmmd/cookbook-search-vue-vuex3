import axiosClient from '../axiosClient'

export function searchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        commit('setSearchMeals', data.meals)
    })
}

export function searchMealsbyLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({data}) => {
        commit('setMealsbyLetter', data.meals)
    })
}

export function searchMealsbyIngredient({commit}, ing){
    axiosClient.get(`filter.php?i=${ing}`)
    .then(({data}) => {
        commit('setMealsbyIngredient', data.meals)
    })
}