<script setup lang="ts">
const props = defineProps<{ property: Property }>();

const title = computed(() => props.property.attributes.street + ' ' + props.property.attributes.houseNumberFull);

function toSentence(text: string) {
  if (typeof text !== 'string') return 'bekend';
  return text.toLowerCase();
}

const priceFormatter = new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' });
function toPrice(value: number) {
  if (typeof value !== 'number') return value;
  return priceFormatter.format(value);
}

</script>
<template>
  <div class="p-4">
    <h1 class="flex gap-2 mb-2 text-xl text-bold">
      {{ title }}
      <UBadge>{{ property.attributes.houseType }}</UBadge>
    </h1>
    <img :src="property.attributes.image.href" class="w-full object-cover">

    <h2>
      <UIcon name="i-heroicons-wallet" /> Aanbod
    </h2>
    <p>Dit huis is {{ toSentence(property.attributes.offer.status) }}</p>
    <p>Prijs {{ toPrice(property.attributes.offer.salePrice) }}</p>
    <a :href="property.attributes.huispediaProfileUrl" target="_blank">
      Bekijk op huispedia.nl
      <UIcon name="i-heroicons-link" />
    </a>

    <h2>
      <UIcon name="i-heroicons-map-pin" /> Locatie
    </h2>
    <p>Postcode: {{ property.attributes.postcode }}</p>
    <p>Plaats {{ property.attributes.city }}</p>
    <p>Gemeente {{ property.attributes.municipality }}</p>
    <p>Provincie {{ property.attributes.province }}</p>

    <h2>
      <UIcon name="i-heroicons-home"/> Eigenschappen
    </h2>
    <p>Woning-type {{ property.attributes.houseType }}</p>
    <p>Woning-soort {{ property.attributes.houseSubType }}</p>
    <p>Oppervlak {{ property.attributes.useSurface }}m²</p>
    <p>Bouwjaar {{ property.attributes.buildYear }}</p>
    <p v-if="property.attributes.energyLabel">Energie-label {{ property.attributes.energyLabel }}</p>
  </div>
</template>
<style scoped>
h2 {
  @apply text-primary;
  @apply mt-2;
}
a {
  @apply text-secondary;
  text-decoration: underline;
}
</style>
