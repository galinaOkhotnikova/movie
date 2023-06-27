<template>
    <div className="Card">
        <div className="Card__wrapper" :style="{ 'background-image': `url('${movie.screencap}')` }"></div>
        <div className="Card__left">
            <img :src=movie.poster alt="Poster" />
        </div>
        <div className="Card__right">
            <h1 className="Card__right-name textHeader"> {{ movie.name }} ({{ movie.year }})</h1>
            <p className="Card__right-altName">{{ movie.alternativeName }}</p>
            <p className="Card__right-tagline"> {{ movie.tagline }}</p>
            <p className="Card__right-genre"> {{ movie.genre }}</p>
            <p className="Card__right-raiting"> Raiting: {{ movie.raiting }} 
                <span v-if="movie.userRaiting">
                    Your raiting: {{ movie.userRaiting }}
                </span>
            </p>
            <p className="Card__right-description"> {{ movie.description }}</p>
            <div className="Card__right-wrapperBtn">
                <button className="Card__right-wrapperBtn-btn button"> Watch </button>
                <button @click="!movie.inFav ? FavStore.addToFavorites(movie) : FavStore.deleteFromFavorites(movie)" 
                    className = "Card__right-wrapperBtn-fav">
                    <img :src="!movie.inFav ?  '/images/addFav.svg' : '/images/inFav.svg'" alt="Favorites"/>
                </button>
                <button v-if="!evaluation" className="Card__right-wrapperBtn-raiting" @click="onCickevaluation()">
                        <img src="/images/raiting.svg" alt="Raiting"/>
                </button>
                <div v-else className="Card__right-wrapperBtn-dropdown">
                    <button v-for="i in raiting" :key="i"
                        @click="MoviesStore.userRaiting({ id: movie.id, raiting: i }), onCickevaluation(), RatedStore.addToRated(movie)">
                        {{ i }}
                    </button>
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useMoviesStore } from '../store/moviesStore'
import { useFavoritesStore } from '../store/FavoritesStore'
import { useRatedStore } from '../store/RatedStore'

let raiting = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let evaluation = ref(false);
const props = defineProps({
    id: {
        type: String,
        reqiered: true,
        default: "0"
    }
})
const movies = useMoviesStore().movies;
const FavStore = useFavoritesStore();
const MoviesStore = useMoviesStore();
const RatedStore = useRatedStore();
const movie = movies.find(movie => movie.id == props.id);

function onCickevaluation() {
    evaluation.value = !evaluation.value;
}

</script>

<style lang="scss" scoped>
    .Card {
        background-color: var(--color-background);
        width: 100vw;
        height: 105vh;
        position: relative;
        display: flex;
        justify-content: space-between;


        &__wrapper {
            position: relative;
            width: 100vw;
            height: 105vh;
            background-size: cover;
            display: flex; 
            opacity: 0.3;
        }

        &__left {
            position: absolute;
            top: 60px;
            left: 60px;
            width: 438px;
            height: 550px;
            background-color: var(--color-background);
            border-radius: 20px;
            img {
                width: 438px;
                height: auto;
                border-radius: 20px;
            }
        }
        
        &__right {
            width: 50%;
            font-family: var(--font-base);
            position: absolute;
            top: 60px;
            right: 60px;
            display: flex;
            flex-direction: column;
            color: var(--color-white);

            &-name {
                text-align: left;
                font-style: normal;
                font-weight: 700;
                font-size: 48px;
            }

            &-altName {
                font-style: normal;
                opacity: 0.8;
                font-size: 20px;
            }

            &-tagline {
                font-style: normal;
                font-weight: 700;
                font-size: 24px;
            }
            
            &-raiting {
                font-style: normal;
                font-weight: 600;
                font-size: 20px;

                span {
                    margin-left: 60px;
                }
            }

            &-genre {
                font-style: italic;
                font-weight: 500;
                font-size: 20px;
            }

            &-description {
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 38px;
            }

            &-wrapperBtn {
                margin-top: 10px;
                display: flex;
                justify-content: center;
                margin-left: -30px;

                &-fav, &-raiting {
                    margin-left: 30px;
                    background: var(--color-light-grey);
                    border-radius: 50px;
                    width: 59px;
                    height: 59px;
                    border: none;
                    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

                    &:hover {
                        background: lighten($color: #3F3D3D, $amount: 5%);
                        transform: translateY(-7px);
                    }
                }

                &-dropdown {
                    margin-left: 30px;
                    width: 300px;
                    border-radius: 50px;
                    background: var(--color-light-grey);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 20px;
                    padding-left: 20px;

                    button {
                        border: none; 
                        outline: none;
                        background: none;
                        color: rgb(136, 136, 136);
                        font-size: 20px;
                        font-weight: bold;
                        transition: color 0.2s ease-in-out;
                        
                        &:hover {  
                            color: var(--color-yellow);
                        }       
                    }
                }
            }
        }
    }

.slide-enter {}

.slide-enter-active {
    animation: slideIn 0.5s;
}

.slide-enter-to {}

.slide-leave {}

.slide-leave-active {
    animation: slideOut 0.5s;
}

.slide-leave-to {}

@keyframes slideIn {
    from {
        transform: rotateY(90deg);
    }

    to {
        transform: rotateY(0deg);
    }
}

@keyframes slideOut {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(90deg);
    }
}    
</style>

