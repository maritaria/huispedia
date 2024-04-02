// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/fonts",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg', href: '/huispedia_logo.svg' },
        { rel: 'icon', type: 'image/png', href: '/huispedia_logo.png' },
      ],
      title: 'Huispedia Onepage',
    },
  },
})
