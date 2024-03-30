export const useMapViewStore = defineStore({
  id: 'map',
  state: () => ({
    lat: 52.377956,
    lng: 4.897070,
    zoom: 12,
    animate: false,
  }),
  actions: {
    view(change: ViewChange) {
      this.lat = change.lat;
      this.lng = change.lng;
      if (typeof change.zoom !== 'undefined') {
        this.zoom = change.zoom;
      }
      if (typeof change.animate !== 'undefined') {
        this.animate = !!change.animate;
      }
    },
  },
});

export interface ViewChange {
  lat: number;
  lng: number;
  zoom?: number;
  animate?: boolean;
}
