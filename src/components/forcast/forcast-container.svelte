<script>
    import { PUBLIC_API_IMAGE } from "$env/static/public";
    import { fiveDayforecastWeather, hourlyForecast, isHourly } from "../../store/store";
    import "../../styles/components/forcast-container.css";
    import { getDayByDate, getTimeByDate } from "../../utils/extra-functions";
    import ForcastCard from "./forcast-card.svelte";
    import HourlyForcast from "./hourly-forcast.svelte";
</script>

<div class="forcast-container">
    {#if $fiveDayforecastWeather != null}
        {#if $isHourly}
            {#each $hourlyForecast.slice(0,6) as { DateTime, WeatherIcon, Temperature }}
                <HourlyForcast
                iconUrl={`${PUBLIC_API_IMAGE + WeatherIcon}.svg`}
                time ={getTimeByDate(DateTime)}
                temp = {Temperature.Value}
                />
            {/each}
        {:else}
            {#each $fiveDayforecastWeather.DailyForecasts as { Date, Day, Temperature }}
                <ForcastCard
                    iconUrl={`${PUBLIC_API_IMAGE + Day.Icon}.svg`}
                    day={getDayByDate(Date)}
                    temp={{
                        temp_max: Temperature.Maximum.Value,
                        temp_min: Temperature.Minimum.Value,
                    }}
                />
            {/each}
        {/if}
    {:else}
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
    {/if}
</div>
