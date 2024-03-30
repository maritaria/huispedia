export const useMapStore = defineStore({
    id: 'map',
    state: () => ({
        lat: 0,
        lng: 0,
        zoom: 0,
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

interface ViewChange {
    lat: number;
    lng: number;
    zoom?: number;
    animate?: boolean;
}