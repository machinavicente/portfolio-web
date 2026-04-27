<template>
  <section id="inicio" class="grid md:grid-cols-2 gap-12 items-center min-h-[80vh] border-b border-black/30 pb-20">
    <div class="order-1 md:order-1">
      <p class="uppercase tracking-[0.2em] text-sm mb-6">Bienvenido a mi mundo</p>
      <h1 class="text-5xl md:text-6xl title-main mb-6 leading-tight">
        Soy <span class="text-accent">Vicente  Machina </span><br />
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

    <div class="order-2 md:order-2 flex justify-center">
      <div class="inbio-card p-4 w-full max-w-md">
        <div class="bg-[#1c1e22] rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative group border border-white/5">
          <img src="@/assets/img/image.png" alt="Vicente Machina"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div class="absolute bottom-6 left-6 text-left bg-[#1c1e22]/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
            <p class="text-accent text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              <i class="ri-map-pin-user-fill"></i> Ubicación
            </p>
            <p class="text-white font-bold text-sm">Zaraza, Venezuela</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>