# web weather SPA :partly_sunny:
[![deploy](https://github.com/DanTrofimov/weather-app/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/DanTrofimov/weather-app/actions/workflows/deploy.yml)

## ⚠️ OpenWeather API works only with VPN (30.10.22)
To work with API (from Russia) we need to use VPN. Trying to bypass the that restriction - [add proxy server](https://github.com/DanTrofimov/weather-app/issues/13) to make calls to API. Now I can recommend to use [Browsec](https://chrome.google.com/webstore/detail/browsec-vpn-free-vpn-for/omghfjlpggmjjaagoclmmobgdodcjboh?hl=en-GB) - free Chrome VPN Extension.
## About
Tried https://openweathermap.org/api to get some info about current temperature, wind speed, pressure etc.

![adaptive](https://github.com/chackydude/weather-app/raw/master/gifs/demo.gif)

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
| VUE_APP_GET_IMG_URL  | URL to get aimages from API |

## Stack

- Vue.js 2.6.11
- Vuex 3.5.1
- Axios
- SCSS
- GitHub actions for CD
