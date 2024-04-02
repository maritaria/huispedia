<script setup lang="ts">
defineProps<{
  property: Property;
}>();
</script>
<template>
  <div class="property-card">
    <img :src="property.attributes.image.href" class="w-full object-cover">
    <UBadge class="label">{{ property.attributes.houseType }}</UBadge>
  </div>
</template>
<style scoped>
.property-card {
  position: relative;
}

.label {
  position: absolute;
  @apply absolute left-1 bottom-1;
}

</style>
