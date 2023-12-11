<script>
    import { hourlyForecast, isCelcius } from "../../store/store";
    export let time = "12:00 PM";
    export let iconUrl = 5;
    export let temp = 67;

    isCelcius;
</script>

<div class="forcast-card">
    <p>{time}</p>
    <img src={iconUrl} alt="temp" />

    {#if $isCelcius}
        <p>{Math.floor(((temp - 32) * 5) / 9)}°</p>
    {:else}
        <p>{Math.floor(temp)}°</p>
    {/if}
</div>
