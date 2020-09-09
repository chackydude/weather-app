import axios from 'axios'

export default {
    actions: {
        async fetchWeather(ctx, citiesId) {
            let cities = citiesId.toString();
            const weatherResponse = await fetch(`${process.env.VUE_APP_BASE_URL}group?id=${cities}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`);
            const weatherResult = await weatherResponse.json();
            ctx.commit('updateWeather', weatherResult)
        },

        fetchWeatherByName(ctx, name) {
            axios
                .get(`${process.env.VUE_APP_BASE_URL}weather?q=${name}&units=metric&APPID=${process.env.VUE_APP_API_KEY}`)
                .then(response => {
                    ctx.commit('updateCustomWeather', response.data);
                    ctx.commit('updateErrorStatus', false);
                })
                .catch((error) => {
                    console.log(error.message);
                    ctx.commit('updateErrorStatus', true);
                });
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