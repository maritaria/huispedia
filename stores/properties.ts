import type { Property } from "~/utils/types";

export const usePropertiesStore = defineStore({
  id: 'properties',
  state: () => ({
    list: [] as Property[],
    focus: null as (Property | null),
  }),
  actions: {
    async fetchList() {
      return this.list = await $fetch('/api/properties');
    },
    // TODO: focusNearby(latLng) -> focus closest property at given coordinates.
  },
});
