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
        'fixed top-0 right-0 h-screen w-[80%] sm:w-[60%] bg-[#1c1e22] shadow-2xl z-[105] p-6 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-between',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]">
        
        <div class="flex flex-col gap-4 mt-16">
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

          <div class="mt-6 pt-6 border-t border-white/5">
            <p class="uppercase text-[9px] tracking-[0.2em] mb-4 text-gray-500">Conectar</p>
            <div class="flex gap-3 justify-start flex-wrap">
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
const navLinks = [
  { text: 'Inicio', href: '#inicio' },
  { text: 'Servicios', href: '#servicios' },
  { text: 'Portafolio', href: '#portafolio' }
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : 'auto'
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.mobile-social-btn {
  /* Tamaño reducido de 48px a 40px para evitar desbordamiento */
  @apply w-10 h-10 rounded-lg bg-[#212428] shadow-[4px_4px_8px_#141619,-4px_-4px_8px_#2e3237] 
         flex items-center justify-center text-lg text-gray-400 transition-all 
         active:scale-90 active:shadow-inner;
}

.text-shadow-glow {
  text-shadow: 0 0 15px rgba(255, 1, 79, 0.3);
}

.inbio-btn-nav {
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 5px 5px 10px #1c1e22, -5px -5px 10px #262a2e;
}
</style>