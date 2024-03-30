import type { Property } from "~/utils/types";

export const usePropertiesStore = defineStore({
    id: 'properties',
    state: () => ({
        list: [] as Property[],
    }),
    actions: {
        async fetchList() {
            return this.list = await $fetch('/api/properties');
        },
    },
});
