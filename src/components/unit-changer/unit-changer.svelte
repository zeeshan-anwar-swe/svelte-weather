<script>
    import { isCelcius } from "../../store/store";
    let cBtn = false;
    let fBtn = false;

    $: cBtn = $isCelcius;
    $: fBtn = !$isCelcius;

</script>

<div class="btn-countainer">
    <button class={cBtn? "active-btn": "btn"} on:click={() => isCelcius.set(true)}> C </button>
    <button class={fBtn? "active-btn": "btn"} on:click={() => isCelcius.set(false)}> F </button>
</div>

<style>
    .btn-countainer{
        display: flex;
        gap: 1rem;
    }

    .active-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        color: white;
        background: black;
        border: 1px solid black;
        transition: all 0.3s ease-in-out;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        width: 1rem;
        height: 1rem;
        padding: 1rem;
        border-radius: 0.5rem;
        transition: all 0.3s ease-in-out;
    }
</style>
