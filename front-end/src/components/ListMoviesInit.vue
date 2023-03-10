<template>
    <main>
        <div class="container-fluid p-0 mt-2">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="container text-center my-3">
                                <h2 class="font-weight-light">Bootstrap 4 - Multi Item Carousel</h2>
                                <div class="row mx-auto my-auto">
                                    <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
                                        <div class="carousel-inner w-100" role="listbox">
                                            <template v-for="item in dados.results" :key="item.id">
                                                <div class="carousel-item active">
                                                    <div class="col-2">
                                                        <img :src="imgAPI + item.poster_path" :alt="item.title" />
                                                    </div>
                                                </div>
                                                <div class="carousel-item">
                                                    <div class="col-2">
                                                        <img :src="imgAPI + item.poster_path" :alt="item.title" />
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                        <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button"
                                            data-slide="prev">
                                            <span
                                                class="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
                                                aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button"
                                            data-slide="next">
                                            <span
                                                class="carousel-control-next-icon bg-dark border border-dark rounded-circle"
                                                aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <h5 class="mt-2">Advances one slide at a time</h5>
                            </div>
                            <section class="carousel">
                                <template v-for="item in dados.results" :key="item.id">
                                    <div class="col-2 carousel-item-active">
                                        <img :src="imgAPI + item.poster_path" :alt="item.title" />
                                    </div>
                                </template>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <slot></slot>
</template>

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
        }
    },
}
</script>