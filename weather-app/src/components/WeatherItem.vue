<template>
        <div class="weather-item item">
            <div class="weather-item__content">
                <h2> {{ weather.name }} </h2>
                <img v-bind:src="imgLink" alt="weather-icon" v-if="imgLink">
                <h1 class="item__temperature"> {{ weather.main.temp | round }}°C</h1>
                <div class="item__other-info">
                    <p>Wind speed: {{ weather.wind.speed }}mph</p>
                    <p>Humidity: {{ weather.main.humidity }}%</p>
                    <p>Pressure {{ weather.main.pressure }}mb</p>
                </div>
            </div>
<!--            <button class="weather-item__remove-button">-->
<!--                Remove-->
<!--            </button>-->
        </div>
</template>

<script>
    export default {
        name: "WeatherItem",
        props: {
            weather: Object,
            imgLink: String
        },
        filters: {
            round(value) {
                return Math.round(value)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "public/css/variables";

    .weather-item {
        display: grid;
        /*justify-content: center;*/
        place-items: center;
        text-align: center;
        height: 300px;
    }

    /*.weather-item__content {*/
    /*    margin-top: 40px;*/
    /*}*/

    /*.weather-item__remove-button {*/
    /*    color: #fff;*/
    /*    background-color: #ff4d69;*/
    /*    border-radius: 2px;*/
    /*    transition: all 0.3s;*/
    /*    opacity: 0;*/
    /*    width: 70px;*/
    /*    height: 30px;*/
    /*    margin: 0 auto 15px auto;*/
    /*    border: none;*/
    /*}*/

    .item__other-info {
        margin-top: 20px;
    }
</style>