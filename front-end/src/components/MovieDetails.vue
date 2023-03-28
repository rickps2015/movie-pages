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
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=1027">
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Michele Miller</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin"
                                            aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=839">
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Patricia Knott</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin"
                                            aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=856">
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Justin Ramos</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin"
                                            aria-hidden="true"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://picsum.photos/130/130?image=836">
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Mary Huntley</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus"
                                            aria-hidden="true"></a></li>
                                    <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin"
                                            aria-hidden="true"></a></li>
                                </ul>
                            </div>
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
@import "../assets/profiles.css";
</style>

<script>
import axios from 'axios'
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
            urlYoutube: 'https://www.youtube.com/watch?v=',
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