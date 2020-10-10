<template>
    <div class="weather-item detailed-item">
        <div>
            <div class="detailed-item__max-temp">Max temperature is {{ weather.main.temp_max | round}}°C</div>
            <div class="detailed-item__min-temp">Min temperature is {{ weather.main.temp_min | round}}°C</div>
            <div class="detailed-item__feels-like">Feels like {{ weather.main.feels_like | round}}°C</div>
            <div class="detailed-item__wind-direction">Wind degree: {{weather.wind.deg | round}}</div>
            <div class="detailed-item__sunrise">Sunrise: {{ weather.sys.sunrise | toDate}}</div>
            <div class="detailed-item__sunset">Sunset: {{ weather.sys.sunset | toDate}}</div>
            <div class="detailed-item__sunrise">Obtained: {{ weather.dt | toDate}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailedWeather',
  props: {
    weather: Object
  },
  filters: {
    round (value) {
      return Math.round(value)
    },
    // u can optimize that, check vuex -> weather -> obtainedDate
    toDate (value) {
      return new Date(value * 1000).toLocaleString('en-US')
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
