<script>
    import ArrowCircle from "../../../asset/icon.png";
    import { oneDayforecastWeather } from "../../../store/store";
    import { getformatedSunTime } from "../../../utils/extra-functions";
</script>

<div class="sun-set">
    {#if $oneDayforecastWeather}
        <div>
            <img src={ArrowCircle} alt="images" />
            <p>
                {getformatedSunTime(
                    $oneDayforecastWeather.DailyForecasts[0].Sun
                ).sunRise.time} <br />
                <span
                    >{getformatedSunTime(
                        $oneDayforecastWeather.DailyForecasts[0].Sun
                    ).sunRise.timeAfterSunRise}</span
                >
            </p>
        </div>

        <div>
            <img src={ArrowCircle} alt="images" />
            <p>
                {getformatedSunTime(
                    $oneDayforecastWeather.DailyForecasts[0].Sun
                ).sunSet.time} <br />
                <span
                    >{getformatedSunTime(
                        $oneDayforecastWeather.DailyForecasts[0].Sun
                    ).sunSet.timeRemaining}</span
                >
            </p>
        </div>
    {/if}
</div>

<style>
    .sun-set {
        width: 100%;
        height: 100%;
    }

    .sun-set div {
        margin: 1.5rem 0;
        display: flex;
    }

    .sun-set div img {
        margin-right: 2rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .sun-set div:nth-child(2) img {
        margin-right: 2rem;
        rotate: 180deg;
        width: 2.5rem;
        height: 2.5rem;
    }

    .sun-set div p {
        font-size: 1.8rem;
        padding: 0%;
        margin: 0;
        line-height: 1.5rem;
    }

    .sun-set div p span {
        color: var(--ui-light-grey);
        font-size: 1rem;
    }
</style>
