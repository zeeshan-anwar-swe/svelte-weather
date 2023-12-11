<script>
    import { isCelcius } from "../../store/store";
    let cBtn = false;
    let fBtn = false;

    $: cBtn = $isCelcius;
    $: fBtn = !$isCelcius;

</script>

<div>
    <button class={cBtn? "active-btn": "btn"} on:click={() => isCelcius.set(true)}> C </button>
    <button class={fBtn? "active-btn": "btn"} on:click={() => isCelcius.set(false)}> F </button>
</div>

<style>
    .active-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        border-radius: 100%;
        color: white;
        background: black;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        border-radius: 100%;
    }
</style>
