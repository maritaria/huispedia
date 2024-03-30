<script setup lang="ts">
import { usePropertiesStore } from '#imports';
const properties = usePropertiesStore();
await useAsyncData('properties', () => properties.fetchList());
</script>
<template>
    <!-- Grid layout -->
    <div class="app-layout">
        <div class="map-panel" style="background:skyblue">
            <PropertiesMap />
        </div>
        <div class="list-panel" style="background:coral">
            <PropertiesList />
        </div>
    </div>
    <!-- Overlay panel -->
    <div v-if="false" class="app-overlay" style="background:chartreuse">Details overlay</div>
</template>
<style scoped>
.app-layout {
    /* Take up the entire viewport */
    height: 100vh;
    overflow: hidden;

    /* Set-up the top-level layout. */
    /* TODO: Maybe make it flexbox instead so we can lean on tailwind for breakpoint based layouts */

    display: grid;
    grid-template-columns: 1fr 350px;
    grid-template-rows: auto;
    grid-template-areas: "map list";

    .map-panel { grid-area: map; }
    .list-panel { grid-area: list; }
}

.map-panel {
    max-height: 100vh;
}

.list-panel {
    overflow-y: scroll;
}

@media (max-width: 600px) {
    .app-layout {
        grid-template-columns: 1fr;
        grid-template-rows: 200px 1fr;
        grid-template-areas: "map" "list";
    }
}

.app-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;   
}
</style>