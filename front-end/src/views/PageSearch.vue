<template>
    <main>
        <header-layout @dadosRecebidos="receberDados">
            <div class="container p-0 mt-2">
                <template v-if="loading">
                    <font-awesome-icon class="ms-4 mt-2 text-danger" icon="fa-solid fa-spinner" spin
                        style="font-size: 2rem" />
                </template>
                <div v-if="!loading" class="row justify-content-center mt-3">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 text-start">
                                <h3 class="text-start">Resultados de Pesquisa</h3>
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
                        <div class="row justify-content-end">
                            <div class="col-auto">
                                <Pagination :total-pages="dados.total_pages" :current-page="dados.page"
                                    @page-changed="alterarpage"></Pagination>
                            </div>
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
import axios from 'axios';
import Pagination from '../components/Pagination.vue';
export default {
    components: { Pagination },
    emits: ['dadosRecebidos'],
    name: "PageSearch",
    data() {
        return {
            loading: false,
            page: 0,
            dados: {},
            input_pesquisa: '',
            imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPISearchMovie: import.meta.env.VITE_API_SEARCH_MOVIE,
            apiKey: import.meta.env.VITE_API_KEY,
            language: import.meta.env.VITE_LANG,
        }
    },
    mounted() {
        this.page = 0;
        this.input_pesquisa = history.state.dados || {};
        this.pesquisa();
    },
    methods: {
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
        receberDados(dados) {
            this.input_pesquisa = dados;
            this.pesquisa();
        },
        async alterarpage(page) {
            this.page = page;
            this.pesquisa();
        }
    },
}
</script>