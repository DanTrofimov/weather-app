<template>
    <div class="weather-item detailed-item">
        <div>
            <div class="max-temp">Max temperature is {{ weather.main.temp_max | round}}°C</div>
            <div class="min-temp">Min temperature is {{ weather.main.temp_min | round}}°C</div>
            <div class="feels-like">Feels like {{ weather.main.feels_like | round}}°C</div>
            <div class="wind-direction">Wind degree: {{weather.wind.deg | round}}</div>
            <div class="sunrise">Sunrise: {{ weather.sys.sunrise | toDate}}</div>
            <div class="sunset">Sunset: {{ weather.sys.sunset | toDate}}</div>
            <div class="sunrise">Obtained: {{ weather.dt | toDate}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailedWeather",
        props: {
            weather: Object
        },
        filters: {
            round(value) {
                return Math.round(value)
            },
            toDate(value) {
                return new Date(value*1000).toLocaleString("en-US")
            }
        }
    }
</script>

<style scoped>
    .detailed-item {
        max-width: 300px;
        padding: 20px;
        display: grid;
        place-items: center;
        line-height: 30px;
    }
</style>