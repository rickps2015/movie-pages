<template>
    <main>
        <header-layout>
            <div class="container-fluid p-0">
                <div class="movie-card">
                    <div class="wallpaper">
                        <img :src="imgAPI + dados.backdrop_path" alt="cover" style="width: 1400px;" class="cover" />
                    </div>
                    <div class="container">
                        <img :src="imgAPI + dados.poster_path" alt="cover" style="width: 200px;" class="cover" />
                        <!-- <div class="hero">
                            <div class="details">
                                <div class="title1">The Hobbit <span>PG-13</span></div>
                                <div class="title2">The Battle of the Five Armies</div>
                                <span class="likes">109 likes</span>
                            </div> 
                        </div>  -->
                        <div class="description">
                            <div class="row justify-content-end">
                                <div class="col-9">
                                    <p>Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from
                                        the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the
                                        Grey,
                                        Bilbo finds himself joining a company of thirteen dwarves led by the legendary
                                        warrior,
                                        Thorin Oakenshield. Their journey will take them into the Wild; through...
                                        <a href="#">read more</a>
                                    </p>
                                    <div class="avatars">
                                        <a href="#" data-tooltip="Person 1" data-placement="top">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
                                                alt="avatar1" />
                                        </a>
                                        <a href="#" data-tooltip="Person 2" data-placement="top">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
                                                alt="avatar2" />
                                        </a>
                                        <a href="#" data-tooltip="Person 3" data-placement="top">
                                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
                                                alt="avatar3" />
                                        </a>
                                    </div> <!-- end avatars -->
                                </div>
                            </div>
                        </div> <!-- end description -->
                    </div> <!-- end container -->
                </div> <!-- end movie-card -->
            </div>
        </header-layout>
    </main>
    <slot></slot>
</template>

<style scoped>
@import "../assets/DetailsMovie.css";
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
            await axios.get(this.urlAPI + '/' + this.id + '?' + this.apiKey + this.language)
                .then(response => {
                    this.dados = response.data;
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
}
</script>