<script>
    import { PUBLIC_API_IMAGE } from "$env/static/public";
    import { fiveDayforecastWeather } from "../../store/store";
    import "../../styles/components/forcast-container.css";
    import { getDayByDate } from "../../utils/extra-functions";
    import ForcastCard from "./forcast-card.svelte";
</script>

<div class="forcast-container">
    {#if $fiveDayforecastWeather != null}
        {#each $fiveDayforecastWeather.DailyForecasts as { Date, Day, Temperature }}
            <ForcastCard
                iconUrl={`${PUBLIC_API_IMAGE+Day.Icon}.svg`}
                day={getDayByDate(Date)}
                temp={{
                    temp_max:Temperature.Maximum.Value,
                    temp_min:Temperature.Minimum.Value
                }}
            />
        {/each}
    {:else}
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
        <ForcastCard />
    {/if}
</div>
