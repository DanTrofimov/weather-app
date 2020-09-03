export default {
    actions: {
        async fetchWeather(ctx, citiesId) {
            let cities = citiesId.toString();
            const weatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
            const weatherResult = await weatherResponse.json();
            ctx.commit('updateWeather', weatherResult)
        },

        async fetchWeatherByName(ctx, name) {
            const customWeatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
            const customWeather = await customWeatherResponse.json();
            ctx.commit('updateCustomWeather', customWeather)
        }
    },
    mutations: {
        updateWeather(state, weather) {
            state.weather = weather
        },
        updateCustomWeather(state, customWeather) {
            state.customWeather = customWeather
        }
    },
    state: {
        weather: [],
        customWeather: {},
    },
    getters: {
        getWeather(state) {
            return state.weather;
        },
        getCustomWeather(state) {
            return state.customWeather;
        }
    }
}