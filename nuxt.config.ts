// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      // List the fonts you want here
      Inter: true, // All weights of Inter
      Lora: true, // All weights for Lora
    },

    prefetch: true, // Preload fonts during the build
    preconnect: true, // Preconnect to Google's font servers
    display: 'swap', // Ensure text remains visible during font loading
  },

  app: {
    head: {
      title: 'Questnova Systems Corporation',
      meta: [
        {
          name: 'description',
          content: 'Questnova Systems Corporation ',
        },
      ],

      htmlAttrs: {
        lang: 'en',
      },
    },
  },
})
