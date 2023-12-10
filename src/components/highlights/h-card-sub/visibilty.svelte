<script>
    import { currentWeather } from "../../../store/store";
</script>

<div class="visibilty">
    {#if $currentWeather}
        <h1>{$currentWeather[0].Visibility.Metric.Value} <span>km</span></h1>
        <p>Averages</p>
    {/if}
</div>

<style>
    .visibilty {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
    }

    .visibilty h1 {
        margin: 0;
        font-size: 4rem;
    }

    .visibilty h1 span {
        font-size: 2rem;
    }
</style>
