<template>
  <div class="weather-item item">
    <div class="weather-item__content">
      <h2>{{ name }}</h2>
      <img v-if="imgLink" :src="imgLink" alt="weather-icon" />
      <h1 class="item__temperature">{{ temperature | round }}°C</h1>
      <div class="item__other-info">
        <p>Wind speed: {{ wind }}mph</p>
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
    name: String,
    temperature: Number,
    wind: Number,
    humidity: Number,
    pressure: Number,
    imgLink: String,
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
