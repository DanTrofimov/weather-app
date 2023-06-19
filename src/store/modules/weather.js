import { handleError } from "../../utils/errorHandler";
import axiosInstance from "../../utils/getAxiosInstance";

export default {
  actions: {
    async fetchWeather(ctx, citiesId) {
      const cities = citiesId.toString();
      await axiosInstance
        .get(`data/2.5/group?id=${cities}&units=metric`)
        .then((response) => {
          ctx.commit("updateWeather", response.data);
        })
        // TODO: add error handler for default view
        .catch(handleError(() => {}));
    },

    async fetchWeatherByName(ctx, name) {
      const response = await axiosInstance
        .get(`/geo/1.0/direct?q=${name}&limit=1`)
        .catch(handleError(() => {}));

      const { lon, lat } = response.data[0];

      await axiosInstance
        .get(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
        .then((response) => {
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
