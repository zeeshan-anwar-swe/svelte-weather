<script>
    import { isHourly } from "../../store/store";
    import UnitChanger from "../unit-changer/unit-changer.svelte";

    let hours;

    $: hours = $isHourly;
</script>

<div class="forecast-switcher">
    <div class="routes">
        <h3 on:click={()=> isHourly.set(true)} class={hours ? "active-h3" : "inactive-h3"}>Hourly</h3>
        <h3 on:click={()=> isHourly.set(false)} class={hours ? "inactive-h3" : "active-h3"}>Daily</h3>
    </div>
    <UnitChanger />
</div>

<style>
    .forecast-switcher {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .routes {
        cursor: pointer;
        display: flex;
        gap: 1rem;
    }

    .active-h3 {
        padding-bottom: 4px;
        border-bottom: 2px solid black;
        transition: all 0.3s ease-in-out;
    }

    .inactive-h3 {
        color: #aeaeae;
        padding-bottom: 4px;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease-in-out;
    }
</style>
