<template>
    <main>
        <header-layout>
            <div class="container-fluid p-0">
                <template v-if="loading">
                    <font-awesome-icon class="ms-4 mt-2 text-danger" icon="fa-solid fa-spinner" spin
                        style="font-size: 2rem" />
                </template>
                <div v-if="!loading" class="movie_card" id="bright">
                    <div class="info_section">
                        <div class="movie_header">
                            <img :src="imgAPI + dados.poster_path" alt="cover" class="locandina" />
                            <h1>{{ dados.title }}</h1>
                            <h4>({{ release_date }})</h4>
                            <span class="minutes">{{ dados.runtime }} min</span>
                            <div class="type" v-for="item in dados.genres" :key="item.id">
                                {{ item.name }}
                            </div>
                            <div class="text-warning mt-2">
                                <font-awesome-icon icon="fa-solid fa-star text-warning" />
                                {{ dados.vote_average }}
                            </div>
                        </div>
                        <div class="movie_desc">
                            <p class="text">
                                {{ dados.overview }}
                            </p>
                        </div>
                    </div>
                    <img :src="imgAPI + dados.backdrop_path" alt="cover" class="blur_back" />
                </div>
            </div>
        </header-layout>
    </main>
    <slot></slot>
</template>

<style scoped>
@import "../assets/DetailsMovie.css";
</style>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            id: null,
            imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPI: import.meta.env.VITE_API,
            apiKey: import.meta.env.VITE_API_KEY,
            language: import.meta.env.VITE_LANG,
            dados: {},
            release_date: '',
            loading: false,
        }
    },
    created() {
        this.id = this.$route.params.id || 0;
    },
    mounted() {
        this.getMovie();
    },
    methods: {
        async getMovie() {
            this.loading = true;
            await axios.get(this.urlAPI + '/' + this.id + '?' + this.apiKey + '&append_to_response=credits' + this.language)
                .then(response => {
                    this.dados = response.data;
                    this.release_date = this.dados.release_date.slice(0, 4);
                })
                .catch(error => {
                    console.log(error)
                })
            this.loading = false;
        }
    },
}
</script>