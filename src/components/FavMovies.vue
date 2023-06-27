<template>
    <div className="favorites ">
        <h1 className="favorites__header textHeader">
            favorites
        </h1>
        <div v-if="favorites.length === 0" className="favorites__none">
            There is nothing here yet
        </div>
        <div className="favorites__list">
            <SmallCard v-for="movie in favorites" :key="movie.id" :movie="movie"/>
        </div>
    </div>
</template>




<script setup>
import { ref } from 'vue'

import { useFavoritesStore } from '../store/FavoritesStore'
import SmallCard from './SmallCard.vue'

let favorites = useFavoritesStore().favorites;

</script>

<style lang="scss" scoped>
    .favorites {
        background-color: var(--color-accent-background);
        min-height: 100vh;

        &__header {
            text-transform: uppercase;
            margin-bottom: 50px;
        }

        &__none {
            color: var(--color-white);
            font-style: normal;
            font-size: 38px;
            text-align: center;
        }

        &__list {
            display: grid;
            margin: 0 90px;
            grid-template-columns: repeat(2, 50%);
            justify-items: center;
        }
    }

</style>