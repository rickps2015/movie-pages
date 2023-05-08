import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('storage', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            input_pesquisa: '...',
            dados: {},
        }
    },
    actions: {
        update(newValue) {
            this.input_pesquisa = newValue;
            console.log("teste 3");
        }
    },
    watch: {
        async input_pesquisa(input) {
            let urlAPISearchMovie = import.meta.env.VITE_API_SEARCH_MOVIE;
            let apiKey = import.meta.env.VITE_API_KEY;
            let language = import.meta.env.VITE_LANG;
            let data = urlAPISearchMovie + '?' + apiKey + language + '&query=' + input;
            axios.get(data)
                .then(response => {
                    this.dados = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
            console.log("teste 4");
        }
    }
})