<script setup>
const projects = [
  {
    name: "MachinaLab Finder",
    category: "Full-Stack / Educación",
    image:
      "https://github.com/machinavicente/portfolio-web/releases/download/Relese/Screenshot_2.png",
    link: "https://machinalabfinder.vercel.app/",
    description:
      "Plataforma centralizada para simuladores de laboratorio. Optimizo recursos académicos y facilito el acceso a herramientas educativas.",
    tags: ["Vue.js", "Supabase", "Bootstrap"],
  },
  {
    name: "DroidStock",
    category: "SaaS / Talleres",
    image:
      "https://github.com/machinavicente/DroidStock/releases/download/v1.0.0/droidstock.png",
    link: "https://droidstock.netlify.app/",
    description:
      "Gestión integral para talleres de reparación electrónica. Control de inventario, reparaciones, técnicos, ventas de repuestos y reportes financieros.",
    tags: ["Nuxt 3", "Supabase", "Tailwind", "Multi-tenant"],
  },
];
</script>

<template>
  <section id="portafolio" class="py-20">
    <div class="text-center mb-16">
      <p class="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4">
        Trabajos Recientes
      </p>
      <h2 class="text-4xl md:text-6xl title-main text-white font-bold">
        Proyectos Destacados
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <a
        v-for="proj in projects"
        :key="proj.name"
        :href="proj.link"
        target="_blank"
        class="inbio-card group p-6 rounded-[20px] bg-[#212428] transition-all duration-500 hover:-translate-y-3 block no-underline outline-none"
      >
        <div
          class="relative overflow-hidden rounded-xl aspect-video mb-6 shadow-inner bg-[#1c1e22]"
        >
          <img
            :src="proj.image"
            class="w-full h-full object-fill transition-transform duration-700 group-hover:scale-110"
            alt="Vista previa del proyecto MachinaLab Finder"
          />

          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
          >
            <div
              class="w-14 h-14 bg-accent rounded-full flex items-center justify-center text-white text-2xl shadow-lg transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500"
            >
              <i class="ri-external-link-line"></i>
            </div>
          </div>
        </div>

        <div class="flex justify-between items-center mb-4">
          <span
            class="text-accent text-[10px] uppercase font-bold tracking-[0.2em]"
            >{{ proj.category }}</span
          >
          <div class="flex gap-2">
            <span
              v-for="tag in proj.tags"
              :key="tag"
              class="text-[9px] bg-emerald-950/50 text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <h3
          class="text-2xl title-main text-[#c4cfde] group-hover:text-accent transition-colors mb-3 flex items-center justify-between"
        >
          {{ proj.name }}
          <i
            class="ri-arrow-right-up-line opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-y-1"
          ></i>
        </h3>

        <p class="text-[#878e99] text-sm leading-relaxed mb-6 text-justify">
          {{ proj.description }}
        </p>
      </a>
    </div>
  </section>
</template>

<style scoped>
/* Estilo InBio: Sombras neumórficas profundas */
.inbio-card {
  box-shadow:
    10px 10px 19px #1c1e22,
    -10px -10px 19px #262a2e;
  cursor: pointer;
  text-decoration: none !important;
}

.inbio-card:hover {
  background: linear-gradient(145deg, #212428, #1e2024);
  box-shadow:
    15px 15px 30px #191b1e,
    -15px -15px 30px #292d32;
}

.title-main {
  font-family: "Montserrat", sans-serif;
}

/* Evitar que el texto herede estilos de enlace por defecto */
p,
span,
h3 {
  text-decoration: none !important;
}
</style>
