export default {
    actions: {
        async fetchWeather(ctx, citiesId) {
            let cities = citiesId.toString();
            const weatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
            const weatherResult = await weatherResponse.json();
            ctx.commit('updateWeather', weatherResult)
        },

        async fetchWeatherByName(ctx, name) {
            const customWeatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then((result) => {
                    if (result.status === 400 || result.status === 404) {
                        ctx.commit('updateErrorStatus', true);
                        throw new Error('Unknown city');
                    }
                    return result;
                });
            const customWeather = await customWeatherResponse.json();
            ctx.commit('updateCustomWeather', customWeather);
            ctx.commit('updateErrorStatus', false)
        }
    },
    mutations: {
        updateWeather(state, weather) {
            state.weather = weather
        },
        updateCustomWeather(state, customWeather) {
            state.customWeather = customWeather
        },
        updateErrorStatus(state, error) {
            state.weatherError = error
        }
    },
    state: {
        weather: [],
        customWeather: {},
        weatherError: false,
    },
    getters: {
        getWeather(state) {
            return state.weather;
        },
        getCustomWeather(state) {
            return state.customWeather;
        },
        getErrorStatus(state) {
            return state.weatherError
        }
    }
}