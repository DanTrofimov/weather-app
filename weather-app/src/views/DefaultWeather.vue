<template>
    <div class="default-wrapper">
        <WeatherItem
            v-for="weather in getWeather.list"
            v-bind:key="weather.name"
            v-bind:weather="weather"
            v-bind:img-link="imgLink + weather.weather[0].icon + '.png'"
        />
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import WeatherItem from "../components/WeatherItem";
    export default {
        name: "DefaultWeather",
        components: {WeatherItem},
        computed: mapGetters(['getWeather']),
        methods: mapActions(['fetchWeather']),
        data() {
            return {
                imgLink: process.env.VUE_APP_GET_IMG_URL
            }
        },
        mounted() {
            if (this.getWeather.length === 0) this.fetchWeather();
        }
    }
</script>

<style scoped lang="scss">
    @import "public/css/mixins";

    .default-wrapper {
        margin: 40px 0 0 0;
        padding-left: 20px;
        padding-right: 20px;

        > div {
            @include gridStyles(3, 5%);
        }
    }

    @media screen and (max-width: 650px) {
        .default-wrapper {
            > div {
                @include gridStyles(1, 1%);
            }
        }
    }
</style>