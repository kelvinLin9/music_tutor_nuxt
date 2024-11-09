// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
        }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    '~/plugins/moment.js',
    '~/plugins/swiper.client.js'
  ],

  css: [
    'swiper/css',
    'swiper/css/effect-fade',
    'swiper/css/navigation',
    'swiper/css/pagination',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
  ],

  compatibilityDate: '2024-10-22',
})