import { ref, watch } from 'vue';
import { defineStore } from "pinia";

import { useMoviesStore } from './moviesStore'

export const useFavoritesStore = defineStore('FavoritesStore', () => {
    const favorites = ref([]);
    
    const favoritesInLocalStorage = localStorage.getItem("favorites");
    if (favoritesInLocalStorage) {
        favorites.value = JSON.parse(favoritesInLocalStorage)._value;
    }

    const addToFavorites = (movie) => {
        const moviesStore = useMoviesStore();
        favorites.value.push(movie);
        let pos = moviesStore.movies.findIndex(el => Number(el.id) === Number(movie.id));
        moviesStore.movies[pos].inFav = true;
    };

    const deleteFromFavorites = (movie) => {
        const moviesStore = useMoviesStore();
        let pos = favorites.value.findIndex(el => Number(el.id) === Number(movie.id));
        if (pos !== -1) {
            favorites.value.splice(pos, 1);
        }

        let pos2 = moviesStore.movies.findIndex(el => Number(el.id) === Number(movie.id));
        moviesStore.movies[pos2].inFav = false;
    }

    watch ( () => favorites, (state) => {
        localStorage.setItem("favorites", JSON.stringify(state));
    },{ deep: true });

    return {
        favorites, 
        addToFavorites,
        deleteFromFavorites
    }
})