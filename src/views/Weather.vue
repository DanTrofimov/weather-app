<template>
  <div class="default-weather-content content">
    <div
      v-if="getWeather.length"
      class="content__default-wrapper"
    >
      <WeatherItem
        v-for="weather in getWeather.list"
        :key="weather.name"
        class="default__item"
        :name="weather.name"
        :temperature="weather.main.temp"
        :wind="weather.wind.speed"
        :humidity="weather.main.humidity"
        :pressure="weather.main.pressure"
        :img-link="imgLink + weather.weather[0].icon + '.png'"
      />
    </div>
    <p
      v-else
      class="content__api-error"
    >
      ⚠️ Error during getting weather data. <br> Try to turn on VPN.
    </p>

    <p class="content__obtained-info">
      Obtained {{ getObtainedDate | toDate }}
    </p>

    <h3 class="content__suggestion">
      Try to find out weather forecast in your city:
    </h3>

    <div class="content__search search">
      <label>
        <input
          v-model="query"
          type="text"
          class="search__bar"
          placeholder="Enter the city name..."
          @keypress="submit"
        >
      </label>
      <button
        class="search__icon"
        @click="loadCustomWeather"
      >
        🔍
      </button>
    </div>
    <div
      v-if="typeof getCustomWeather.name != 'undefined' && !getErrorStatus"
      class="content__custom-weather-info custom"
    >
      <WeatherItem
        class="custom__weather-item"
        :name="getCustomWeather.name"
        :temperature="getCustomWeather.main.temp"
        :wind="getCustomWeather.wind.speed"
        :humidity="getCustomWeather.main.humidity"
        :pressure="getCustomWeather.main.pressure"
        :img-link="imgLink + getCustomWeather.weather[0].icon + '.png'"
      />
      <DetailedWeather
        class="custom__detailed-weather-item"
        :temp-max="getCustomWeather.main.temp_max"
        :temp-min="getCustomWeather.main.temp_min"
        :temp-feels="getCustomWeather.main.feels_like"
        :wind-degree="getCustomWeather.wind.deg"
      />
    </div>
    <div
      v-if="getErrorStatus"
      class="unknown-city"
    >
      <h3>Unknown city</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import WeatherItem from '../components/WeatherItem'
import DetailedWeather from '../components/DetailedWeatherItem'

export default {
  name: 'Weather',
  components: { DetailedWeather, WeatherItem },
  data () {
    return {
      query: '',
      date: new Date(),
      imgLink: process.env.VUE_APP_GET_IMG_URL,
      cities: [
        { name: 'Boston', id: 4930956 },
        { name: 'Kazan', id: 551487 },
        { name: 'Moscow', id: 524901 }
        // { name: 'London', id: 2643743 },
        // { name: 'New York', id: 5128581 },
        // { name: 'Minsk', id: 625144 }
      ]
    }
  },
  computed: {
    ...mapGetters(['getWeather', 'getCustomWeather', 'getErrorStatus', 'getObtainedDate'])
  },
  filters: {
    toDate (value) {
      return value.toLocaleString('en-US')
    }
  },
  methods: {
    ...mapActions(['fetchWeather', 'fetchWeatherByName']),
    loadCustomWeather () {
      if (typeof this.getCustomWeather !== 'undefined' && this.query.trim()) {
        this.fetchWeatherByName(this.query)
      }
    },
    submit (e) {
      if (e.key === 'Enter' && this.query.trim()) {
        this.loadCustomWeather()
      }
    }
  },
  mounted () {
    this.fetchWeather(this.cities.map(city => city.id))
  }
}
</script>

<style scoped lang="scss">
@import "public/css/mixins";

.content {
  margin-bottom: 30px;

  .content__default-wrapper {
    margin-top: 40px;
  }
}

.content__default-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, $weather-item-width_default);
  justify-content: center;
  gap: 30px;
  padding: 0 20px 0 20px;
  transition: all 0.5s;
}

.content {
  .content__obtained-info {
    margin: 30px auto;
  }
}

.content__api-error {
  display: grid;
  place-items: center;
  height: 40vh;
  text-align: center;
  line-height: 2;
}

.content__obtained-info {
  text-align: center;
}

.content__suggestion {
  font-size: 1.5em;
  text-align: center;
  padding: 0 30px 0 30px;
}

.content {
  .content__suggestion {
    margin: 0 auto 20px auto;
  }
}

.content__search {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 0 50px 0 50px;
}

.content {
  .content__search {
    margin-bottom: 15px;
  }
}

.content__custom-weather-info {
  display: flex;
  justify-content: center;
  padding: 0 30px 0 30px;

  div {
    margin: 15px;
  }
}

.search__bar {
   padding: 0 10px 0 10px;
   @include search-bar-styles($search-height_default, $search-width_default, $search-font-size_default)
 }

.search__icon {
  font-size: 20px;
  background-color: rgb(0,0,0,0);
  padding: 5px;
}

.custom__weather-item {
  width: $weather-item-width_default;
}

.unknown-city {
    height: 10vh;
    @include center-styles();
}

@media (max-width: 540px) {
    .search__bar {
      @include search-bar-styles($search-height_default, $search-width_medium, $search-font-size_medium)
    }

    .custom {
      flex-direction: column;
    }

    .custom__weather-item, .custom__detailed-weather-item {
      align-self: center;
    }
}

@media (max-width: 500px) {

    .content__default-wrapper {
      grid-template-columns: repeat(auto-fill, $weather-item-width_medium);

      .default__item {
        @include weather-item-styles($weather-item-height_medium, $weather-item-width_medium, $font-size_medium)
      }
    }

    .content__obtained-info {
      width: 210px;
    }

    .content__suggestion {
      font-size: 1em;
      max-width: 300px;
    }

    .search__bar {
      font-size: 12px;
    }

    .custom__detailed-weather-item {
      line-height: 20px;
      @include weather-item-styles(300px, 220px, 15px)
    }

    .custom__weather-item {
      @include weather-item-styles(210px, 220px, 15px)
    }
}

@media (max-width: 360px) {
    .content__default-wrapper {
      grid-template-columns: repeat(auto-fill, $weather-item-width_small);

      .default__item {
        @include weather-item-styles($weather-item-height_small, $weather-item-width_small, $font-size_small)
      }
    }
}
</style>
