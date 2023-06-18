export default function getDynamicEnv() {
  return {
    VUE_APP_BASE_URL: process.env.VUE_APP_API_PROXY
      ? process.env.VUE_APP_BASE_URL
      : process.env.VUE_APP_API_PROXY + process.env.VUE_APP_BASE_URL,
    VUE_APP_GEOCODER: process.env.VUE_APP_API_PROXY
      ? process.env.VUE_APP_GEOCODER
      : process.env.VUE_APP_API_PROXY + process.env.VUE_APP_GEOCODER,
    VUE_APP_GET_IMG_URL: process.env.VUE_APP_API_PROXY
      ? process.env.VUE_APP_GET_IMG_URL
      : process.env.VUE_APP_API_PROXY + process.env.VUE_APP_GET_IMG_URL,
  };
}
