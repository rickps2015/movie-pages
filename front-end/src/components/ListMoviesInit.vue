<template>
    <main>
        <div class="container-fluid p-0 mt-2 mb-4">
            <template v-if="loading">
                <font-awesome-icon class="ms-4 mt-2 text-danger" icon="fa-solid fa-spinner" spin style="font-size: 2rem" />
            </template>
            <div v-if="!loading" class="row justify-content-center">
                <div class="col-auto" v-if="popular.results != undefined">
                    <banner :titulo="popular.results[0].title" :sinopse="popular.results[0].overview" :imagemFundo="imgAPI + popular.results[0].backdrop_path" :capa="imgAPI + popular.results[0].poster_path" :vote_average="popular.results[0].vote_average" :release_date="popular.results[0].release_date.slice(0, 4)"/>
                </div>
                <div class="col-12">
                    <!-- Filmes - Mais Populares -->
                    <div id="myCarousel" class="carousel carousel_popular slide container mt-5" data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Filmes Populares</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'popular')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'popular')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_popular">
                            <div class="carousel-item carousel-item_popular active">
                                <template v-for="item in popular.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto px-1 movie-img py-2">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                            <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                                :title="item.title" style="width: 200px; height: 300px;" /><br>
                                            <span class="text-warning">
                                                <font-awesome-icon icon="fa-solid fa-star text-warning" />
                                                {{ item.vote_average }}
                                            </span>
                                        </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Filmes - Em Breve -->
                    <div id="myCarousel" class="carousel carousel_upcoming slide container mt-5" data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Filmes em Breve</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'upcoming')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'upcoming')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_upcoming">
                            <div class="carousel-item carousel-item_upcoming active">
                                <template v-for="item in upcoming.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto px-1 movie-img py-2">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                            <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                                :title="item.title" style="width: 200px; height: 300px;" /><br>
                                            <span class="text-warning">
                                                <font-awesome-icon icon="fa-solid fa-star" />
                                                {{ item.vote_average }}
                                            </span>
                                        </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Filmes - Em Cartaz -->
                    <div id="myCarousel" class="carousel carousel_now_playing slide container mt-5" data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Filmes em Cartaz</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'now_playing')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'now_playing')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_now_playing">
                            <div class="carousel-item carousel-item_now_playing active">
                                <template v-for="item in now_playing.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto px-1 movie-img py-2">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                            <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                                :title="item.title" style="width: 200px; height: 300px;" /><br>
                                            <span class="text-warning">
                                                <font-awesome-icon icon="fa-solid fa-star text-warning" />
                                                {{ item.vote_average }}
                                            </span>
                                        </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- Filmes - Melhores Avaliados -->
                    <div id="myCarousel" class="carousel carousel_top_rated slide container mt-5" data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Filmes Melhores Avaliados</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'top_rated')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'top_rated')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_top_rated">
                            <div class="carousel-item carousel-item_top_rated active">
                                <template v-for="item in top_rated.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto py-2 px-1 movie-img">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                            <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                                :title="item.title" style="width: 200px; height: 300px;" /><br>
                                            <span class="text-warning">
                                                <font-awesome-icon icon="fa-solid fa-star" />
                                                {{ item.vote_average }}
                                            </span>
                                        </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>



                    <!-- Comentados TVs -->
                    <!-- Tv - Melhores Avaliados -->
                    <!-- <div id="myCarousel" class="carousel carousel_tv_top_rated slide container mt-5"
                        data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Programas de TV Mais Avaliados</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'tv_top_rated')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'tv_top_rated')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_tv_top_rated">
                            <div class="carousel-item carousel-item_tv_top_rated active">
                                <template v-for="item in tv_top_rated.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto px-1 movie-img py-2">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                            <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                                :title="item.name" style="width: 200px; height: 300px;" /><br>
                                            <span class="text-warning">
                                                <font-awesome-icon icon="fa-solid fa-star text-warning" />
                                                {{ item.vote_average }}
                                            </span>
                                        </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div> -->
                    <!-- Tv - No Ar -->
                    <!-- <div id="myCarousel" class="carousel carousel_tv_airing_today slide container mt-5 mb-5"
                        data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Programas de TV no Ar</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'tv_airing_today')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'tv_airing_today')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_tv_airing_today">
                            <div class="carousel-item carousel-item_tv_airing_today active">
                                <template v-for="item in tv_airing_today.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto px-1 movie-img py-2">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                        <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                            :title="item.name" style="width: 200px; height: 300px;" /><br>
                                        <span class="text-warning">
                                            <font-awesome-icon icon="fa-solid fa-star text-warning" />
                                            {{ item.vote_average }}
                                        </span>
                                    </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div> -->
                    <!-- Tv - Programas de TV Mais Populares -->
                    <!-- <div id="myCarousel" class="carousel carousel_tv_popular slide container mt-5" data-bs-ride="carousel">
                        <div class="row justify-content-between">
                            <div class="col-auto">
                                <h3 class="text-start">Programas de TV Mais Populares</h3>
                            </div>
                            <div class="col-auto">
                                <div class="row">
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="prev" @click="nextSlide(false, 'tv_popular')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-left" />
                                        </button>
                                    </div>
                                    <div class="col-auto px-0">
                                        <button class="btn-prev-next" type="button" data-bs-target="#myCarousel"
                                            data-bs-slide="next" @click="nextSlide(true, 'tv_popular')">
                                            <font-awesome-icon icon="fa fa-solid fa-chevron-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-inner carousel-inner_tv_popular">
                            <div class="carousel-item carousel-item_tv_popular active">
                                <template v-for="item in tv_popular.results" :key="item.id">
                                    <div v-if="item.poster_path != null" class="col-auto px-1 movie-img py-2">
                                        <router-link :to="{ name: 'details', params: { id: item.id } }">
                                        <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                            :title="item.name" style="width: 200px; height: 300px;" /><br>
                                        <span class="text-warning">
                                            <font-awesome-icon icon="fa-solid fa-star text-warning" />
                                            {{ item.vote_average }}
                                        </span>
                                    </router-link>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </main>
    <!-- <slot></slot> -->
