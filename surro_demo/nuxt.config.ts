// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    '@/assets/css/main.css',
    // '@fortawesome/fontawesome-free/css/all.css'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  ssr:false,
  pinia: {
    storesDirs: ['./stores/**', '../core/stores/**'],
  },
})
