import { ref, watch } from 'vue';
import { defineStore } from "pinia";

export const useRatedStore = defineStore('RatedStore', () => {
    const rated = ref([]);
    
    const ratedInLocalStorage = localStorage.getItem("rated");
    if (ratedInLocalStorage) {
        rated.value = JSON.parse(ratedInLocalStorage)._value;
    }

    const addToRated = (movie) => {
        rated.value.push(movie);
    };

    watch ( () => rated, (state) => {
        localStorage.setItem("rated", JSON.stringify(state));
    },{ deep: true });

    return {
        rated, 
        addToRated
    }
})