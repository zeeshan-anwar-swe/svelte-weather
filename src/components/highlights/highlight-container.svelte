<script>
    import "../../styles/components/highlight-container.css";
    import HighlightCard from "./highlight-card.svelte";
</script>

<h2 class="h-header">Today's Highlights</h2>

<div class="highlight-container">
    <HighlightCard cardTitle="UV Index" />
    <HighlightCard cardTitle="Wind Status"/>
    <HighlightCard cardTitle="Sunrise & Sunset" />
    <HighlightCard cardTitle="Humidity"/>
    <HighlightCard cardTitle="Visibility"/>
    <HighlightCard cardTitle="Air Quality" />
</div>
