<script setup lang="ts">
import PropertyCard from './PropertyCard.vue';

const properties = usePropertiesStore();
const map = useMapViewStore();

function jumpTo(property: Property) {
  properties.focus = property;

  map.view({
    lat: property.attributes.latitude,
    lng: property.attributes.longitude,
    zoom: 15,
    animate: true,
  });
}
</script>
<template>
  <ol class="p-1 space-y-1 bg-secondary">
    <li v-for="property of properties.list">
      <button type=button @click.prevent="jumpTo(property)">
        <PropertyCard :property="property" />
      </button>
    </li>
  </ol>
</template>
<style scoped>
ol {
  overflow-y: scroll;
  scrollbar-width: none;
}
li > button {
  /* Fix: Default for button is inline-block, causing li to have additional padding from line height. */
  display: block;
}
</style>
