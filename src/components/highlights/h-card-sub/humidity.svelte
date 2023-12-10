<script>
    import { currentWeather } from "../../../store/store";
</script>

<div class="humidity">
    {#if $currentWeather}
        <div>
            <h1>{$currentWeather[0].RelativeHumidity}%</h1>
            <input
                type="range"
                value={$currentWeather[0].RelativeHumidity}
                id="vol"
                name="vol"
                min="0"
                max="100"
                disabled
            />
        </div>
        {#if $currentWeather[0].RelativeHumidity >= 70}
            <p>Too Moist</p>
        {:else if $currentWeather[0].RelativeHumidity >= 30}
            <p>Normal</p>
        {:else}
            <p>"To Dry"</p>
        {/if}
    {/if}
</div>

<style>
    .humidity {
        width: 100%;
        /* border: 1px solid red; */
    }

    .humidity div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .humidity div h1 {
        margin: 0;
        font-size: 4rem;
    }

    .humidity div input {
        rotate: 270deg;
    }
</style>
