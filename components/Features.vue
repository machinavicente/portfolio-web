<script setup>
const features = [
  {
    icon: 'ri-window-fill',
    title: 'Desarrollo Web',
    desc: 'Arquitecturas Full-Stack robustas con Vue.js, Nuxt.js y Python para soluciones digitales escalables.'
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Desarrollo Móvil',
    desc: 'Creación de aplicaciones móviles multiplataforma con Flutter y Dart, enfocadas en una gran experiencia de usuario.'
  },
  {
    icon: 'ri-settings-5-line',
    title: 'Soporte de Hardware',
    desc: 'Mantenimiento predictivo, preventivo y correctivo. Diagnóstico avanzado de sistemas computacionales.'
  },
  {
    icon: 'ri-database-2-line',
    title: 'QA & Auditoría Técnica',
    desc: 'Control de calidad y auditoría técnica de dispositivos móviles con validación rigurosa de hardware.'
  },
  {
    icon: 'ri-clapperboard-line',
    title: 'Contenido Digital',
    desc: 'Edición dinámica para TikTok/Reels con Adobe Premiere Pro y storytelling visual orientado a resultados.'
  },
]
</script>

<template>
  <section id="servicios" class="relative">
    <div>
      <div class="mb-16 text-center md:text-left">
        <p class="text-accent uppercase tracking-widest text-sm mb-4">Especialidades</p>
        <h2 class="text-5xl title-main mb-6">Lo que hago</h2>
        <p class="max-w-3xl text-[#878e99] leading-relaxed">
          Combino tecnología, diseño y optimización para entregar productos digitales confiables, eficientes y con una experiencia de usuario clara.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div v-for="feat in features" :key="feat.title" class="inbio-card group cursor-default overflow-hidden">
          <div class="flex items-center justify-center w-16 h-16 rounded-3xl bg-white/5 text-4xl text-accent mb-6 shadow-[inset_4px_4px_15px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:-translate-y-2">
            <i :class="feat.icon"></i>
          </div>
          <h3 class="text-2xl title-main mb-4">{{ feat.title }}</h3>
          <p class="text-[#878e99] leading-relaxed">{{ feat.desc }}</p>
        </div>
      </div>

      <div class="mt-12 p-8 rounded-[2rem] bg-[#1c1e22]/80 border border-white/10 shadow-[inset_8px_8px_20px_rgba(0,0,0,0.3)] flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-accent uppercase tracking-widest text-xs mb-2">¿Listo para empezar?</p>
          <h3 class="text-3xl title-main">Transforma tu idea en una solución real.</h3>
        </div>
        <a href="#contacto" class="inline-flex items-center justify-center px-7 py-4 rounded-lg text-accent inbio-btn-nav font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg">
          Hablemos
        </a>
      </div>
    </div>
  </section>
</template>