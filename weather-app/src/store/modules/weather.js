export default {
    actions: {
        async fetchWeather(ctx, citiesId) {
            let cities = citiesId.toString();
            const weatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
            const weatherResult = await weatherResponse.json();
            ctx.commit('updateWeather', weatherResult)
        }
    },
    mutations: {
        updateWeather(state, weather) {
            state.weather = weather
        }
    },
    state: {
        weather: [],
    },
    getters: {
        getWeather(state) {
            return state.weather;
        },
    }
}