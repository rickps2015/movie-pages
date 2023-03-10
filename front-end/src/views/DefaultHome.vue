<template>
    <header-layout>
        <div class="container-fluid">
            <ListMoviesInit/>
            <div class="row text-vt-c-primary">
                Contéudo da página Teste 01
            </div>
        </div>
    </header-layout>
</template>

<script>
import ListMoviesInit from '../components/ListMoviesInit.vue'
export default {
    components: {
        ListMoviesInit
    },
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>