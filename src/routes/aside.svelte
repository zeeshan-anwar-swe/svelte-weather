<script>
    import "../styles/components/aside-card.css";
    import Form from "../components/form/form.svelte";
    import AisdeCard from "../components/aside/aisde-card.svelte";
    import AsideBottom from "../components/aside/aside-bottom.svelte";
    import { currentWeather, fiveDayforecastWeather, oneDayforecastWeather} from "../store/store";
</script>

<aside class="aside">
    <Form />
    <AisdeCard />
    <AsideBottom/>
</aside>

<style>
</style>
