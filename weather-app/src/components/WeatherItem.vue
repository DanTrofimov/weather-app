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
        </div>
</template>

<script>
export default {
  name: 'WeatherItem',
  props: {
    weather: Object,
    imgLink: String
  },
  filters: {
    round (value) {
      return Math.round(value)
    }
  }
}
</script>

<style scoped lang="scss">
@import "public/css/mixins";

.weather-item {
    /*display: grid;*/
    /*place-items: center;*/
    text-align: center;
    @include center-styles();
    @include weather-item-styles()
}

.weather-item__content {
  .item__other-info {
    margin-top: 10px;
  }
}
</style>
