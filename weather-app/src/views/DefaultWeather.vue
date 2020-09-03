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
                imgLink: process.env.VUE_APP_GET_IMG_URL,
                cities: [
                    {name : 'Boston', id : 4930956},
                    {name : 'Kazan', id : 551487},
                    {name : 'Moscow', id: 524901}
                ],
            }
        },
        mounted() {
            if (this.getWeather.length === 0) this.fetchWeather(this.cities.map(city => city.id));
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
        margin: 30px auto;
    }

    @media screen and (max-width: 490px) {
        .obtained-info {
            width: 210px;
        }
    }
</style>