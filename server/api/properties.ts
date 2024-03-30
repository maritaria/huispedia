export default defineEventHandler(async event => {
    const data = await useStorage('assets:server').getItem('houses.json') as { data: unknown[] };
    return data.data;
});