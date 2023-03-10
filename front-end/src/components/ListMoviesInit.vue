<template>
    <main>
        <div class="container-fluid p-0 mt-2">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div id="myCarousel" class="carousel slide container" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <template v-for="item in dados.results" :key="item.id">
                                    <div class="col-auto px-2">
                                        <div class="container">
                                            <div class="cellphone-container">
                                                <div class="movie">
                                                    <img class="movie-img" :src="imgAPI + item.poster_path" :alt="item.title" />
                                                    <div class="text-movie-cont">
                                                        <div class="mr-grid">
                                                            <div class="col1">
                                                                <p class="movie-description">A group of elderly people are
                                                                    giving interviews about having lived in a climate of
                                                                    crop blight and constant dust reminiscent of The Great
                                                                    Depression of the 1930's. The first one seen is an
                                                                    elderly woman stating her father was a farmer, but did
                                                                    not start out that way. </p>
                                                            </div>
                                                        </div>
                                                        <div class="mr-grid actors-row">
                                                            <div class="col1">
                                                                <p class="movie-actors">Matthew McConaughey, Anne Hathaway,
                                                                    Jessica Chastain</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="prev" @click="nextSlide(false)">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel"
                            data-bs-slide="next" @click="nextSlide(true)">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <slot></slot>
</template>

<style scope>
@import "../assets/StyleCarrusel.css";
@import "../assets/StyleCardMovie.css";
</style>

<script>
import axios from 'axios'
export default {
    nama: 'ListMoviesInit',
    data() {
        return {
            imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPI: import.meta.env.VITE_API,
            apiKey: import.meta.env.VITE_API_KEY,
            dados: [],
        }
    },
    mounted() {
        this.loadList();
    },
    methods: {
        async loadList() {
            await axios.get(this.urlAPI + 'top_rated?' + this.apiKey)
                .then(response => {
                    this.dados = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
        nextSlide(tipo) {
            const carousel = document.querySelector('.carousel');
            const slides = document.querySelector('.carousel-inner');
            const slideWidth = slides.querySelector('.carousel-item').offsetWidth;
            const maxOffset = slides.scrollWidth - carousel.offsetWidth;
            const currentOffset = slides.scrollLeft;
            let newOffset = null;
            if (tipo) {
                newOffset = Math.min(currentOffset + slideWidth, maxOffset);
            } else if (!tipo) {
                newOffset = Math.min(currentOffset - slideWidth, maxOffset);
            }
            slides.scrollTo({
                left: newOffset,
                behavior: 'smooth'
            });

        },
    },
}
</script>