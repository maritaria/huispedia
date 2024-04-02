<script setup lang="ts">
const props = defineProps<{ property: Property }>();

const title = computed(() => props.property.attributes.street + ' ' + props.property.attributes.houseNumberFull);
</script>
<template>
  <div class="p-4 space-y-2">
    <h1 class="flex gap-2">
      {{ title }}
      <UBadge>{{ property.attributes.houseType }}</UBadge>
    </h1>
    <img :src="property.attributes.image.href" class="w-full object-cover">
    <hr>
    test
  </div>
</template>
