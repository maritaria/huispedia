export default defineEventHandler(async event => {
  const json = await useStorage('assets:server').getItem('houses.json') as { data: unknown[] };
  return json.data;
});
