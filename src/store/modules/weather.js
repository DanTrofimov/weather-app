import axios from "axios";

export default {
  actions: {
    async fetchWeather(ctx, citiesId) {
      const cities = citiesId.toString();
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          ctx.commit("updateWeather", response.data);
          const obtainedDatePayload = {
            date: response.data.list[0].dt * 1000,
            field: "obtainedDate",
          };
          ctx.commit("updateDate", obtainedDatePayload);
        })
        .catch((err) => {
          if (err.response) {
            console.error("Oh, we get an error response (5xx, 4xx)");
          } else if (err.request) {
            console.error(
              "Some troubles with a network, pls check your connection"
            );
          } else {
            console.error("Something went wrong, pls refresh the page");
          }
        });
    },

    async fetchWeatherByName(ctx, name) {
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          ctx.commit("updateCustomWeather", response.data);
          ctx.commit("updateErrorStatus", false);
          const sunrisePayload = {
            date: response.data.sys.sunrise * 1000,
            field: "sunrise",
          };
          const sunsetPayload = {
            date: response.data.sys.sunset * 1000,
            field: "sunset",
          };
          const customPayload = {
            date: response.data.dt * 1000,
            field: "customObtained",
          };
          ctx.commit("updateDate", customPayload);
          ctx.commit("updateDate", sunrisePayload);
          ctx.commit("updateDate", sunsetPayload);
        })
        .catch((err) => {
          if (err.response) {
            console.error("Oh, we get an error response (5xx, 4xx)");
            ctx.commit("updateErrorStatus", true);
          } else if (err.request) {
            console.error(
              "Some troubles with a network, pls check your connection"
            );
          } else {
            console.error("Something went wrong, pls refresh the page");
          }
        });
    },
  },
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather;
    },
    updateCustomWeather(state, customWeather) {
      state.customWeather = customWeather;
    },
    updateErrorStatus(state, error) {
      state.weatherError = error;
    },
    updateDate(state, payload) {
      state[payload.field].setTime(payload.date);
    },
  },
  state: {
    weather: [],
    customWeather: {},
    weatherError: false,
    obtainedDate: new Date(),
    sunrise: new Date(),
    sunset: new Date(),
    customObtained: new Date(),
  },
  getters: {
    getWeather(state) {
      return state.weather;
    },
    getCustomWeather(state) {
      return state.customWeather;
    },
    getErrorStatus(state) {
      return state.weatherError;
    },
    getObtainedDate(state) {
      return state.obtainedDate;
    },
    getSunrise(state) {
      return state.sunrise;
    },
    getSunset(state) {
      return state.sunset;
    },
    getCustomObtained(state) {
      return state.customObtained;
    },
  },
};
