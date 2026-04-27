<script setup>
const handleSubmit = (event) => {
  // Aquí irá la lógica de EmailJS que configuramos anteriormente
  console.log("Formulario enviado");
};
</script>

<template>
  <section id="contacto" class="border-t border-black/30 pt-24 pb-40">
    <div class="text-center mb-16">
      <p class="text-accent uppercase tracking-widest text-sm mb-4">Contacto</p>
      <h2 class="text-5xl title-main">Hablemos de tu Proyecto</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
      <div class="lg:col-span-2">
        <div class="inbio-card h-full">
          <div class="rounded-2xl overflow-hidden mb-8 bg-[#1c1e22] aspect-video flex items-center justify-center border border-white/5">
            <i class="ri-customer-service-2-line text-7xl text-white/5"></i>
          </div>
          <h3 class="text-3xl title-main mb-4 text-white">Vicente Machina</h3>
          <p class="text-accent text-sm mb-6 uppercase tracking-widest">Ingeniero de Sistemas</p>
          <p class="text-[#878e99] leading-relaxed mb-8">
            Estoy disponible para trabajos freelance o proyectos a tiempo completo. Contáctame y hablemos.
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
          <div class="flex gap-4">
            <a href="https://github.com/machinavicente" target="_blank" class="inbio-btn w-12 h-12 text-lg">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://instagram.com/machinav.dev" target="_blank" class="inbio-btn w-12 h-12 text-lg">
              <i class="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3">
        <div class="inbio-card">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-3">
                <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Nombre</label>
                <input type="text" class="inbio-input" required />
              </div>
              <div class="flex flex-col gap-3">
                <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Teléfono</label>
                <input type="text" class="inbio-input" />
              </div>
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Correo</label>
              <input type="email" class="inbio-input" required />
            </div>
            <div class="flex flex-col gap-3">
              <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Mensaje</label>
              <textarea rows="6" class="inbio-input resize-none"></textarea>
            </div>
            <button type="submit" class="w-full py-4 inbio-btn-nav text-accent font-bold uppercase tracking-widest flex items-center justify-center gap-3 group">
              Enviar Mensaje
              <i class="ri-send-plane-fill transition-transform group-hover:translate-x-2 group-hover:-translate-y-1"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>