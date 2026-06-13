<script setup>
import { ref, onMounted } from 'vue';

// --- Lógica de contadores ---
const statsSection = ref(null);
const animatedValues = ref({ speed: 0, satisfaction: 0, years: 0 });

const animateValue = (key, start, end, duration) => {
  let startTime = null;
  const step = (timestamp) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    animatedValues.value[key] = Math.floor(progress * (end - start) + start);
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateValue('speed', 0, 99, 2000);
      animateValue('satisfaction', 0, 100, 2000);
      animateValue('years', 0, 3, 2000);
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  if (statsSection.value) observer.observe(statsSection.value);
});

// Lista de servicios para el Marquee
const services = [
  "Sistemas Web", "Aplicaciones Web", "Landing Pages", 
  "Sitios Web Corporativos", "E-commerce", "Dashboards", 
  "APIs & Backend", "SaaS Solutions", "PWA (Web Apps)"
];
</script>

<template>
  <section ref="statsSection" class="py-20 bg-machina-bg-secondary">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center" v-for="(stat, idx) in [{v:'+'+animatedValues.speed+'%', t:'Rendimiento'}, {v:animatedValues.satisfaction+'%', t:'Satisfacción'}, {v:'+'+animatedValues.years, t:'Años en el mercado'}, {v:'ÁGIL', t:'Metodologías'}]" :key="idx">
          <div class="text-4xl md:text-5xl lg:text-6xl font-black text-machina-title mb-2">{{ stat.v }}</div>
          <div class="text-xs md:text-sm uppercase tracking-widest text-machina-text">{{ stat.t }}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white py-8 overflow-hidden border-y border-gray-100">
    <div class="marquee-wrapper">
      <div class="marquee-inner flex gap-12 animate-fast-scroll">
        <span v-for="item in [...services, ...services]" :key="item" 
              class="text-xl font-bold text-gray-800 whitespace-nowrap uppercase tracking-tighter flex items-center gap-12">
          {{ item }}
          <span class="text-gray-300">•</span>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee-wrapper {
  display: flex;
  width: 100%;
}

.marquee-inner {
  display: flex;
  animation: scroll 15s linear infinite; /* Duración reducida para mayor velocidad */
}

@keyframes scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); } /* Se desplaza la mitad del contenedor duplicado */
}

/* Hover pausa la animación */
.marquee-inner:hover {
  animation-play-state: paused;
}
</style>