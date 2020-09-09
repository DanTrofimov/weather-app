export default {
    actions: {
        async fetchWeather(ctx, citiesId) {
            let cities = citiesId.toString();
            const weatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
            const weatherResult = await weatherResponse.json();
            ctx.commit('updateWeather', weatherResult)
        },

        // работа с API, name - имя города
        fetchWeatherByName(ctx, name) {
            fetch(`${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then((response) => {
                    if (!response.ok) {
                        /*
                            при некорректном запросе обновляется статус ошибки, показывающий
                            юзеру сообщение о том, что город не найден
                         */
                        ctx.commit('updateErrorStatus', true);
                        throw new Error('Unknown city');
                    }
                    return response.json()
                })
                .then((json) => {
                    // если все ок, тогда идет последующая работа с json'ом
                    ctx.commit('updateCustomWeather', json);
                    ctx.commit('updateErrorStatus', false);
                })
                /*
                    тут могу перехватить только свою же ошибку 'Unknown Error',
                    хотелось бы обработать 404-ую, улетающую в консоль
                 */
                .catch((error) => {
                    console.error(error.message)
                })
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