<template>
  <div class="min-h-screen text-justify">
    <nav
      class="fixed top-0 w-full z-50 bg-[#212428]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div class="container mx-auto px-6 py-5 flex justify-between items-center">

        <div class="text-xl font-bold text-white tracking-[0.2em] uppercase">
          Vicente<span class="text-accent text-shadow-glow"> Machina</span>
        </div>

        <div class="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.15em]">
          <a href="#inicio" class="text-gray-400 hover:text-white transition-colors relative group">
            Inicio
            <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#servicios" class="text-gray-400 hover:text-white transition-colors relative group">
            Servicios
            <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
          </a>
          <a href="#portafolio" class="text-gray-400 hover:text-white transition-colors relative group">
            Portafolio
            <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
          </a>

          <a href="#contacto"
            class="ml-4 px-7 py-3 rounded-lg text-accent inbio-btn-nav transition-all active:scale-95 shadow-lg">
            <span class="flex items-center gap-2">
              Hablemos
              <i class="ri-chat-3-line text-lg"></i>
            </span>
          </a>
        </div>

        <div class="md:hidden text-2xl text-accent">
          <i class="ri-menu-3-line"></i>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-6 pt-32 space-y-32">

      <section id="inicio" class="grid md:grid-cols-2 gap-12 items-center min-h-[80vh] border-b border-black/30 pb-20">
        <div class="order-2 md:order-1">
          <p class="uppercase tracking-[0.2em] text-sm mb-6">Bienvenido a mi mundo</p>
          <h1 class="text-5xl md:text-6xl title-main mb-6 leading-tight">
            Hola, soy <span class="text-accent">Vicente Machina</span><br />
            <span class="text-white">Ingeniero de Sistemas.</span>
          </h1>
          <p class="text-lg leading-relaxed text-[#878e99] mb-12 max-w-xl">
            Especializado en desarrollo Full-Stack y optimización de hardware.
            Ingeniero dedicado a crear soluciones tecnológicas escalables,
            modernas y eficientes.
          </p>

          <div class="flex flex-col md:flex-row gap-12">
            <div>
              <p class="uppercase text-xs tracking-widest mb-6">Conéctate conmigo</p>
              <div class="flex gap-4">
                <a href="https://github.com/machinavicente" target="_blank" class="inbio-btn w-14 h-14 text-xl">
                  <i class="ri-github-fill"></i>
                </a>
                <a href="https://instagram.com/machinav.dev" target="_blank" class="inbio-btn w-14 h-14 text-xl">
                  <i class="ri-instagram-line"></i>
                </a>
                <a href="#" class="inbio-btn w-14 h-14 text-xl">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="order-1 md:order-2 flex justify-center">
          <div class="inbio-card p-4 w-full max-w-md">
            <div
              class="bg-[#1c1e22] rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative group border border-white/5">
              <img src="./../assets/img/image.png" alt="Vicente Machina"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div
                class="absolute bottom-6 left-6 text-left bg-[#1c1e22]/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <p class="text-accent text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                  <i class="ri-map-pin-user-fill"></i> Ubicación
                </p>
                <p class="text-white font-bold text-sm">Zaraza, Venezuela</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios">
        <p class="text-accent uppercase tracking-widest text-sm mb-4">Especialidades</p>
        <h2 class="text-5xl title-main mb-12">Lo que hago</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="feat in features" :key="feat.title" class="inbio-card group cursor-default">
            <div class="text-4xl text-accent mb-6 group-hover:-translate-y-2 transition-transform duration-300">
              <i :class="feat.icon"></i>
            </div>
            <h3 class="text-2xl title-main mb-4">{{ feat.title }}</h3>
            <p class="text-[#878e99] leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </section>

      <section id="portafolio">
        <div class="text-center mb-16">
          <p class="text-accent uppercase tracking-widest text-sm mb-4">Visita mis proyectos y comparte tu opinión</p>
          <h2 class="text-5xl title-main">Mi Portafolio</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="proj in projects" :key="proj.name" class="inbio-card group">
            <div
              class="rounded-xl overflow-hidden mb-6 bg-[#1c1e22] aspect-video flex items-center justify-center relative border border-white/5">
              <i
                :class="[proj.icon, 'text-6xl text-white/5 group-hover:text-accent/20 transition-all duration-500']"></i>
            </div>
            <div class="flex justify-between text-[10px] text-accent uppercase font-bold mb-4 tracking-widest">
              <span>{{ proj.category }}</span>
              <span class="flex items-center gap-1"><i class="ri-heart-fill"></i> 600</span>
            </div>
            <h3
              class="text-xl title-main hover:text-accent transition-colors cursor-pointer flex items-center justify-between">
              {{ proj.name }}
              <i class="ri-arrow-right-up-line opacity-0 group-hover:opacity-100 transition-all"></i>
            </h3>
          </div>
        </div>
      </section>
      <section id="contacto" class="border-t border-black/30 pt-24 pb-40">
        <div class="text-center mb-16">
          <p class="text-accent uppercase tracking-widest text-sm mb-4">Contacto</p>
          <h2 class="text-5xl title-main">Hablemos de tu Proyecto</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div class="lg:col-span-2">
            <div class="inbio-card h-full">
              <div
                class="rounded-2xl overflow-hidden mb-8 bg-[#1c1e22] aspect-video flex items-center justify-center border border-white/5">
                <i class="ri-customer-service-2-line text-7xl text-white/5"></i>
              </div>

              <h3 class="text-3xl title-main mb-4 text-white">Vicente Machina</h3>
              <p class="text-accent text-sm mb-6 uppercase tracking-widest">Ingeniero de Sistemas</p>

              <p class="text-[#878e99] leading-relaxed mb-8">
                Estoy disponible para trabajos freelance o proyectos a tiempo completo. Contáctame y hablemos sobre cómo
                puedo ayudarte.
              </p>

              <div class="space-y-4 mb-10">
                <p class="flex items-center gap-4 text-gray-300">
                  <i class="ri-whatsapp-line text-accent text-xl"></i>
                  <span>+58 426-737-9617</span>
                </p>
                <p class="flex items-center gap-4 text-gray-300">
                  <i class="ri-mail-send-line text-accent text-xl"></i>
                  <span>vicentemachina.dev@gmail.com</span>
                </p>
              </div>

              <div>
                <p class="uppercase text-xs tracking-widest mb-6 text-gray-400">Encuéntrame en</p>
                <div class="flex gap-4">
                  <a href="https://github.com/machinavicente" target="_blank" class="inbio-btn w-12 h-12 text-lg">
                    <i class="ri-github-fill"></i>
                  </a>
                  <a href="https://instagram.com/machinav.dev" target="_blank" class="inbio-btn w-12 h-12 text-lg">
                    <i class="ri-instagram-line"></i>
                  </a>
                  <a href="#" class="inbio-btn w-12 h-12 text-lg">
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3">
            <div class="inbio-card">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="flex flex-col gap-3">
                    <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Tu
                      Nombre</label>
                    <input type="text" class="inbio-input" required />
                  </div>
                  <div class="flex flex-col gap-3">
                    <label
                      class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Teléfono</label>
                    <input type="text" class="inbio-input" />
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Correo
                    Electrónico</label>
                  <input type="email" class="inbio-input" required />
                </div>

                <div class="flex flex-col gap-3">
                  <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Asunto</label>
                  <input type="text" class="inbio-input" />
                </div>

                <div class="flex flex-col gap-3">
                  <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Mensaje</label>
                  <textarea rows="6" class="inbio-input resize-none"></textarea>
                </div>

                <button type="submit"
                  class="w-full py-4 inbio-btn-nav text-accent font-bold uppercase tracking-widest flex items-center justify-center gap-3 group">
                  Enviar Mensaje
                  <i
                    class="ri-send-plane-fill transition-transform group-hover:translate-x-2 group-hover:-translate-y-1"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="py-20 mt-20 border-t border-black/30 text-center">
      <p class="text-[#878e99] text-sm tracking-widest uppercase">
        © 2026. Todos los derechos reservados por <span class="text-white">Vicente Machina</span>
      </p>
    </footer>
  </div>
</template>

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
    title: 'QA & Gestión de Hardware Móvil',
    desc: 'Control de calidad (QA) y auditoría técnica de dispositivos móviles. Especializado en la validación de hardware y gestión de inventarios técnicos mediante flujos de trabajo optimizados.'
  },
  {
    icon: 'ri-clapperboard-line',
    title: 'Contenido Digital',
    desc: 'Edición dinámica para TikTok/Reels usando Adobe Premiere Pro y flujos de trabajo de storytelling visual.'
  },
]

const projects = [
  {
    name: 'MachinaLab Finder',
    category: 'Aplicación Web',
    icon: 'ri-terminal-box-line'
  },
]
</script>