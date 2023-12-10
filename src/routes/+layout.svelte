<script>
    import Asides from "./aside.svelte";
    import "../styles/main.css";
</script>

<div class="app">
    <Asides />

    <main class="main">
        <slot />
    </main>
</div>

<style>
</style>
