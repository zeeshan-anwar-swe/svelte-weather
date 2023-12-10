<script>
    export let cardTitle="---";
    import Gauge from "./h-card-sub/uv-guage.svelte"
    import WindStatus from "./h-card-sub/wind-status.svelte"
    import SunSet from "./h-card-sub/sun-set.svelte"
    import Humidity from "./h-card-sub/humidity.svelte"
    import Visibility from "./h-card-sub/visibilty.svelte"
    import AirQuality from "./h-card-sub/air-quality.svelte"
</script>

<div class="highlight-card">
    <h2>{cardTitle}</h2>

    {#if cardTitle === "UV Index" }
    <Gauge/>
    {:else if cardTitle ==="Wind Status"}
    <WindStatus/>

    {:else if cardTitle ==="Sunrise & Sunset"}
    <SunSet/>

    {:else if cardTitle ==="Humidity"}
    <Humidity/>

    {:else if cardTitle ==="Visibility"}
    <Visibility/>

    {:else if cardTitle ==="Air Quality"}
    <AirQuality/>

    {:else }
    <h1>No Data</h1>
    
    {/if}
</div>