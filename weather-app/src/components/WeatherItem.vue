<template>
    <div class="weather-item">
        <div>
            <h2> {{ weather.name }} </h2>
            <img :src="imgLink" alt="weather-icon">
            <h1 class="temperature"> {{ weather.main.temp | round }}°C</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WeatherItem",
        props: {
            weather: Object,
            imgLink: String,
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
        place-items: center;
        text-align: center;
        height: 300px;
    }
</style>