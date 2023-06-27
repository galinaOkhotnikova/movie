<template>
    <div className="rated">
        <h1 className="rated__header textHeader">
            rated movies
        </h1>
        <div v-if="rated.length === 0" className="rated__none">
            There is nothing here yet
        </div>
        <div className="rated__list">
            <SmallCard v-for="movie in rated" :key="movie.id" :movie="movie" />
        </div>
    </div>
</template>




<script setup>
import { ref } from 'vue'

import { useRatedStore } from '../store/RatedStore'
import SmallCard from './SmallCard.vue'

let rated = useRatedStore().rated;

</script>

<style lang="scss" scoped>
.rated {
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
        height: auto;
    }
}
</style>