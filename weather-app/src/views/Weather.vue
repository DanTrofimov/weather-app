<template>
    <div class="default-weather-content content">
        <div class="content__default-wrapper">
            <WeatherItem
                    v-for="weather in getWeather.list"
                    v-bind:key="weather.name"
                    v-bind:weather="weather"
                    v-bind:img-link="imgLink + weather.weather[0].icon + '.png'"
            />
        </div>

        <p class="content__obtained-info" v-if="getObtainedDate != 'undefined'">
            Obtained {{ obtainedDate }}
        </p>

        <p v-else class="content__obtained-info">
            Error to obtain
        </p>

        <h3 class="content__suggestion">
            Try to find out weather forecast in your city:
        </h3>

        <div class="content__search search">
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
        <div class="content__custom-weather-info custom" v-if="typeof getCustomWeather.name != 'undefined' && !getErrorStatus">
            <WeatherItem
                    class="custom__weather-item"
                    v-bind:weather="getCustomWeather"
            />
            <DetailedWeather
                    class="custom__detailed-weather-item"
                    v-bind:weather="getCustomWeather"
            />
        </div>
        <div v-if="getErrorStatus" class="unknown-city">
            <h3>Unknown city</h3>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import WeatherItem from "../components/WeatherItem";
    import DetailedWeather from "../components/DetailedWeatherItem";

    export default {
        name: "Weather",
        components: {DetailedWeather, WeatherItem},
        data() {
            return {
                query: '',
                imgLink: process.env.VUE_APP_GET_IMG_URL,
                cities: [
                    {name : 'Boston', id : 4930956},
                    {name : 'Kazan', id : 551487},
                    {name : 'Moscow', id: 524901},
                    // {name: 'London', id: 2643743},
                    // {name: 'New York', id: 5128581},
                    // {name: 'Minsk', id: 625144},
                ],
            }
        },
        computed: {
            ...mapGetters(['getWeather', 'getCustomWeather', 'getErrorStatus', 'getObtainedDate']),
            obtainedDate() {
                return new Date(this.getObtainedDate).toLocaleString("en-US")
            }
        },
        methods: {
            ...mapActions(['fetchWeather', 'fetchWeatherByName']),
            loadCustomWeather() {
                if (typeof this.getCustomWeather != 'undefined' && this.query.trim()) {
                    this.fetchWeatherByName(this.query)
                }
            },
            submit(e) {
                if (e.key === "Enter" && this.query.trim()) {
                    this.loadCustomWeather();
                }
            },
        },
        mounted() {
            this.fetchWeather(this.cities.map(city => city.id));
        },
    }
</script>

<style scoped lang="scss">
    @import "public/css/mixins";
    .default-weather-content {
        margin-bottom: 30px;
    }

    .content__default-wrapper {
        transition: all 0.5s;
        display: grid;
        gap: 30px;
        grid-template-columns: repeat(auto-fill, 210px);
        margin-top: 50px;
        justify-content: center;
        padding-left: 20px;
        padding-right: 20px;
    }

    .content__obtained-info {
        text-align: center;
        margin: 30px auto;
    }

    .content__suggestion {
        font-size: 1.5em;
        text-align: center;
        padding: 0 30px 0 30px;
        margin-bottom: 20px;
    }

    .content__search {
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

    .content__custom-weather-info {
        display: flex;
        justify-content: center;
        gap: 30px;
        padding: 0 20px 0 20px;
    }

    .custom__weather-item {
        width: 210px;
    }

    .unknown-city {
        height: 10vh;
        display: grid;
        place-items: center;
    }

    @media screen and (max-width: 540px) {
        .custom {
            flex-direction: column;
        }

        .custom__weather-item, .custom__detailed-weather-item {
            align-self: center;
        }

        .search__bar {
            width: 200px;
            font-size: 15px;
        }
    }

    @media screen and (max-width: 500px) {
        .content__default-wrapper {
            grid-template-columns: repeat(auto-fill, 135px);
        }

        .content__default-wrapper > div {
            font-size: 12px;
            height: 200px;
        }

        .content__obtained-info {
            width: 210px;
        }

        .content__suggestion {
            font-size: 1em;
        }

        .custom__detailed-weather-item, .custom__weather-item {
            font-size: 15px;
        }

        .custom__detailed-weather-item {
            width: 220px;
            height: 300px;
            line-height: 20px;
        }

        .custom__weather-item {
            width: 220px;
            height: 210px;
        }
    }

    @media screen and (max-width: 360px) {
        .content__default-wrapper {
            grid-template-columns: repeat(auto-fill, 120px);
        }

        .content__default-wrapper > div {
            font-size: 10px;
            height: 160px;
        }
    }

</style>