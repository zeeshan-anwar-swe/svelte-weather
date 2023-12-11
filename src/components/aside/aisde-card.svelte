<script>
    import { PUBLIC_API_IMAGE } from "$env/static/public";
    import { currentWeather, isCelcius } from "../../store/store";
    import { getDayNameAndTime } from "../../utils/extra-functions";
</script>

<div class="aside-card">
    {#if $currentWeather != null}
        <img
            src={PUBLIC_API_IMAGE + $currentWeather[0].WeatherIcon + ".svg"}
            alt="Weather Icon"
        />
        {#if $isCelcius}
            <h1>
                {Math.floor(
                    (($currentWeather[0].Temperature.Imperial.Value - 32) * 5) /
                        9
                )}
                °
            </h1>
        {:else}
            <h1>
                {Math.floor($currentWeather[0].Temperature.Imperial.Value)}
                °
            </h1>
        {/if}
        <h3>
            {getDayNameAndTime($currentWeather[0].LocalObservationDateTime)}
        </h3>
    {/if}
</div>
