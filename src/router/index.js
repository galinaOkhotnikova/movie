import { createRouter, createWebHistory } from 'vue-router'

import Error404 from '../components/Error404.vue'
import MoviesList from '../components/MoviesList.vue'
import FullCard from '../components/FullCard.vue'
import FavMovies from '../components/FavMovies.vue'
import RatedMovies from '../components/RatedMovies.vue'

const routes = [
    {
        path: '',
        redirect: {name: 'main'}
    },
    {
        path: '/', 
        name: 'main',
        component: MoviesList
    },
    {
		path: '/movie/:id',
        name: 'movie',
		component: FullCard,
        props: true
	},
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: Error404
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavMovies
    },
    {
        path: '/rated',
        name: 'rated',
        component: RatedMovies
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.resolve({
    name: 'not-found',
    params: { pathMatch: ['not', 'found'] },
}).href 

export default router


