<template>
    <div class="row justify-content-end">
        <div class="col-auto">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/Pagination.css';
</style>

<script>
import axios from 'axios';
export default {
    name: "Pagination",
    data() {
        return {
            dados: {},
            urlAPI: import.meta.env.VITE_API,
            // imgAPI: import.meta.env.VITE_API_IMAGE,
            // urlAPISearchMovie: import.meta.env.VITE_API_SEARCH_MOVIE,
            // apiKey: import.meta.env.VITE_API_KEY,
            // language: import.meta.env.VITE_LANG,
        }
    },
    mounted() {
    },
    methods: {
        async atualizacaoPage() {
            this.loading = true;
            await axios.get(this.urlAPI + 'variavel a ser recebida de paginação, saber qual é o tipo de pesquisa' + '?' + this.apiKey + this.language)
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