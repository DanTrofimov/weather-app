<template>
    <div class="weather-item detailed-item">
        <div>
            <div class="detailed-item__max-temp">Max temperature is {{ tempMax | round}}°C</div>
            <div class="detailed-item__min-temp">Min temperature is {{ tempMin | round}}°C</div>
            <div class="detailed-item__feels-like">Feels like {{ tempFeels | round}}°C</div>
            <div class="detailed-item__wind-direction">Wind degree: {{ windDegree | round}}</div>
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
    tempMax: Number,
    tempMin: Number,
    tempFeels: Number,
    windDegree: Number
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

<style scoped lang="scss">
@import "public/css/mixins.scss";

.detailed-item {
    @include center-styles();
    max-width: 300px;
    padding: 20px;
    line-height: 30px;
    box-sizing: border-box;
}
</style>
