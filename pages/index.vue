<script setup lang="ts">
import { usePropertiesStore } from '#imports';
const properties = usePropertiesStore();
await useAsyncData('properties', () => properties.fetchList());

const focusActive = computed({
  get() { return !!properties.focus; },
  set(value) {
    if (!value) {
      properties.focus = null;
    } else {
      // Can't really happen, unclear what to do.
    }
  }
});
</script>
<template>
  <!-- Grid layout -->
  <div class="app-layout">
    <div class="map-panel">
      <PropertiesMap />
    </div>
    <div class="list-panel">
      <PropertiesList />
    </div>
  </div>
  <USlideover v-model="focusActive">
    <PropertyDetails v-if="properties.focus" :property="properties.focus" class="property-panel"/>
  </USlideover>
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

  .map-panel {
    grid-area: map;
  }

  .list-panel {
    grid-area: list;
  }
}

.map-panel {
  max-height: 100vh;

  /*
  Fix: Leaflet sets z-index:400 on one of its internal containers, causing it to overlay other elements with z-index (USlideover).
  This z-index isolates the z-indexing within the panel's children, preventing page-wide competition on z-index ordering.
  */
  z-index: 0;
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

.property-panel {
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
}

</style>
