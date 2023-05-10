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
                    <img v-if="dados.backdrop_path != null && dados.backdrop_path != undefined"
                        :src="imgAPI + dados.backdrop_path" alt="cover" class="blur_back" />
                    <img v-else :src="imgAPI + dados.poster_path" alt="cover" class="blur_back" />
                </div>
                <div class="col-3">
                    <div class="card">
                        <img src="https://images.unsplash.com/photo-1656618020911-1c7a937175fd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTc1MzQyNTE&ixlib=rb-1.2.1&q=80"
                            alt="">
                        <div class="card-content">
                            <h2>
                                Card Heading
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt exercitationem iste,
                                voluptatum, quia explicabo laboriosam rem adipisci voluptates cumque, veritatis atque
                                nostrum
                                corrupti ipsa asperiores harum? Dicta odio aut hic.
                            </p>
                            <a href="#" class="button">
                                Find out more
                                <span class="material-symbols-outlined">
                                    arrow_right_alt
                                </span>
                            </a>
                        </div>
                    </div>
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
    beforeMount() {
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