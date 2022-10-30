<template>
  <div class="weather-item detailed-item">
    <div>
      <p class="detailed-item__max-temp">
        Max temperature is {{ tempMax | round }}°C
      </p>
      <p class="detailed-item__feels-like">
        Feels like {{ feelsLike | round }}°C
      </p>
      <p class="detailed-item__min-temp">
        Min temperature is {{ tempMin | round }}°C
      </p>
      <p class="detailed-item__wind-direction">
        Wind degree: {{ windDegree | round }}
      </p>
      <p class="detailed-item__sunrise">Sunrise: {{ sunrise | toDate }}</p>
      <p class="detailed-item__sunset">Sunset: {{ sunset | toDate }}</p>
      <p class="detailed-item__sunrise">
        Obtained: {{ customObtained | toDate }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DetailedWeather",
  filters: {
    round(value) {
      return Math.round(value);
    },
    toDate(value) {
      return value.toLocaleString("en-US");
    },
  },
  props: {
    customWeather: Object,
  },
  computed: {
    tempMax() {
      return this.customWeather.main.temp_max;
    },
    tempMin() {
      return this.customWeather.main.temp_min;
    },
    feelsLike() {
      return this.customWeather.main.feels_like;
    },
    windDegree() {
      return this.customWeather.wind.deg;
    },
    sunrise() {
      return this.customWeather.sys.sunrise * 1000;
    },
    sunset() {
      return this.customWeather.sys.sunset * 1000;
    },
    customObtained() {
      return this.customWeather.dt * 1000;
    },
  },
};
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
