<template>
  <div class="weather-item item">
    <div class="weather-item__content">
      <h2>{{ cityName }}</h2>
      <img v-if="imgLink" :src="imgLink" alt="weather-icon" />
      <h1 class="item__temperature">{{ temperature | round }}°C</h1>
      <div class="item__other-info">
        <p>Wind: {{ windSpeed }}mph</p>
        <p>Humidity: {{ humidity }}%</p>
        <p>Pressure {{ humidity }}mb</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherItem",
  filters: {
    round(value) {
      return Math.round(value);
    },
  },
  props: {
    weather: Object,
  },
  computed: {
    cityName() {
      return this.weather.name;
    },
    temperature() {
      return this.weather.main.temp;
    },
    windSpeed() {
      return this.weather.wind.speed;
    },
    humidity() {
      return this.weather.main.humidity;
    },
    pressure() {
      return this.weather.main.pressure;
    },
    imgLink() {
      return (
        process.env.VUE_APP_API_PROXY +
        process.env.VUE_APP_GET_IMG_URL +
        this.weather.weather[0].icon +
        ".png"
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/css/mixins";

.weather-item {
  text-align: center;
  @include center-styles();
  @include weather-item-styles();
}

.weather-item__content {
  .item__other-info {
    margin-top: 10px;
  }
}
</style>
