<script>
    import { PUBLIC_API_IMAGE } from "$env/static/public";
    import Rain from "../../asset/rain.svg";
    import Cloud from "../../asset/cloud.svg";
    import {
        currentWeather,
        oneDayforecastWeather,
        weatherLocation,
    } from "../../store/store.js";
</script>

<div class="aside-bottom">
    {#if $oneDayforecastWeather}
        <div class="weather-condition">
            <img src={PUBLIC_API_IMAGE+$currentWeather[0].WeatherIcon+".svg"} alt="cloud" />
            <p>{$currentWeather[0].WeatherText}</p>
        </div>

        <div class="weather-condition">
            <img src={Rain} alt="Rain" />
            <p>
                Rain - {$oneDayforecastWeather.DailyForecasts[0].Day
                    .RainProbability}%
            </p>
            
        </div>
        <div class="city">
            <h3>{$weatherLocation[0].LocalizedName}</h3>
        </div>
    {/if}
</div>
