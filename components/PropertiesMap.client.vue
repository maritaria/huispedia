<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const container = ref<HTMLElement>();
const leaflet = shallowRef<L.Map>();
const mapView = useMapViewStore();

watch(container, (container, _, cleanup) => {
  if (!container) return;
  leaflet.value = createLeafletMap(container);
  cleanup(() => leaflet.value?.remove());
});

function createLeafletMap(element: HTMLElement): L.Map {
  const map = L.map(element, {
    attributionControl: false,
    center: [mapView.lat, mapView.lng],
    zoom: mapView.zoom,
  });

  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  map.addLayer(tiles);

  return map;
}

watch(() => ({ leaflet, lat: mapView.lat, lng: mapView.lng, zoom: mapView.zoom, animate: mapView.animate }) as const, ({ leaflet, lat, lng, zoom, animate }, old) => {
  if (!leaflet.value) return;
  if (lat !== old.lat || lng !== old.lng || zoom !== old.zoom) {
    leaflet.value.setView({ lat, lng }, zoom, { animate });
  }
});

const properties = usePropertiesStore();
const markers = new Map<number, L.Marker>();
watch(() => [leaflet.value, properties.list] as const, ([leaflet, list]) => {
  if (!leaflet) return;

  for (const property of list) {
    if (!markers.has(property.id)) {
      const marker = createPropertyMarker(property);
      marker.addTo(leaflet);
      markers.set(property.id, marker);
    }
  }
});

function createPropertyMarker(property: Property): L.Marker {
  const latlng: L.LatLngTuple = [property.attributes.latitude, property.attributes.longitude];
  return L.marker(latlng, {
    icon: leafletMarkerIcon,
  });
}

</script>
<template>
  <div ref="container" style="height:100%;"></div>
</template>
