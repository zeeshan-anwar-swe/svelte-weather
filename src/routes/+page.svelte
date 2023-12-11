<script>
    import { onMount } from "svelte";
    import { currentWeather } from "../store/store.js";
    import axios from "axios";
    import ForcastContainer from "../components/forcast/forcast-container.svelte";
    import HighlightContainer from "../components/highlights/highlight-container.svelte";
    import UnitChanger from "../components/unit-changer/unit-changer.svelte";
    import ForecastSwitcher from "../components/forecast-switcher/forecast-switcher.svelte";

  

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- {#if $currentWeather != null} -->
    <div class="main-content">
        <ForecastSwitcher/>
        <ForcastContainer />
        <HighlightContainer />
    </div>
<!-- {:else}
    <div class="no-data-main">
        <h1>No Data please search please search any citty ...</h1>
    </div>
{/if} -->

<style>
</style>
