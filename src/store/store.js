import { writable } from "svelte/store";

export const isHourly = writable(false);
export const isCelcius = writable(false);
export const hourlyForecast = writable(null);
export const currentWeather = writable(null);
export const weatherLocation = writable(null);
export const weatherLoading = writable(false);
export const tempUnitCelciuis = writable(false);
export const oneDayforecastWeather = writable(null);
export const fiveDayforecastWeather = writable(null);
