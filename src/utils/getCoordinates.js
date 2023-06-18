import axios from "axios";
import { handleError } from "./errorHandler";
import getDynamicEnv from "./getDynamicEnv";

// not modifying state util
export default async function fetchCityCoordinates(cityName) {
  const response = await axios
    .get(
      `${process.env.VUE_APP_GEOCODER}/direct?q=${cityName}&limit=1&APPID=${process.env.VUE_APP_API_KEY}`
    )
    .catch(handleError(() => {}));

  const { lon, lat } = response.data[0];

  return { lon, lat };
}
