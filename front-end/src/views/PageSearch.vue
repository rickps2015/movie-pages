<template>
    <main>
        <header-layout @dadosRecebidos="receberDados">
            <div class="container-fluid p-0">
                <div class="row">
                    <template v-for="item in dados.results" :key="item.id">
                        <div v-if="item.poster_path != null" class="col-auto py-2 px-1 movie-img">
                            <router-link :to="{ name: 'details', params: { id: item.id } }">
                                <img class="rounded-4" :src="imgAPI + item.poster_path" :alt="item.title"
                                    :title="item.title" style="width: 200px;" /><br>
                                <span class="text-warning">
                                    <font-awesome-icon icon="fa-solid fa-star" />
                                    {{ item.vote_average }}
                                </span>
                            </router-link>
                        </div>
                    </template>
                </div>
                <!-- {{ input_pesquisa }}
                Teste: <br>
                {{ dados }} -->
            </div>
        </header-layout>
    </main>
    <slot></slot>
</template>

<style scoped></style>

<script>
import axios from 'axios';
export default {
    name: "PageSearch",
    data() {
        return {
            dados: {},
            input_pesquisa: '',
            imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPISearchMovie: import.meta.env.VITE_API_SEARCH_MOVIE,
            apiKey: import.meta.env.VITE_API_KEY,
            language: import.meta.env.VITE_LANG,
        }
    },
    mounted() {
        this.input_pesquisa = history.state.dados || {};
        this.pesquisa();
    },
    methods: {
        async pesquisa() {
            this.loading = true;
            await axios.get(this.urlAPISearchMovie + '?' + this.apiKey + this.language + '&query=' + this.input_pesquisa)
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
        }
    },
}
</script>