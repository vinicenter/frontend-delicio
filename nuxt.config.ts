// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    delicio: {
      url: process.env.DELICIO_API_URL as string,
    },
  },
  app: {
    head: {
      title: 'Delicio',
      link: [{ rel: 'icon', type: 'image/jpeg', href: "/delicio.jpeg" }]
    },
  },
})
