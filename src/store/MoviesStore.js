import { ref, watch } from 'vue';
import { defineStore } from "pinia";

export const useMoviesStore = defineStore('MoviesStore', () => {
    const movies = ref([
        {
            "id": 1143242,
            "name": "Джентльмены",
            "description": "Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.",
            "year": 2019,
            "alternativeName": "The Gentlemen",
            "shortDescription": "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням",
            "poster": "https://st.kp.yandex.net/images/film_big/1143242.jpg",
            "smallPoster": "/posters/1.png",
            "raiting": 7.8,
            "genre": "криминал, комедия, боевик",
            "tagline": "Criminal. Class.",
            "screencap": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/bf89f1c6-ee08-40ec-a8d8-5dead13790d9/orig",
            "inFav": false,
            "userRaiting": ""
        },
        {
            "id": 1318972,
            "name": "Гнев человеческий",
            "description": "Грузовики лос-анджелесской инкассаторской компании Fortico Security часто подвергаются нападениям, и во время очередного ограбления погибают оба охранника. Через некоторое время в компанию устраивается крепкий немногословный британец Патрик Хилл. Он получает от босса прозвище Эйч и, впритык к необходимому минимуму пройдя тесты по фитнесу, стрельбе и вождению, отправляется на первое задание. Вскоре и его грузовик пытаются ограбить вооруженные налётчики, но Эйч в одиночку расправляется с целой бандой и становится героем. Кажется, слава и уважение коллег его совершенно не интересуют, ведь он преследует свои цели.",
            "year": 2021,
            "alternativeName": "Wrath of Man",
            "shortDescription": "Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе",
            "poster": "https://st.kp.yandex.net/images/film_big/1318972.jpg",
            "smallPoster": "/posters/2.png",
            "raiting": 7.1,
            "genre": "боевик, триллер",
            "tagline": "",
            "screencap": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/63887619-6fed-4aa7-86a5-e5be51a59941/3840x",
            "inFav": false,
            "userRaiting": ""
            
        },
        {
            "id": 835086,
            "name": "Ford против Ferrari",
            "description": "В начале 1960-х Генри Форд II принимает решение улучшить имидж компании и сменить курс на производство более модных автомобилей. После неудавшейся попытки купить практически банкрота Ferrari американцы решают бросить вызов итальянским конкурентам на трассе и выиграть престижную гонку 24 часа Ле-Мана. Чтобы создать подходящую машину, компания нанимает автоконструктора Кэррола Шэлби, а тот отказывается работать без выдающегося, но, как считается, трудного в общении гонщика Кена Майлза. Вместе они принимаются за разработку впоследствии знаменитого спорткара Ford GT40.",
            "year": 2019,
            "alternativeName": "Ford v Ferrari",
            "shortDescription": "Автоконструктор и строптивый гонщик против непобедимых конкурентов. Биографическая драма о любви к скорости",
            "poster": "https://st.kp.yandex.net/images/film_big/835086.jpg",
            "smallPoster": "/posters/3.png",
            "raiting": 8.1,
            "genre": "биография, спорт, драма, боевик",
            "tagline": "They took the American dream for a ride.",
            "screencap": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/fd138781-dbae-40b1-b197-9aea906c171b/3840x",
            "inFav": false,
            "userRaiting": ""
        },
        {
            "id": 1153242,
            "name": "Престиж",
            "description": "Роберт и Альфред - фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну.\n\nОни готовы на все, чтобы выведать друг у друга секреты фантастических трюков и сорвать их исполнение. Непримиримая вражда, вспыхнувшая между ними, начинает угрожать жизни окружающих их людей…",
            "year": 2006,
            "alternativeName": "The Prestige",
            "shortDescription": "Вражда двух иллюзионистов выходит на новый уровень. Фильм Кристофера Нолана с Дэвидом Боуи в роли Николы Теслы",
            "poster": "https://st.kp.yandex.net/images/film_big/195334.jpg",
            "smallPoster": "/posters/4.png",
            "raiting": 8.5,
            "genre": "триллер, фантастика, драма, детектив",
            "tagline": "A Friendship That Became a Rivalry.",
            "screencap": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/278d0c54-90ec-4666-ab04-bc6cbe88813d/3840x",
            "inFav": false,
            "userRaiting": ""
        }
    ]);

    const moviesInLocalStorage = localStorage.getItem("movies");
    if (moviesInLocalStorage) {
        movies.value = JSON.parse(moviesInLocalStorage)._value;
    }

    const userRaiting = (obj) => {
        let pos = movies.value.findIndex(el => Number(el.id) === Number(obj.id));
        movies.value[pos].userRaiting = obj.raiting; 
    };

    watch ( () => movies, (state) => {
        localStorage.setItem("movies", JSON.stringify(state));
    },{ deep: true });

    return {
        movies, userRaiting
    }
})