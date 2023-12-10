<script>
    import { currentWeather } from "../../../store/store";
</script>

<div class="wind-status">
    {#if $currentWeather}
        <h1>{$currentWeather[0].Wind.Speed.Metric.Value} <span>km/h</span></h1>
        <p>{$currentWeather[0].Wind.Direction.English}</p>
    {/if}
</div>

<style>
    .wind-status {
        /* border: 1px solid red; */
    }

    .wind-status h1 {
        margin: 0;
        font-size: 4rem;
    }

    .wind-status h1 span {
        font-size: 2rem;
    }
</style>
