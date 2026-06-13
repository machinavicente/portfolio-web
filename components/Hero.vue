<template>
  <section id="hero" class="min-h-screen relative bg-machina-bg flex items-center pt-20 pb-32 overflow-hidden">
    <!-- Contenido principal -->
    <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      
      <!-- Columna Izquierda: Texto -->
      <div class="w-full text-center lg:text-left">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-machina-title leading-tight mb-6">
          Machina Systems <br>
          <span class="text-machina-brand">Soluciones Digitales</span>
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-machina-text/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
          Desarrollo web. Creamos tecnología escalable que impulsa el crecimiento de tu negocio con enfoque en resultados.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
          <a href="#contacto" class="w-full sm:w-auto min-w-[200px] bg-machina-brand text-machina-brand-text px-8 py-3 rounded font-bold hover:brightness-110 transition-colors text-center">
            INICIAR PROYECTO
          </a>
          <a href="#servicios" class="w-full sm:w-auto min-w-[200px] bg-transparent text-machina-title px-8 py-3 rounded font-bold border-2 border-machina-title hover:bg-machina-title hover:text-machina-brand-text transition-colors text-center">
            VER SERVICIOS
          </a>
        </div>
      </div>

      <!-- Columna Derecha: Laptop con elementos técnicos -->
      <div class="w-full flex justify-center lg:justify-end relative py-10">
        <!-- Círculo de fondo -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-machina-accent/20 rounded-full blur-[100px]"></div>
        
        <!-- Laptop -->
        <div class="relative z-10 w-full max-w-[400px] md:max-w-[600px]">
          <img src="~/assets/img/mock.png" alt="Laptop" class="w-full drop-shadow-2xl" />
          
          <!-- Badges con animaciones totalmente distintas -->
          <div class="absolute -top-4 -right-2 md:-top-6 md:-right-6 bg-machina-bg-secondary border border-machina-text/10 p-3 md:p-4 rounded-xl text-machina-title shadow-xl animate-float-a">
            <p class="text-xs md:text-sm font-bold text-machina-brand">Calidad Garantizada</p>
            <p class="text-[9px] md:text-[10px] text-machina-text/60">Código optimizado</p>
          </div>

          <div class="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-machina-bg-secondary border border-machina-text/10 p-3 md:p-4 rounded-xl text-machina-title shadow-xl animate-float-b">
            <p class="text-xs md:text-sm font-bold text-machina-brand">Atención 1:1</p>
            <p class="text-[9px] md:text-[10px] text-machina-text/60">Comunicación directa</p>
          </div>

          <div class="absolute top-1/3 -left-6 md:-left-12 bg-machina-bg-secondary border border-machina-text/10 p-2 md:p-3 rounded-xl text-machina-title shadow-xl animate-float-c">
            <p class="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-machina-brand">Full Stack</p>
            <p class="text-[8px] md:text-[9px] text-machina-text/60">Vue · Nuxt · Supabase</p>
          </div>
        </div>
      </div>
    </div>

    <!-- SVG de curva inferior -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
      <svg class="relative block w-full h-[80px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:var(--machina-bg, #0f172a);stop-opacity:1" />
            <stop offset="100%" style="stop-color:#ffffff;stop-opacity:1" />
          </linearGradient>
        </defs>
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.37,111.31,985.66,92.83Z" fill="url(#heroGradient)"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
/* Diferentes patrones de animación */
.animate-float-a { animation: floatA 8s infinite cubic-bezier(0.4, 0, 0.2, 1); }
.animate-float-b { animation: floatB 8s infinite linear; }
.animate-float-c { animation: floatC 9s infinite ease-in-out; }

@keyframes floatA {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
}

@keyframes floatB {
  0% { transform: translate(0, 0); }
  33% { transform: translate(10px, -20px); }
  66% { transform: translate(-10px, -40px); }
  100% { transform: translate(0, 0); }
}

@keyframes floatC {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-15px) scale(1.05); }
}
</style>