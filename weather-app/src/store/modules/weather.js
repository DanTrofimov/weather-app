import axios from 'axios'

export default {
    actions: {
        async fetchWeather(ctx, citiesId) {
            let cities = citiesId.toString();
            await axios
                .get(`${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(response => {
                    ctx.commit('updateWeather', response.data);
                    ctx.commit('updateDate', response.data.list[0].dt*1000)
                })
                .catch(err => {
                    if (err.response) {
                        console.error('Oh, we get an error response (5xx, 4xx)');
                    } else if (err.request) {
                        console.error('Some troubles with a network, pls check your connection')
                    } else {
                        console.error('Something went wrong, pls refresh the page')
                    }
                })
        },

        async fetchWeatherByName(ctx, name) {
            await axios
                .get(`${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(response => {
                    ctx.commit('updateCustomWeather', response.data);
                    ctx.commit('updateErrorStatus', false);
                })
                .catch(err => {
                    if (err.response) {
                        console.error('Oh, we get an error response (5xx, 4xx)');
                        ctx.commit('updateErrorStatus', true);
                    } else if (err.request) {
                        console.error('Some troubles with a network, pls check your connection')
                    } else {
                        console.error('Something went wrong, pls refresh the page')
                    }
                })
        },
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
        },
        updateDate(state, date) {
            state.obtainedDate = date;
        }
    },
    state: {
        weather: [],
        customWeather: {},
        obtainedDate: '',
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
            return state.weatherError;
        },
        getObtainedDate(state) {
            return state.obtainedDate;
        }
    }
}