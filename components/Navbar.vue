<template>
  <nav class="fixed top-0 w-full z-[100] bg-[#212428]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
    <div class="container mx-auto px-6 py-5 flex justify-between items-center">
      
      <div class="text-xl font-bold text-white tracking-[0.2em] uppercase">
        Vicente<span class="text-accent text-shadow-glow"> Machina</span>
      </div>

      <div class="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em]">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" 
           class="text-gray-400 hover:text-white transition-colors relative group">
          {{ link.text }}
          <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
        </a>
        
        <a href="#contacto" class="ml-4 px-7 py-3 rounded-lg text-accent inbio-btn-nav transition-all active:scale-95 shadow-lg font-bold uppercase tracking-widest text-[10px]">
          Hablemos
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
        'fixed top-0 right-0 h-screen w-[80%] sm:w-[65%] bg-[#1c1e22] shadow-2xl z-[105] p-6 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]">
        
        <div class="flex flex-col gap-4 mt-16 overflow-y-auto">
          <div class="pb-3 border-b border-white/5 mb-2">
             <span class="text-accent text-[10px] tracking-widest uppercase font-bold">Menú</span>
          </div>
          
          <nav class="flex flex-col">
            <a v-for="link in navLinks" :key="link.href" :href="link.href" 
               @click="closeMenu"
               class="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all flex justify-between items-center py-4 border-b border-white/5 last:border-0">
              {{ link.text }}
              <i class="ri-arrow-right-s-line text-accent/50 text-xl"></i>
            </a>
          </nav>

          <a href="#contacto" @click="closeMenu"
             class="mt-4 px-6 py-4 rounded-lg text-accent inbio-btn-nav text-center font-bold uppercase tracking-widest text-xs shadow-lg active:scale-95 transition-all">
            Hablemos
          </a>
        </div>

        <div class="mt-auto pt-6 border-t border-white/5 w-full">
          <p class="uppercase text-[9px] tracking-[0.2em] mb-4 text-gray-500">Conectar</p>
          <div class="flex flex-wrap gap-4 justify-start items-center overflow-hidden">
            <a href="https://github.com/machinavicente" target="_blank" class="mobile-social-btn" aria-label="GitHub">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://instagram.com/machinav.dev" target="_blank" class="mobile-social-btn" aria-label="Instagram">
              <i class="ri-instagram-line"></i>
            </a>
            <a href="#" class="mobile-social-btn" aria-label="LinkedIn">
              <i class="ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </div>

      <div 
        v-if="isOpen" 
        @click="closeMenu" 
        class="fixed inset-0 bg-black/90 backdrop-blur-md z-[101] md:hidden transition-opacity duration-300"
      ></div>

    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

// Configuración de los enlaces incluyendo la nueva sección de Tecnologías
const navLinks = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Tecnologías', href: '#skills' },
  { text: 'Portafolio', href: '#portafolio' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  // Bloquear scroll cuando el menú está abierto
  document.body.style.overflow = isOpen.value ? 'hidden' : 'auto'
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
/* Botones sociales con soporte para pantallas pequeñas */
.mobile-social-btn {
  @apply w-11 h-11 min-w-[44px] rounded-lg bg-[#212428] shadow-[4px_4px_8px_#141619,-4px_-4px_8px_#2e3237] 
         flex items-center justify-center text-xl text-gray-400 transition-all 
         active:scale-90 active:shadow-inner hover:text-accent;
}

.text-shadow-glow {
  text-shadow: 0 0 15px rgba(255, 1, 79, 0.3);
}

.inbio-btn-nav {
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 5px 5px 10px #1c1e22, -5px -5px 10px #262a2e;
}
</style>