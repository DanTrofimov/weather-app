import axios from "axios";

const proxy = process.env.VUE_APP_API_PROXY
  ? {
      proxy: {
        protocol: "https",
        host: process.env.VUE_APP_API_PROXY,
        port: 8080,
      },
    }
  : {};

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  params: {
    APPID: process.env.VUE_APP_API_KEY,
  },
  ...proxy,
});

console.log(instance.defaults);
console.log(process.env);

export default instance;
