import L from 'leaflet';
const scale = 1 / 3;
export const leafletMarkerIcon = new L.Icon({
  iconUrl: '/huispedia_marker.png',
  iconSize: [69 * scale, 89 * scale],
  iconAnchor: [35 * scale, 87 * scale],
});
