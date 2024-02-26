<template>
    <div v-if="!loading" class="movie_card" id="bright">
        <div class="info_section">
            <div class="movie_header">
                <img :src="capa" alt="cover" class="locandina" />
                <h1>{{ titulo }}</h1>
                <h4>({{ release_date }})</h4>
                <!-- <span class="minutes">{{ dados.runtime }} min</span> -->
                <!-- <div class="type" v-for="item in dados.genres" :key="item.id">
                    {{ item.name }}
                </div> -->
                <div class="text-warning mt-2">
                    <font-awesome-icon icon="fa-solid fa-star text-warning" />
                    {{ vote_average }}
                </div>
            </div>
            <div class="movie_desc">
                <p class="text">
                    {{ sinopse }}
                </p>
            </div>
        </div>
        <!-- <img v-if="dados.backdrop_path != null && dados.backdrop_path != undefined" :src="imgAPI + dados.backdrop_path"
            alt="cover" class="blur_back" /> -->
        <img :src="imagemFundo" alt="cover" class="blur_back" />
    </div>
</template>

<style scoped>
@import "../assets/DetailsMovie.css";
@import "../assets/StyleCardActor.css";
</style>

<script>
export default {
    name: 'BannerFilme',
    props: {
        titulo: {
            type: String,
            required: true,
        },
        release_date: {
            type: String,
        },
        genero: {
            type: String,
        },
        sinopse: {
            type: String,
            required: true,
        },
        imagemFundo: {
            type: String,
            required: true,
        },
        capa: {
            type: String,
            required: true,
        },
        vote_average: {
            type: Number,
            required: true,
        },
        // linkTrailer: {
        //     type: String,
        //     required: true,
        // },
    },
}
</script>