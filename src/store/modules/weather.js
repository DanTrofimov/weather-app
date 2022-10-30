import axios from "axios";
import { handleError } from "../../utils/errorHandler";

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
        })
        // TODO: add error handler for default view
        .catch(handleError(() => {}));
    },

    async fetchWeatherByName(ctx, name) {
      await axios
        .get(
          `${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`
        )
        .then((response) => {
          console.log(response);
          ctx.commit("updateCustomWeather", response.data);
          ctx.commit("updateError", undefined);
        })
        .catch(handleError((message) => ctx.commit("updateError", message)));
    },
  },
  mutations: {
    updateWeather(state, weather) {
      state.weather = weather;
    },
    updateCustomWeather(state, customWeather) {
      state.customWeather = customWeather;
    },
    updateError(state, error) {
      state.weatherError = error;
    },
  },
  state: {
    weather: {},
    customWeather: {},
    weatherError: undefined,
  },
  getters: {
    getWeather(state) {
      return state.weather;
    },
    getCustomWeather(state) {
      return state.customWeather;
    },
    getError(state) {
      return state.weatherError;
    },
  },
};
