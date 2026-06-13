<template>
  <section id="contacto" class="py-16 md:py-24 relative bg-white">
    
    <div class="max-w-7xl mx-auto px-4 md:px-6">
      <div class="text-center mb-8 md:mb-16">
        <p class="text-emerald-600 uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 font-bold">Contacto</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">¿Hablamos sobre tu proyecto?</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
        
        <!-- Lado Izquierdo: Carta Animada (Light Mode) -->
        <div class="lg:col-span-2 flex flex-col items-center justify-center space-y-4 md:space-y-6 lg:space-y-8 order-2 lg:order-1 py-4 md:py-0">
          <div class="relative group">
            <!-- SVG de carta MEJORADO visualmente (mismo diseño, trazos más nítidos) -->
            <svg class="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 text-emerald-500 animate-float" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
              <!-- Sobre base -->
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- Contorno del sobre -->
              <path d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="absolute -top-2 -right-2 md:-top-3 md:-right-3 lg:-top-4 lg:-right-4 bg-emerald-500 text-white font-bold px-2 py-1 md:px-3 md:py-1 lg:px-4 lg:py-1 rounded-full text-[9px] md:text-[10px] lg:text-xs uppercase rotate-12 shadow-xl">Escribe tu idea</div>
          </div>
          
          <div class="text-center px-2 md:px-4">
            <h3 class="text-lg md:text-xl lg:text-2xl text-gray-900 font-bold mb-1 md:mb-2">¡Espero tu mensaje!</h3>
            <p class="text-gray-600 text-xs md:text-sm lg:text-base">¿Tienes una idea en mente? Estoy listo para convertirla en código eficiente y funcional.</p>
          </div>
        </div>

        <!-- Formulario (Light Mode) -->
        <div class="lg:col-span-3 bg-white p-4 md:p-6 lg:p-8 rounded-[20px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] order-1 lg:order-2">
          <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div class="grid md:grid-cols-2 gap-4 md:gap-6">
              <input v-model="formData.user_name" type="text" placeholder="Nombre completo" class="w-full p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-emerald-500 outline-none transition-all text-sm md:text-base" required />
              <input v-model="formData.user_phone" type="tel" placeholder="Teléfono" class="w-full p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-emerald-500 outline-none transition-all text-sm md:text-base" />
            </div>
            <input v-model="formData.user_email" type="email" placeholder="Correo electrónico" class="w-full p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-emerald-500 outline-none transition-all text-sm md:text-base" required />
            <textarea v-model="formData.message" rows="4 md:rows-5" placeholder="¿Qué tienes en mente?" class="w-full p-3 md:p-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:border-emerald-500 outline-none transition-all resize-none text-sm md:text-base" required></textarea>
            
            <button :disabled="isSending" type="submit" class="w-full py-3 md:py-4 bg-gray-900 text-white font-bold uppercase rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 text-sm md:text-base">
              {{ isSending ? 'Enviando...' : 'Enviar mensaje' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Toast de Notificación -->
  <div v-if="toast.show" :class="['fixed bottom-5 right-5 z-50 px-6 py-4 rounded-lg shadow-xl border-l-4', toast.type === 'success' ? 'bg-white border-emerald-500 text-emerald-700' : 'bg-white border-red-500 text-red-700']">
    <p class="font-bold">{{ toast.type === 'success' ? '¡Éxito!' : 'Error' }}</p>
    <p class="text-sm">{{ toast.message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

// --- CONFIGURACIÓN EMAILJS ---
// Asegúrate de instalarlo con: npm install @emailjs/browser
emailjs.init('DkH8UONr2v4UIBV8Y');

const EMAILJS_SERVICE_ID = 'service_z3g7eih';
const EMAILJS_TEMPLATE_ID = 'template_fxibw0i';
const EMAILJS_PUBLIC_KEY = 'DkH8UONr2v4UIBV8Y';

// --- ESTADOS ---
const formData = ref({
  user_name: '',
  user_phone: '',
  user_email: '',
  message: ''
});

const isSending = ref(false);
const toast = ref({ show: false, type: 'success', message: '' });

// --- FUNCIONES ---
const showToast = (type, message) => {
  toast.value = { show: true, type, message };
  setTimeout(() => { toast.value.show = false; }, 5000);
};

const handleSubmit = async () => {
  isSending.value = true;
  
  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: formData.value.user_name,
      from_email: formData.value.user_email,
      phone: formData.value.user_phone || 'No proporcionado',
      message: formData.value.message
    }, EMAILJS_PUBLIC_KEY);

    showToast('success', '¡Mensaje enviado! Te contactaré pronto.');
    formData.value = { user_name: '', user_phone: '', user_email: '', message: '' };
  } catch (error) {
    showToast('error', 'Hubo un error al enviar. Intenta de nuevo.');
  } finally {
    isSending.value = false;
  }
};
</script>

<style scoped>
.animate-float { animation: float 3s ease-in-out infinite; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
</style>