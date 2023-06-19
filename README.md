# :partly_sunny:  web weather SPA
[![deploy](https://github.com/DanTrofimov/weather-app/actions/workflows/deploy.yml/badge.svg?branch=master)](https://github.com/DanTrofimov/weather-app/actions/workflows/deploy.yml)

## About
[OpenWeather](https://openweathermap.org/api) to get some data about current temperature, wind speed, pressure etc.

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

## API Proxy
To get access for [OpenWeather](https://openweathermap.org/api) you can use proxy server. For example you can setup any of this:
- [`CloudFlare` proxy workers](https://developers.cloudflare.com/workers/get-started/guide/), they are free to deploy
- Use simple [Express server with proxy middleware](https://github.com/DanTrofimov/nodejs-proxy)
- Deploy a custom [`Nginx` reverse proxy](https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/), example of `Nginx` config:
```nginx
http {
    server {

        listen 8888;

        location / {
            return 200 "Welcome to the NGINX proxy";
        }

        # proxy-url.com/proxy?target=target-api-url.com
        location /proxy {
            # need for dynamic proxy_pass adress
            resolver 1.1.1.1;
            proxy_pass $arg_target;
        }
    }
}
```

## Environment variables

| Name  | Description  |
|---|---|
| VUE_APP_API_URL  | [API URL](https://openweathermap.org/api) |
| VUE_APP_API_KEY  | OpenWeather API key |
| VUE_APP_GET_IMG_URL  | URL to get images from API |
| VUE_APP_API_PROXY  | API proxy URL |

## Stack

- Vue.js 2.6.11
- Vuex 3.5.1
- Axios
- SCSS
- GitHub actions for CD 
- CloudFlare workers for API reverse proxy
