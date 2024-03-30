<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import L, { map, type LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';

const container = ref<HTMLElement>();
const leaflet = shallowRef<L.Map>();
const properties = usePropertiesStore();
const mapView = useMapStore();
mapView.view({lat:52.377956,lng: 4.897070, zoom: 12, animate: false});

watchEffect((cleanup) => {
  if (!container.value) return;
  leaflet.value = createLeafletMap(container.value);
  cleanup(() => leaflet.value?.remove());
});

function createLeafletMap(element: HTMLElement): L.Map {
  const map = L.map(element, {
    attributionControl: false,
    center: [mapView.lat, mapView.lng],
    zoom: mapView.zoom,zoomAnimation: true,
  });

  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  map.addLayer(tiles);

  return map;
}

const markers = new Map<number, L.Marker>();
watchEffect(() => {
  if (!leaflet.value) return;
  console.log('properties', properties.list);

  for (const property of properties.list) {
    if (!markers.has(property.id)) {
      markers.set(property.id, createPropertyMarker(property));
    }
  }

  for (const marker of markers.values()) {
    marker.addTo(leaflet.value);
  }

  function createPropertyMarker(property: Property): L.Marker {
    const latlng: L.LatLngTuple = [property.attributes.latitude, property.attributes.longitude];
    return L.marker(latlng, {});
  }
});

watch(() => ({leaflet, lat:mapView.lat, lng:mapView.lng, zoom:mapView.zoom, animate:mapView.animate}) as const, ({leaflet,lat,lng,zoom,animate}, old) => {
  if (!leaflet.value) return;
  if (lat !== old.lat || lng !== old.lng || zoom !== old.zoom) {
    console.log('View changed', {lat, lng}, zoom, {animate});
    leaflet.value.setView({lat, lng}, zoom, {animate});
  }  
});

</script>
<template>
  <div ref="container" style="height:100%;"></div>
</template>
