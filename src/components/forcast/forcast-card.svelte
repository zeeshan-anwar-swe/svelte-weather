<script>
    import { isCelcius } from "../../store/store";
    import sun from "../../asset/sunny.svg";
    export let day = "Sun";
    export let iconUrl = sun;
    export let temp = {
        temp_max: 0,
        temp_min: 0,
    };
</script>

<div class="forcast-card">
    <p>{day}</p>
    <img src={iconUrl} alt="icon" />
    {#if $isCelcius}
        <p>
            {Math.floor(((temp.temp_max - 32) * 5) / 9)}°
            <span>
                {Math.floor(((temp.temp_min - 32) * 5) / 9)}°
            </span>
        </p>
    {:else}
        <p>
            {Math.floor(temp.temp_max)}°
            <span>
                {Math.floor(temp.temp_min)}°
            </span>
        </p>
    {/if}
</div>
