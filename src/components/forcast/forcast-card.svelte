<script>
    import sun from "../../asset/sunny.svg"
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
    <p>{Math.floor(temp.temp_max)}° <span>{Math.floor(temp.temp_min)}°</span></p>
</div>
