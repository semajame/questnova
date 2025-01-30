// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/motion/nuxt',
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

      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/img/image.png',
        },
      ],

      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  runtimeConfig: {
    public: {
      motion: {
        directives: {
          'pop-bottom': {
            initial: {
              scale: 0,
              opacity: 0,
              y: 100,
            },
            visible: {
              scale: 1,
              opacity: 1,
              y: 0,
            },
          },
        },
      },
    },
  },
})
