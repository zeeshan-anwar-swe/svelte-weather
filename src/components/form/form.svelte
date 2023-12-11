<script>
    import { PUBLIC_API_KEY } from "$env/static/public";
    import "../../styles/components/weather-form.css";
    import SearchIcon from "../../asset/search-icon.svg";
    import axios from "axios";
    import {
        currentWeather,
        fiveDayforecastWeather,
        oneDayforecastWeather,
        weatherLocation,
        hourlyForecast,
    } from "../../store/store";

    let cityName;

    const getWeatherData = async (e) => {
        e.preventDefault();
        try {
            // Getting Loction Key
            const locationKey = await axios
                .get(
                    `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${PUBLIC_API_KEY}&q=${cityName}`
                )
                .then((response) => {
                    weatherLocation.set(response.data);
                    return response.data[0].Key;
                });

            const getHourlyForecast = await axios.get(
                `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${PUBLIC_API_KEY}`
            ).then((response)=>{
                hourlyForecast.set(response.data)
            });

            // Getting current weather
            const getCurrentWeatherData = await axios
                .get(
                    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${PUBLIC_API_KEY}&details=true`
                )
                .then((response) => {
                    currentWeather.set(response.data);
                });

            const getOneDayForecastWeatherData = await axios
                .get(
                    `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${PUBLIC_API_KEY}&details=true`
                )
                .then((response) => {
                    oneDayforecastWeather.set(response.data);
                });

            const getFiveDaysForecastWeatherData = await axios
                .get(
                    `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${PUBLIC_API_KEY}`
                )
                .then((response) => {
                    fiveDayforecastWeather.set(response.data);
                });
        } catch (err) {
            alert(err.message);
        }
    };

    const handleChange = (e) => {
        cityName = e.target.value;
    };
</script>

<form class="weather-form" on:submit={getWeatherData}>
    <img class="search-icon" src={SearchIcon} alt="search icon" />
    <input
        type="text"
        required
        minlength="3"
        placeholder="Search for place ..."
        on:change={handleChange}
    />
</form>
