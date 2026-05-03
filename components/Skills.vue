<script setup>
const skills = [
  { name: 'Vue / Nuxt', icon: 'ri-vuejs-line', color: 'group-hover:text-[#42b883]' },
  { name: 'Flutter', icon: 'ri-flutter-fill', color: 'group-hover:text-[#02569b]' },
  { name: 'Tailwind CSS', icon: 'ri-tailwind-css-fill', color: 'group-hover:text-[#06b6d4]' },
  { name: 'Bootstrap', icon: 'ri-bootstrap-line', color: 'group-hover:text-[#7952b3]' },
  { name: 'Supabase', icon: 'ri-database-2-line', color: 'group-hover:text-[#3ecf8e]' },
  { name: 'PHP', icon: 'ri-code-s-slash-line', color: 'group-hover:text-[#777bb4]' },
  { name: 'Hardware', icon: 'ri-cpu-line', color: 'group-hover:text-accent' },
]
</script>

<template>
  <section id="skills" class="py-20 bg-[#212428]">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <p class="text-accent uppercase tracking-[0.3em] text-xs font-bold mb-4">Stack Tecnológico</p>
        <h2 class="text-4xl md:text-5xl title-main text-[#c4cfde] font-bold">Herramientas que domino</h2>
      </div>

      <div class="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        <div v-for="skill in skills" :key="skill.name" 
             class="group w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] xl:w-[160px] p-8 rounded-2xl bg-[#212428] shadow-inbio flex flex-col items-center justify-center gap-5 transition-all duration-300 hover:-translate-y-2">
          
          <div class="text-5xl text-gray-500 transition-colors duration-300" :class="skill.color">
            <i :class="skill.icon"></i>
          </div>
          
          <span class="text-[11px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors text-center">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.shadow-inbio {
  box-shadow: 10px 10px 19px #1c1e22, -10px -10px 19px #262a2e;
}

.shadow-inbio:hover {
  background: linear-gradient(145deg, #23272b, #1e2024);
  box-shadow: inset 10px 10px 20px #181a1d, inset -10px -10px 20px #2a2e33;
}

.title-main {
  font-family: 'Montserrat', sans-serif;
}
</style>