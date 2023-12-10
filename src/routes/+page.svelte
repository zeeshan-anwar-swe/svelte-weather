<script>
    import { onMount } from "svelte";
    import { currentWeather } from "../store/store.js";
    import axios from "axios";
    import ForcastContainer from "../components/forcast/forcast-container.svelte";
    import HighlightContainer from "../components/highlights/highlight-container.svelte";

  

</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- {#if $currentWeather != null} -->
    <div class="main-content">
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
