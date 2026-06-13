import { resolve } from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-27',
  devtools: { enabled: true },

  // Forzamos la ruta absoluta del archivo
  css: [resolve(__dirname, 'assets/css/main.css')],

  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Machina Systems | IT Solutions & Digital Innovation',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Machina Systems delivers innovative IT solutions including web development, mobile development, cloud computing, cybersecurity, and digital marketing.' }
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