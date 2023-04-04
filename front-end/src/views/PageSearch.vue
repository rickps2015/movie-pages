<template>
    <main>
        <header-layout>
            <div class="container-fluid p-0">
                Teste: <br>
                {{ dados }}
            </div>
        </header-layout>
    </main>
    <slot></slot>
</template>

<style scoped>

</style>

<script>
import axios from 'axios';
export default {
    name: "PageSearch",
    data() {
        return {
            dados: {},
            input_pesquisa: '',
            // imgAPI: import.meta.env.VITE_API_IMAGE,
            urlAPISearchMovie: import.meta.env.VITE_API_SEARCH_MOVIE,
            apiKey: import.meta.env.VITE_API_KEY,
            language: import.meta.env.VITE_LANG,
        }
    },
    created() {
        this.input_pesquisa = this.$route.params.dados || {};
    },
    mounted() {
        this.pesquisa();
    },
    methods: {
        async pesquisa(){
            this.loading = true;
            await axios.get(this.urlAPISearchMovie + '?' + this.apiKey + '&query=' + this.input_pesquisa + this.language)
                .then(response => {
                    this.dados = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            this.loading = false;
        },
    },
}
</script>