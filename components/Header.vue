<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', headerClass]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div>
          <a href="#hero" class="flex items-center">
            <!-- Aumentado el tamaño del logo y reducido el alto del header -->
            <img src="~/assets/img/logusweb.png" alt="Machina Systems Logo" class="w-28 h-28 object-contain"/>
          </a>
        </div>
        
        <!-- Menu Desktop -->
        <nav class="hidden md:block">
          <ul class="flex items-center gap-8">
            <li><a href="#hero" :class="activeSection === 'hero' ? 'text-machina-brand font-medium' : 'text-machina-text hover:text-machina-brand'" class="transition-colors text-sm">Inicio</a></li>
            <li><a href="#servicios" :class="activeSection === 'servicios' ? 'text-machina-brand font-medium' : 'text-machina-text hover:text-machina-brand'" class="transition-colors text-sm">Servicios</a></li>
            <li><a href="#nosotros" :class="activeSection === 'nosotros' ? 'text-machina-brand font-medium' : 'text-machina-text hover:text-machina-brand'" class="transition-colors text-sm">Nosotros</a></li>
            <li><a href="#proyectos" :class="activeSection === 'proyectos' ? 'text-machina-brand font-medium' : 'text-machina-text hover:text-machina-brand'" class="transition-colors text-sm">Proyectos</a></li>
            <li><a href="#testimonios" :class="activeSection === 'testimonios' ? 'text-machina-brand font-medium' : 'text-machina-text hover:text-machina-brand'" class="transition-colors text-sm">Testimonios</a></li>
            <li><a href="#contacto" :class="activeSection === 'contacto' ? 'text-machina-brand font-medium' : 'text-machina-text hover:text-machina-brand'" class="transition-colors text-sm">Contacto</a></li>
          </ul>
        </nav>
        
        <!-- CTA Desktop -->
        <div class="hidden md:block">
          <a href="#contacto" class="bg-machina-brand text-machina-brand-text px-5 py-2 rounded text-sm font-medium hover:brightness-110 transition-colors">
            INICIAR PROYECTO
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMobileMenu" class="md:hidden relative w-10 h-10 flex items-center justify-center text-machina-text hover:text-machina-brand focus:outline-none z-[110] p-2">
          <transition name="icon-fade" mode="out-in">
            <i :key="mobileMenuOpen" :class="mobileMenuOpen ? 'ri-close-line' : 'ri-menu-4-line'" class="text-2xl"></i>
          </transition>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="mobileMenuOpen"
      @click="closeMobileMenu"
      class="fixed inset-0 bg-black/90 backdrop-blur-md z-[101] md:hidden transition-opacity duration-300"
    ></div>

    <!-- Mobile Menu -->
    <div :class="[
      'fixed top-0 right-0 h-screen w-full bg-machina-bg shadow-2xl z-[105] p-8 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col',
      mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
    ]">
      <div class="flex flex-col gap-6 mt-16">
        <nav class="flex flex-col gap-2">
          <a @click="closeMobileMenu" href="#hero" :class="activeSection === 'hero' ? 'bg-machina-brand/10 text-machina-brand' : 'text-machina-text hover:bg-machina-text/5'" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium">
            <i class="ri-home-4-line text-lg"></i>
            Inicio
          </a>
          <a @click="closeMobileMenu" href="#servicios" :class="activeSection === 'servicios' ? 'bg-machina-brand/10 text-machina-brand' : 'text-machina-text hover:bg-machina-text/5'" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium">
            <i class="ri-service-line text-lg"></i>
            Servicios
          </a>
          <a @click="closeMobileMenu" href="#nosotros" :class="activeSection === 'nosotros' ? 'bg-machina-brand/10 text-machina-brand' : 'text-machina-text hover:bg-machina-text/5'" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium">
            <i class="ri-team-line text-lg"></i>
            Nosotros
          </a>
          <a @click="closeMobileMenu" href="#proyectos" :class="activeSection === 'proyectos' ? 'bg-machina-brand/10 text-machina-brand' : 'text-machina-text hover:bg-machina-text/5'" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium">
            <i class="ri-folder-line text-lg"></i>
            Proyectos
          </a>
          <a @click="closeMobileMenu" href="#testimonios" :class="activeSection === 'testimonios' ? 'bg-machina-brand/10 text-machina-brand' : 'text-machina-text hover:bg-machina-text/5'" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium">
            <i class="ri-chat-quote-line text-lg"></i>
            Testimonios
          </a>
          <a @click="closeMobileMenu" href="#contacto" :class="activeSection === 'contacto' ? 'bg-machina-brand/10 text-machina-brand' : 'text-machina-text hover:bg-machina-text/5'" class="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-base font-medium">
            <i class="ri-mail-send-line text-lg"></i>
            Contacto
          </a>
        </nav>

        <div class="mt-6 pt-6 border-t border-machina-text/10">
          <a @click="closeMobileMenu" href="#contacto" class="flex items-center justify-center gap-2 w-full bg-machina-brand text-machina-brand-text px-5 py-4 rounded-xl text-sm font-bold hover:brightness-110 transition-all duration-200 shadow-lg shadow-machina-brand/20">
            <i class="ri-rocket-line text-lg"></i>
            INICIAR PROYECTO
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.icon-fade-enter-active,
.icon-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-fade-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.icon-fade-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('hero')
const headerClass = ref('bg-transparent')
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : 'auto'
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Close menu on escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('keydown', handleEscape)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('keydown', handleEscape)
  // Restore body scroll on unmount
  document.body.style.overflow = 'auto'
})

const updateActiveSection = () => {
  const sections = ['hero', 'servicios', 'nosotros', 'proyectos', 'testimonios', 'contacto']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetBottom = offsetTop + element.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section
        break
      }
    }
  }

  // Ajuste de fondo para evitar solapamiento visual
  if (window.scrollY > 50) {
    headerClass.value = 'bg-machina-bg/95 backdrop-blur-md shadow-sm py-0.5'
  } else {
    headerClass.value = 'bg-transparent py-1'
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>