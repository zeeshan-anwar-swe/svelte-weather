import { writable } from "svelte/store";

export const weatherLoading = writable(false);
export const tempUnitCelciuis = writable(false);
export const weatherLocation = writable(null);
export const currentWeather = writable(null);
export const oneDayforecastWeather = writable(null);
export const fiveDayforecastWeather = writable(null);
