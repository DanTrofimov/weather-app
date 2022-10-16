# web weather SPA :partly_sunny:

### About
Tried https://openweathermap.org/api to get some info about current temperature, wind speed, pressure etc.


![adaptive](https://github.com/chackydude/weather-app/raw/master/public/gifs/adaptive-2.gif)

### Setup

Install dependencies:
```bash
npm install
```
Run application locally:
```bash
npm run serve
```
Check app at `http://localhost:8080/`

To create production build:
```bash
npm run build
```
### Environment variables

| Name  | Description  |
|---|---|
| VUE_APP_BASE_URL  | API URL |
| VUE_APP_API_KEY  | OpenWeather API key |
| VUE_APP_GET_IMG_URL  | URL to get aimages from API |

### Stack

- Vue.js 2.6.11
- Vuex 3.5.1
- Axios
- GitHub actions for CD
