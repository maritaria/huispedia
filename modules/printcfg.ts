import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
    setup(options, nuxt) {
        nuxt.hook('nitro:config', async (nitroConfig) => {
            console.log('Nitro config', nitroConfig);
        })
    },
    hooks: {
        ready: (nuxt) => {
            // console.log('Nitro storage mounts:', nuxt._nitro.storage.getMounts());
        },
    },
});
