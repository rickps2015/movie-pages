<template>
    <main>
        <header-layout>
            <div class="container p-0 mt-2">
                <template v-if="loading">
                    <font-awesome-icon class="ms-4 mt-2 text-danger" icon="fa-solid fa-spinner" spin
                        style="font-size: 2rem" />
                </template>
                <div v-if="!loading && dados.total_results > 0" class="row justify-content-center mt-3">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 text-start">
                                <h3 class="text-start">Resultados de Pesquisa: <span class="text-warning fw-bolder">{{ input_pesquisa }}</span></h3>
                            </div>
                        </div>
                        <div class="row d-flex align-items-center justify-content-center">
                            <template v-for="item in dados.results" :key="item.id">
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
                        <div class="row justify-content-center mt-5 mb-3">
                            <div class="col-auto">
                                <Pagination :total-pages="dados.total_pages" :current-page="dados.page"
                                    @page-changed="alterarpage"></Pagination>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="!loading && dados.total_results == 0">
                    <div class="row mt-5">
                        <div class="col-12 text-center">
                            <h3 class="text-danger">Sem resultados para esta pesquisa <br> <span class="text-warning fw-bolder"> {{ input_pesquisa }} </span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </header-layout>
    </main>
    <slot></slot>
</template>

<style scoped></style>

<script>
// Importação de Componentes
import axios from 'axios';
import Pagination from '../components/Pagination.vue';
import { mapState } from 'pinia';
import { useStore } from '../components/storage';
export default {
    components: { Pagination },
    name: "PageSearch",
    computed: {
        ...mapState(useStore, ['input_pesquisa']),
    },
    watch: {
        input_pesquisa: {
            async handler(newValue, oldValue) {
                await this.pesquisa();
            },
            deep: true
        }
    },
    data() {
        return {
            loading: false,
            page: 0,
            dados: {},
            imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPISearchMovie: import.meta.env.VITE_API_SEARCH_MOVIE,
            apiKey: import.meta.env.VITE_API_KEY,
            language: import.meta.env.VITE_LANG,
        }
    },
    async created() {
        this.page = 0;
        await this.pesquisa();
    },
    methods: {
        // Pesquisa Filmes
        async pesquisa() {
            let data = {};
            if (this.page != 0) {
                data = this.urlAPISearchMovie + '?' + this.apiKey + this.language + '&query=' + this.input_pesquisa + '&page=' + this.page;
            } else {
                data = this.urlAPISearchMovie + '?' + this.apiKey + this.language + '&query=' + this.input_pesquisa;
            }
            this.loading = true;
            await axios.get(data)
                .then(response => {
                    this.dados = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            this.loading = false;
        },
        // Alterar a página
        async alterarpage(page) {
            this.page = page;
            await this.pesquisa();
        }
    },
}
</script>