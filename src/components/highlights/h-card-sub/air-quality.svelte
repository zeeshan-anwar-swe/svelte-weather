<script>
    import {oneDayforecastWeather} from "../../../store/store"
</script>

<div class="air-quality">
    {#if $oneDayforecastWeather}
    <div>
        <h1>{$oneDayforecastWeather.DailyForecasts[0].AirAndPollen[0].Value}</h1>
        <input type="range" value={$oneDayforecastWeather.DailyForecasts[0].AirAndPollen[0].Value} id="vol" name="vol" min="0" max="150" disabled />
    </div>
    <p>{$oneDayforecastWeather.DailyForecasts[0].AirAndPollen[0].Category}</p>
    {/if}
</div>

<style>
    .air-quality {
        width: 100%;
        height: 100%;
        /* border: 1px solid red; */
    }

    .air-quality div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .air-quality h1{
        margin: 0;
        font-size: 4rem;
    }

    .air-quality div input{
        rotate: 270deg;
    }
</style>
