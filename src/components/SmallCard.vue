<template>
    <router-link :to="{
        name: 'movie',
        path: '/movie/' + movie.id,
        params: { id: movie.id}
    }">
    <a href="#" className="smallCard">
            <img className="smallCard__img" :src=movie.smallPoster alt="Poster"/>
            <span className="smallCard__img-mask">
                <span className="smallCard__name textHeader">{{ movie.name }} {{ movie.year }}</span>
                <p className="smallCard__raiting">{{ movie.raiting }}</p>
                <p className="smallCard__description">{{ movie.shortDescription }}</p>
            </span>
        </a>
    </router-link>
</template>

<script setup>

defineProps({
    movie: {
        type: Object,
        required: true,
        default: () => {}
    }
})
</script>

<style lang="scss" scoped>
    .smallCard {
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 90px;

        &__img {
            width: 567px;
            height: 350px;
            border-radius: 20px;

            &-mask {
                position: absolute;
                border-radius: 20px;
                display: flex;
                justify-content: flex-end;
                flex-direction: column;
                align-items: flex-start;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, .6);
                opacity: 0;
                color: #fff;
                transition: opacity .4s linear
            }
            &-mask:hover {
                opacity: 1;
            }
        }

        &__name, &__raiting, &__description {
            font-family: var(--font-base);
            margin-left: 40px;
            margin-right: 40px;
            // color: var(--color-white);
            font-style: normal;
            font-weight: 600;
        }

        &__name {
            font-size: 30px;
            text-transform: uppercase;
        }
        
        &__raiting {
            font-size: 20px;
        }

        &__description {
            font-size: 20px;
        }

        img {
            height: auto;
            width: 567px;
        }

    }

</style>