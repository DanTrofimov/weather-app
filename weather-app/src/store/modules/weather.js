export default {
    actions: {
        async fetchWeather(ctx) {
            const weatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}group?id=${4930956},${551487},${524901}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
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
        cities: [
            {name : 'Boston', id : 4930956},
            {name : 'Kazan', id : 551487},
            {name : 'Moscow', id: 524901}
        ],
    },
    getters: {
        getWeather(state) {
            return state.weather;
        },
    }
}