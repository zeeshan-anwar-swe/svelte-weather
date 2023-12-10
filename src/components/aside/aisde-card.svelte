<script>
    import { PUBLIC_API_IMAGE } from "$env/static/public";
    import { currentWeather } from "../../store/store";
    import { getDayNameAndTime } from "../../utils/extra-functions";
    
</script>

<div class="aside-card">
    {#if $currentWeather != null}
    <img src={PUBLIC_API_IMAGE+$currentWeather[0].WeatherIcon+".svg"} alt="Weather Icon">
    <h1>{Math.floor($currentWeather[0].Temperature.Metric.Value)}<sup>°c</sup></h1>
    <h3>{getDayNameAndTime($currentWeather[0].LocalObservationDateTime)}</h3>
    {/if}
</div>