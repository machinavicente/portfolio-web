<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <Hero />
      <ServiciosEspecializados />
      <PorQueElegirnos />
      <Proyectos />
      <SeccionImpacto />

      <Testimonios />
      <Contacto />
      
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import ServiciosEspecializados from '~/components/ServiciosEspecializados.vue'
import PorQueElegirnos from '~/components/PorQueElegirnos.vue'
import Proyectos from '~/components/Proyectos.vue'
import SeccionImpacto from '~/components/SeccionImpacto.vue'
import Testimonios from '~/components/Testimonios.vue'
import Contacto from '~/components/Contacto.vue'
import Footer from '~/components/Footer.vue'
</script>