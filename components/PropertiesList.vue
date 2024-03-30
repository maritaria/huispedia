<script setup lang="ts">
const properties = usePropertiesStore();
const map = useMapViewStore();

function jumpTo(property: Property) {
  map.view({
    lat: property.attributes.latitude,
    lng: property.attributes.longitude,
    zoom: 15,
    animate: true,
  });
}

</script>
<template>
  <ol>
    <li v-for="property of properties.list">
      <button type=button @click.prevent="jumpTo(property)">
        {{ property.attributes.street }} {{ property.attributes.houseNumberFull }}
        <img :src="property.attributes.image.href">
      </button>
    </li>
  </ol>
</template>
<style scoped>
ol {
  overflow-y: scroll;
  scrollbar-width: none;
}
</style>
