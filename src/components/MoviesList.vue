<template>
    <Header />
    <div className="moviesList">
        <div className="search__section" id="search">
            <h2 className="search__section-header textHeader">
                What are you
                looking for?
            </h2>
            <div className="search__section-wrapper">
                <input className="search__section-input" placeholder="Blade Runner" v-model="search">
            </div>
        </div>
        <div className="list__section" id="movies">
            <h2 className="list__section-header textHeader">
                Movies
            </h2>
            <div className="list__section-sort">
                <span @click="sortByName()">sort by name</span>
                <span @click="sortByYear()">sort by year</span>
            </div>
            <div className="list__section-list">
                <SmallCard v-for="movie in searchMovie()" :key="movie.id" :movie="movie"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import {useMoviesStore} from '../store/moviesStore'
import SmallCard from './SmallCard.vue'
import Header from './Header.vue'

let search = ref("");
let movies = useMoviesStore();

function searchMovie() {
    return movies.movies.filter((movie) => 
    movie.name.toLowerCase().includes(search.value.toLowerCase()));
}

function sortByName() {
    return movies.movies.sort((prev, next) => {
        if (prev.name < next.name) return -1;
        if (prev.name > next.name) return 1
    });
}

function sortByYear() {
    return movies.movies.sort((prev, next) => {
        if (Number(prev.year) < Number(next.year)) return -1;
        if (Number(prev.year) > Number(next.year)) return 1
    });
}

</script>


<style lang="scss" scoped>
    .moviesList {
        color: white;
        position: relative;
        z-index: 1;
    }
    .search__section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 488px;
        background: url('/images/searchBack.png');

        &-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1000px;
            height: 105px;
            border-radius: 30px;
            margin: 1rem 0;
        }

        &-input {
            outline: 0 !important;
            // border-radius: 30px 0 0 30px;
            border-radius: 30px;
            display: inline-block;
            width: 800px;
            height: 90px;
            background-color: var(--color-light-grey);
            padding: 0 1rem;
            font-family: var(--font-base);
            border: none;
            font-size: 36px;
            color: #9E9D9D;

            &:focus {
                border: 2px solid #9E9D9D;
            }
        }

        &-button {
            height: 90px;
            border-radius: 0 30px 30px 0;
        }
    }

    .list__section {
        height: auto;
        background-color: var(--color-background);
        // font-weight: 600;
        font-style: normal;
        display: flex;
        flex-direction: column;

        &-sort {
            display: flex;
            justify-content: center;
            font-style: normal;
            font-family: var(--font-base);
            text-transform: uppercase;
            font-size: 15px;
            margin-bottom: 50px;
            margin-left: -100px;
            span {
                margin-left: 100px;
                cursor: pointer;
                transition: color 0.4s ease-in-out, text-decoration 0.2s ease-in-out;

                &:hover:nth-child(odd) {
                    text-decoration:underline;
                    color: var(--color-red);
                }
                &:hover:nth-child(even) {
                    text-decoration:underline;
                    color: var(--color-blue);
                }
            }
        }

        &-header {
            margin-top: 50px;
            margin-bottom: 5px;
            text-transform: uppercase;
        }

        &-list {
            display: grid;
            margin: 0 90px;
            grid-template-columns: repeat(2, 50%);
            justify-items: center;
        }
    }

</style>