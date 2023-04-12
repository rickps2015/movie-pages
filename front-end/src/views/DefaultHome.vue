<template>
    <header-layout>
        <div class="container-fluid">
            <ListMoviesInit/>
        </div>
    </header-layout>
</template>

<script>
import ListMoviesInit from '../components/ListMoviesInit.vue'
import { mapWritableState } from 'pinia';
import {stateCustom} from '../stores/stateCustom';
export default {
    components: {
        ListMoviesInit
    },
    data() {
        return {
            
        }
    },
    computed: {
        ...mapWritableState(stateCustom, ['input_pesquisa'])
    },
    mounted() {
        
    },
    methods: {
        
    },
}
</script>