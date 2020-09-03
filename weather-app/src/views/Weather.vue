<template>
    <div class="default-weather-main">
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
        <h3 class="suggestion">
            Try to find out weather forecast for your city:
        </h3>
        <div class="search">
            <label>
                <input
                        type="text"
                        class="search__bar"
                        placeholder="Enter the city name..."
                        v-model = "query"
                        @keypress= "submit"
                >
            </label>
            <button class="search__icon"
                    @click="loadCustomWeather"
            >
                🔍
            </button>
        </div>
        <div class="custom-weather-info" v-if="typeof getCustomWeather != 'undefined'">
            <WeatherItem
                    class="custom-weather-item"
                    v-bind:weather="getCustomWeather"
            />
            <DetailedWeather
                    class="detailed-custom-weather-item"
                v-bind:weather="getCustomWeather"
            />
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import WeatherItem from "../components/WeatherItem";
    import DetailedWeather from "../components/DetailedWeatherItem";
    export default {
        name: "DefaultWeather",
        components: {DetailedWeather, WeatherItem},
        computed: {
            getWeather() {
                return this.$store.getters.getWeather;
            },
            getCustomWeather() {
                return this.$store.getters.getCustomWeather;
            },
            getObtainedDate() {
                return new Date(this.getWeather.list[0].dt*1000).toLocaleString("en-US")
            }
        },
        methods: {
             ...mapActions(['fetchWeather', 'fetchWeatherByName']),
            loadCustomWeather() {
                if (typeof this.getCustomWeather != 'undefined') {
                    this.fetchWeatherByName(this.query)
                }
            },
            submit(e) {
                if (e.key === "Enter" && this.query.trim()) {
                    this.loadCustomWeather();
                }
            }
        },
        data() {
            return {
                query: '',
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
    .default-weather-main {
        margin-bottom: 20px;
    }

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

    .suggestion {
        font-size: 1.5em;
        text-align: center;
        padding: 0 30px 0 30px;
        margin-bottom: 20px;
    }

    .search {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 30px;
        padding: 0 50px 0 70px;
    }

    .search__bar {
        width: 300px;
        height: 40px;
        padding: 0 10px 0 10px;
        font-size: 18px;
    }

    .search__icon {
        font-size: 20px;
        border-radius: 10px;
        background-color: rgb(0,0,0,0);
        border: none;
    }

    .custom-weather-info {
        display: flex;
        justify-content: center;
        gap: 30px;
        padding: 0 20px 0 20px;
    }

    .custom-weather-item {
        width: 210px;
    }

    @media screen and (max-width: 540px) {
        .custom-weather-info {
            flex-direction: column;
        }

        .custom-weather-item, .detailed-custom-weather-item{
            align-self: center;
        }

        .search__bar {
            width: 200px;
            font-size: 15px;
        }
    }

    @media screen and (max-width: 490px) {
        .default-wrapper {
            grid-template-columns: repeat(auto-fill, 170px);
        }

        .obtained-info {
            width: 210px;
        }

        .suggestion {
            font-size: 1.2em;
        }
    }

    @media screen and (max-width: 410px) {
        .default-wrapper {
            grid-template-columns: repeat(auto-fill, 230px);
        }
    }
</style>