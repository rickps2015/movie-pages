<template>
    <div class="container-fluid cabecalho-fixo p-0">
        <div class="row p-0 m-0 bg-color-primary justify-content-center">
            <div class="col-12 py-3">
                <nav class="container-fluid">
                    <div class="row justify-content-center">
                        <!-- Icone e rota Home -->
                        <div class="col-auto"><router-link class="fw-bold" style="font-size: 1.2rem;"
                                to="/"><font-awesome-icon icon="fa-solid fa-house" /></router-link></div>
                        <!-- Campo de pesquisa -->
                        <div class="col-auto">
                            <div class="btn-group m-0 p-0">
                                <input type="text" class="form-control rounded-pill border-0 mx-1" placeholder="Search Movie"
                                    v-model="input_pesquisa" style="width: 30rem" @keypress.enter="pesquisa">
                            </div>
                        </div>
                        <!-- Trocar de tema (Dark-Light) -->
                        <div class="col-auto"><router-link class="fw-bold" style="font-size: 1.2rem;"
                                to="/about">About</router-link></div>
                        <div class="col-auto" style="font-size: 1.2rem;">
                            <button class="themes" @click="toggleTheme" aria-label="Toggle themes">
                                <span v-if="theme == 'darkMode'"><font-awesome-icon icon="fa-solid fa-moon"
                                        class="text-danger" /></span>
                                <span v-else><font-awesome-icon icon="fa-solid fa-sun" class="text-warning" /></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <slot></slot>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useStore } from './storage'
export default {
    data() {
        return {
            theme: '',
            // input_pesquisa: '',
        }
    },
    computed: {
        ...mapWritableState(useStore, ['input_pesquisa']),
    },
    mounted() {
        let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
        this.theme = localTheme; //sets theme value
        document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
    },
    methods: {
        pesquisa() {
            console.log("Teste: " + this.input_pesquisa);
            
            // Verificar se esta página é a atual
            if (this.$route.name != 'PageSearch') {
                this.$router.push({ name: 'PageSearch' });
            }
        },
        toggleTheme() {
            this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // updates the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value in local storage
        }
    },
}
</script>