<script>
    import { currentWeather } from "../../../store/store";

    function calculateRotation(value) {
        return value / 20;
    }
</script>

<div class="gauge">
    {#if $currentWeather !=null}
    <div class="gauge__body">
        <div
            class="gauge__fill"
            style="transform: rotate({calculateRotation($currentWeather[0].UVIndex)}turn)"
        ></div>
        <div class="gauge__cover">{Math.round($currentWeather[0].UVIndex)}</div>
    </div>
    {/if}
</div>

<style src="./Gauge.css"></style>
