<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/css';

const testimonials = [
  { text: "Antes perdía repuestos y no sabía cuánto ganaba realmente. Con DroidStock recuperé el control y aumenté mis ingresos un 40% en 2 meses.", name: "Carlos Méndez", role: "Dueño", initials: "CM", color: "bg-blue-500/10 text-blue-500" },
  { text: "El control de inventario me salvó. Ahora sé exactamente qué repuestos tengo y cuándo pedir más. Mi taller es mucho más rentable.", name: "Ana Rodríguez", role: "Gerente", initials: "AR", color: "bg-purple-500/10 text-purple-500" },
  { text: "Pasé del caos total a tener todo organizado. Mis técnicos trabajan más rápido y los clientes están más contentos. 100% recomendado.", name: "Javier López", role: "Supervisor", initials: "JL", color: "bg-green-500/10 text-green-500" },
  { text: "La interfaz es increíblemente intuitiva. Configuré todo mi inventario en una tarde y los resultados fueron inmediatos.", name: "Elena Torres", role: "Técnica", initials: "ET", color: "bg-pink-500/10 text-pink-500" },
  { text: "DroidStock es la herramienta que todo taller necesita. El soporte técnico es impecable y siempre están añadiendo funciones útiles.", name: "Ricardo Silva", role: "Administrador", initials: "RS", color: "bg-orange-500/10 text-orange-500" },
  { text: "Por fin tengo reportes claros de ventas y gastos. La visibilidad financiera que me da DroidStock no tiene comparación.", name: "Lucía Paredes", role: "Contadora", initials: "LP", color: "bg-cyan-500/10 text-cyan-500" },
  { text: "Desde que implementamos este sistema, los errores humanos en el inventario han bajado a cero. Estamos muy satisfechos.", name: "Marcos Vega", role: "Encargado", initials: "MV", color: "bg-red-500/10 text-red-500" }
];

const splideOptions = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: false,
  breakpoints: {
    768: { perPage: 1 }
  }
};
</script>

<template>
  <section id="testimonios" class="py-24 bg-[#212428] text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-accent uppercase tracking-widest text-sm mb-4">Testimonios</p>
        <h2 class="text-5xl font-bold mb-6">Historias de éxito</h2>
      </div>

      <Splide :options="splideOptions" aria-label="Testimonios de clientes">
        <SplideSlide v-for="(item, i) in testimonials" :key="i">
          <div class="bg-[#191b1e] p-8 rounded-2xl border border-white/5 h-full">
            <i class="ri-double-quotes-l text-4xl text-accent/50 mb-6"></i>
            <p class="text-gray-300 mb-8 leading-relaxed italic">"{{ item.text }}"</p>
            <div class="flex items-center gap-4 border-t border-white/5 pt-6">
              <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold" :class="item.color">{{ item.initials }}</div>
              <div>
                <h4 class="text-white font-bold text-sm">{{ item.name }}</h4>
                <p class="text-gray-500 text-xs uppercase">{{ item.role }}</p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<style scoped>
/* Ajuste opcional para que los botones de navegación se vean bien sobre el fondo oscuro */
:deep(.splide__arrow) {
  background: rgba(255, 255, 255, 0.1);
}
:deep(.splide__arrow svg) {
  fill: #fff;
}
</style>