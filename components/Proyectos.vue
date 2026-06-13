<template>
  <section id="proyectos" class="py-16 md:py-24 bg-white text-gray-900">
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      
      <!-- Encabezado -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Proyectos que resuelven problemas reales</h2>
        <p class="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
          Cada uno nació de una necesidad concreta. <span class="text-machina-accent font-semibold">Y la transformamos en software que funciona.</span>
        </p>
      </div>

      <!-- Carrusel de proyectos -->
      <Splide 
        :options="splideOptions" 
        aria-label="Proyectos destacados"
        class="projects-carousel"
      >
        <SplideSlide v-for="project in projects" :key="project.name">
          <div class="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden hover:border-machina-accent transition-all duration-300 h-full flex flex-col">
            
            <!-- Imagen -->
            <div class="relative h-48 md:h-56 overflow-hidden bg-gray-100">
              <img 
                :src="project.image" 
                :alt="project.name"
                class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 right-3 md:top-4 md:right-4">
                <span class="text-[10px] md:text-xs font-semibold text-machina-accent bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full shadow-sm">
                  {{ project.category }}
                </span>
              </div>
            </div>

            <!-- Contenido -->
            <div class="p-4 md:p-6 flex flex-col flex-grow">
              <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">{{ project.name }}</h3>
              <p class="text-gray-600 text-sm md:text-base leading-relaxed mb-3 md:mb-4 flex-grow">
                {{ project.description }}
              </p>
              
              <!-- Tags (opcionales, pequeños) -->
              <div class="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span 
                  v-for="tag in project.tags.slice(0, 3)" 
                  :key="tag"
                  class="text-[10px] md:text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Botón ver proyecto -->
              <a 
                :href="project.link" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 bg-[#1E1E1E] text-white font-semibold px-3 py-2 md:px-4 md:py-2 rounded-xl hover:bg-[#3E3E3E] hover:animate-darken transition-all duration-300 w-full text-sm md:text-base"
              >
                <i class="ri-eye-line"></i>
                Ver proyecto
                <i class="ri-external-link-line text-sm"></i>
              </a>
            </div>
          </div>
        </SplideSlide>
      </Splide>

      <!-- Botón "Todos los proyectos" a GitHub -->
      <div class="text-center mt-8 md:mt-12">
        <a 
          href="https://github.com/machinavicente" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 bg-[#1E1E1E] text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-[#3E3E3E] hover:animate-darken transition-all duration-300 hover:shadow-lg"
        >
          <i class="ri-github-fill text-xl md:text-2xl"></i>
          Ver todos los proyectos en GitHub
          <i class="ri-arrow-right-line"></i>
        </a>
        <p class="text-gray-500 text-xs md:text-sm mt-3 md:mt-4">
          Todos mis proyectos · Código abierto y demos disponibles
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css';

// Configuración del carrusel
const splideOptions = {
  type: 'loop',
  perPage: 2,
  perMove: 1,
  gap: '1.5rem',
  pagination: false,
  arrows: true,
  breakpoints: {
    768: { perPage: 1 },
  },
  classes: {
    arrows: 'splide__arrows text-machina-accent',
    arrow: 'splide__arrow bg-white border border-gray-200 shadow-md hover:bg-machina-accent hover:text-white transition-all',
  },
};

// Tus dos proyectos reales
const projects = [
  {
    name: "MachinaLab Finder",
    category: "Full-Stack / Educación",
    image: "https://github.com/machinavicente/portfolio-web/releases/download/Relese/Screenshot_2.png",
    link: "https://machinalabfinder.vercel.app/",
    description: "Plataforma centralizada para simuladores de laboratorio. Optimizo recursos académicos y facilito el acceso a herramientas educativas.",
    tags: ["Vue.js", "Supabase", "Bootstrap"],
  },
  {
    name: "DroidStock",
    category: "SaaS / Talleres",
    image: "https://github.com/machinavicente/DroidStock/releases/download/v1.0.0/droidstock.png",
    link: "https://droidstock.netlify.app/",
    description: "Gestión integral para talleres de reparación electrónica. Control de inventario, reparaciones, técnicos, ventas de repuestos y reportes financieros.",
    tags: ["Nuxt 3", "Supabase", "Tailwind", "Multi-tenant"],
  },
];
</script>

<style scoped>
/* Ajustes extra para flechas del carrusel */
.projects-carousel :deep(.splide__arrow) {
  background: white;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  width: 2.5rem;
  height: 2.5rem;
  opacity: 0.9;
}
.projects-carousel :deep(.splide__arrow:hover) {
  background: var(--machina-accent, #3b82f6);
  border-color: transparent;
}
.projects-carousel :deep(.splide__arrow svg) {
  fill: #4b5563;
}
.projects-carousel :deep(.splide__arrow:hover svg) {
  fill: white;
}
.projects-carousel :deep(.splide__pagination__page.is-active) {
  background: var(--machina-accent, #3b82f6);
}

/* Animación para el botón ver proyecto */
@keyframes darken {
  0% {
    background-color: #3E3E3E;
  }
  100% {
    background-color: #1E1E1E;
  }
}

.animate-darken {
  animation: darken 0.5s ease-in-out forwards;
}
</style>