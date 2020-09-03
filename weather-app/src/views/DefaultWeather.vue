<template>
    <div>
        <div class="default-wrapper">
            <WeatherItem
                    v-for="weather in getWeather.list"
                    v-bind:key="weather.name"
                    v-bind:weather="weather"
                    v-bind:img-link="imgLink + weather.weather[0].icon + '.png'"
            />
        </div>
        <p class="obtained-info">
            Obtained {{ getObtainedDate }}
        </p>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import WeatherItem from "../components/WeatherItem";
    export default {
        name: "DefaultWeather",
        components: {WeatherItem},
        computed: {
            getWeather() {
                return this.$store.getters.getWeather;
            },
            getObtainedDate() {
                return new Date(this.getWeather.list[0].dt*1000).toLocaleString("en-US")
            }
        },
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
        transition: all 0.5s;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(auto-fill, 210px);
        margin-top: 50px;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    .obtained-info {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        width: 210px;
    }
</style>