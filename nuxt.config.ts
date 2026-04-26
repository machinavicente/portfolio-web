import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-27',
  devtools: { enabled: true },

  // Forzamos la ruta absoluta del archivo
  css: [resolve(__dirname, 'assets/css/main.css')],

  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Vicente Machina | Desarrollador Web & Móvil',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portafolio de desarrollador Full-Stack especializado en Vue.js, Nuxt, Flutter y Dart' }
      ],
      // Agregamos Remix Icon mediante CDN
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css' 
        }
      ]
    }
  }
})