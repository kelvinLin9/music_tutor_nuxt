// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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