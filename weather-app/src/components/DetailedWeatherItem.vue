<template>
    <div class="weather-item detailed-item">
        <div>
            <div class="detailed-item__max-temp">Max temperature is {{ weather.main.temp_max | round}}°C</div>
            <div class="detailed-item__min-temp">Min temperature is {{ weather.main.temp_min | round}}°C</div>
            <div class="detailed-item__feels-like">Feels like {{ weather.main.feels_like | round}}°C</div>
            <div class="detailed-item__wind-direction">Wind degree: {{weather.wind.deg | round}}</div>
            <div class="detailed-item__sunrise">Sunrise: {{ getSunrise | toDate}}</div>
            <div class="detailed-item__sunset">Sunset: {{ getSunset | toDate}}</div>
            <div class="detailed-item__sunrise">Obtained: {{ getCustomObtained | toDate}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DetailedWeather',
  props: {
    weather: Object
  },
  computed: {
    ...mapGetters(['getSunset', 'getSunrise', 'getCustomObtained'])
  },
  filters: {
    round (value) {
      return Math.round(value)
    },
    toDate (value) {
      return value.toLocaleString('en-US')
    }
  }
}
</script>

<style scoped>
.detailed-item {
    display: grid;
    place-items: center;
    max-width: 300px;
    padding: 20px;
    line-height: 30px;
    box-sizing: border-box;
}
</style>
