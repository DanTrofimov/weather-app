# :partly_sunny:  web weather SPA
[![deploy](https://github.com/DanTrofimov/weather-app/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/DanTrofimov/weather-app/actions/workflows/deploy.yml)

## About
Tried https://openweathermap.org/api to get some info about current temperature, wind speed, pressure etc.

![adaptive](https://github.com/chackydude/weather-app/raw/master/gifs/demo.gif)

## API Proxy
Requests to OpenWeather API (from Russia) works only with VPN now, to avoid this I made a [simple proxy server with Node.js](https://github.com/DanTrofimov/nodejs-proxy). Now it has been deployed to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) at Europe's server and used as proxy to OpenWeather API.

## Setup

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
## Environment variables

| Name  | Description  |
|---|---|
| VUE_APP_BASE_URL  | API URL |
| VUE_APP_API_KEY  | OpenWeather API key |
| VUE_APP_GET_IMG_URL  | URL to get images from API |
| VUE_APP_API_PROXY  | [API proxy](https://github.com/DanTrofimov/nodejs-proxy) |
## Stack

- Vue.js 2.6.11
- Vuex 3.5.1
- Axios
- SCSS
- GitHub actions for CD 