</template>

<style scope>
@import "../assets/StyleCarrusel.css";
</style>

<script>
import axios from 'axios';
import Pagination from '../components/Pagination.vue';
import { defineComponent } from 'vue';
import Banner from '../components/Banner.vue';

export default defineComponent({
    nama: 'ListMoviesInit',
    components: {
        Pagination,
        Banner
    },
    data() {
        return {
            imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPI: import.meta.env.VITE_API,
            apiKey: import.meta.env.VITE_API_KEY,
            language: import.meta.env.VITE_LANG,
            tvAPI: import.meta.env.VITE_API_TV,
            top_rated: [],
            popular: [],
            upcoming: [],
            now_playing: [],
            tv_top_rated: [],
            tv_popular: [],
            tv_airing_today: [],
            loading: false,
        }
    },
    mounted() {
        this.loadList();
    },
    methods: {
        async loadList() {
            this.loading = true;
            // Filmes
            await axios.get(this.urlAPI + 'top_rated?' + this.apiKey + this.language)
                .then(response => {
                    this.top_rated = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            await axios.get(this.urlAPI + 'popular?' + this.apiKey + this.language)
                .then(response => {
                    this.popular = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            await axios.get(this.urlAPI + 'upcoming?' + this.apiKey + this.language)
                .then(response => {
                    this.upcoming = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            await axios.get(this.urlAPI + 'now_playing?' + this.apiKey + this.language)
                .then(response => {
                    this.now_playing = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            // // TV
            // await axios.get(this.tvAPI + 'top_rated?' + this.apiKey + this.language)
            //     .then(response => {
            //         this.tv_top_rated = response.data
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
            // await axios.get(this.tvAPI + 'popular?' + this.apiKey + this.language)
            //     .then(response => {
            //         this.tv_popular = response.data
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
            // await axios.get(this.tvAPI + 'airing_today?' + this.apiKey + this.language)
            //     .then(response => {
            //         this.tv_airing_today = response.data
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
            this.loading = false;
        },
        nextSlide(tipo, name) {
            const carousel = document.querySelector('.carousel_' + name);
            const slides = document.querySelector('.carousel-inner_' + name);
            const slideWidth = slides.querySelector('.carousel-item_' + name).offsetWidth;
            const maxOffset = slides.scrollWidth - carousel.offsetWidth;
            const currentOffset = slides.scrollLeft;
            let newOffset = null;
            if (tipo) {
                newOffset = Math.min(currentOffset + slideWidth, maxOffset + 20);
            } else if (!tipo) {
                newOffset = Math.min(currentOffset - slideWidth, maxOffset + 20);
            }
            slides.scrollTo({
                left: newOffset,
                behavior: 'smooth'
            });

        },
    },
})
</script>