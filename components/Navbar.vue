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
          Contactar
        </a>
      </div>

      <button 
        @click="toggleMenu" 
        class="md:hidden text-2xl text-accent focus:outline-none z-[110] p-2"
        aria-label="Menú de navegación"
      >
        <i :class="isOpen ? 'ri-close-line' : 'ri-menu-3-line'"></i>
      </button>

      <div :class="[
        'fixed top-0 right-0 h-screen w-[80%] sm:w-[65%] bg-[#1c1e22] shadow-2xl z-[105] p-8 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      ]">
        
        <div class="flex flex-col gap-6 mt-16">
          
          <nav class="flex flex-col">
            <a v-for="link in navLinks" :key="link.href" :href="link.href" 
               @click="closeMenu"
               class="text-lg font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all flex justify-between items-center py-5 border-b border-white/5 last:border-0 group">
              {{ link.text }}
              <i class="ri-arrow-right-s-line text-accent opacity-0 group-hover:opacity-100 transition-all text-2xl"></i>
            </a>
          </nav>

          <a href="#contacto" @click="closeMenu"
             class="mt-8 px-6 py-5 rounded-lg text-accent inbio-btn-nav text-center font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95 transition-all">
            Iniciar Conversación
          </a>
        </div>

        <div class="mt-auto pb-6 text-center">
          <p class="text-[9px] uppercase tracking-[0.2em] text-gray-600 italic">
            &copy; 2026 Vicente Machina
          </p>
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
  { text: 'Tecnologías', href: '#skills' },
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
.text-shadow-glow {
  text-shadow: 0 0 15px rgba(255, 1, 79, 0.3);
}

.inbio-btn-nav {
  background: linear-gradient(145deg, #1e2024, #23272b);
  box-shadow: 5px 5px 10px #1c1e22, -5px -5px 10px #262a2e;
}

/* Animación sutil para los links del móvil */
nav a {
  transition: all 0.3s ease;
}
</style>