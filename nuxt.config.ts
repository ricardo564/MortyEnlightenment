// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@vueuse/nuxt'
  ],
  extends: [
    'nuxt-seo-kit'
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
  devtools: {
    enabled: true,
    vscode: {}
  },
  linkChecker: {
    failOn404: true
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://github.com/ricardo564',
      siteName: 'Awesome basic configuration Site',
      siteDescription: 'Description base of the site.',
      language: 'en'
    }
  }
})
