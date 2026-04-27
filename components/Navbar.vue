<template>
  <nav class="fixed top-0 w-full z-[100] bg-[#212428]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      
      <div class="text-xl font-bold text-white tracking-[0.2em] uppercase">
        Vicente<span class="text-accent text-shadow-glow"> Machina</span>
      </div>

      <div class="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em]">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" 
           class="text-gray-400 hover:text-white transition-colors relative group">
          {{ link.text }}
          <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
        </a>
        
        <a href="#contacto" class="ml-4 px-7 py-3 rounded-lg text-accent inbio-btn-nav transition-all active:scale-95 shadow-lg">
          <span class="flex items-center gap-2">
            Hablemos <i class="ri-chat-3-line text-lg"></i>
          </span>
        </a>
      </div>

      <button 
        @click="toggleMenu" 
        class="md:hidden text-2xl text-accent focus:outline-none z-[110] p-2"
        aria-label="Toggle Menu"
      >
        <i :class="isOpen ? 'ri-close-line' : 'ri-menu-3-line'"></i>
      </button>

      <div :class="[
        'fixed top-0 right-0 h-screen w-[80%] bg-[#1c1e22] shadow-2xl z-[105] p-10 transform transition-transform duration-500 ease-in-out md:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]">
        <div class="flex flex-col gap-6 mt-16">
          <div class="pb-6 border-b border-white/5 mb-4">
             <span class="text-accent text-xs tracking-widest uppercase">Navegación</span>
          </div>
          
          <a v-for="link in navLinks" :key="link.href" :href="link.href" 
             @click="closeMenu"
             class="text-lg font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all flex justify-between items-center group">
            {{ link.text }}
            <i class="ri-arrow-right-s-line text-accent opacity-0 group-hover:opacity-100 transition-all"></i>
          </a>

          <a href="#contacto" @click="closeMenu"
             class="mt-8 px-7 py-4 rounded-lg text-accent inbio-btn-nav text-center font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-all">
            Hablemos
          </a>
        </div>
        
        <div class="absolute bottom-10 left-10 right-10">
          <p class="uppercase text-[10px] tracking-[0.2em] mb-6 text-gray-500 border-b border-white/5 pb-2">Redes Profesionales</p>
          <div class="flex gap-5">
            <a href="https://github.com/machinavicente" target="_blank" class="mobile-social-btn">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://instagram.com/machinav.dev" target="_blank" class="mobile-social-btn">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="#" class="mobile-social-btn">
              <i class="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div 
        v-if="isOpen" 
        @click="closeMenu" 
        class="fixed inset-0 bg-[#000]/70 backdrop-blur-sm z-[101] md:hidden transition-opacity duration-300"
      ></div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

// Estado para controlar el menú móvil
const isOpen = ref(false)

// Links de navegación centralizados
const navLinks = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Portafolio', href: '#portafolio' }
]

// Funciones de control
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // Bloquear el scroll del body cuando el menú está abierto
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
/* Botones de redes sociales específicos para el móvil con estilo neumórfico suave */
.mobile-social-btn {
  @apply w-12 h-12 rounded-lg bg-[#212428] shadow-[5px_5px_10px_#141619,-5px_-5px_10px_#2e3237] 
         flex items-center justify-center text-xl text-gray-400 transition-all 
         hover:-translate-y-1 hover:text-accent active:shadow-inner;
}

/* Animación de brillo para el texto accent (opcional) */
.text-shadow-glow {
  text-shadow: 0 0 15px rgba(255, 1, 79, 0.3);
}
</style>