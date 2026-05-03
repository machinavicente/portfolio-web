<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

// --- INICIALIZAR EMAILJS ---
emailjs.init('DkH8UONr2v4UIBV8Y');

// --- TUS CREDENCIALES (YA CONFIGURADAS) ---
const EMAILJS_SERVICE_ID = 'service_z3g7eih';
const EMAILJS_TEMPLATE_ID = 'template_fxibw0i';
const EMAILJS_PUBLIC_KEY = 'DkH8UONr2v4UIBV8Y';

// --- Datos del formulario ---
const formData = ref({
  user_name: '',
  user_phone: '',
  user_email: '',
  message: ''
});

// --- Estados para el toast y envío ---
const isSending = ref(false);
const toast = ref({
  show: false,
  type: 'success',
  message: ''
});

// --- Funciones del toast ---
const showToast = (type, message) => {
  toast.value = {
    show: true,
    type: type,
    message: message
  };
  
  setTimeout(() => {
    toast.value.show = false;
  }, 5000);
};

const closeToast = () => {
  toast.value.show = false;
};

// --- Función para enviar el correo ---
const handleSubmit = async (event) => {
  event.preventDefault();
  
  // Validar campos requeridos
  if (!formData.value.user_name || !formData.value.user_email || !formData.value.message) {
    showToast('error', 'Por favor, completa los campos requeridos (nombre, correo y mensaje)');
    return;
  }
  
  toast.value.show = false;
  isSending.value = true;

  const templateParams = {
    from_name: formData.value.user_name,
    from_email: formData.value.user_email,
    phone: formData.value.user_phone || 'No proporcionado',
    message: formData.value.message
  };

  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID, 
      EMAILJS_TEMPLATE_ID, 
      templateParams, 
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Correo enviado con éxito:', response);
    
    showToast('success', '¡Mensaje enviado con éxito! Te responderé en menos de 24 horas.');
    
    formData.value = {
      user_name: '',
      user_phone: '',
      user_email: '',
      message: ''
    };
    
  } catch (error) {
    console.error('Error al enviar:', error);
    
    let errorMsg = 'Hubo un problema al enviar el mensaje. ';
    if (error.text) {
      errorMsg += error.text;
    } else {
      errorMsg += 'Por favor, intenta de nuevo.';
    }
    
    showToast('error', errorMsg);
    
  } finally {
    isSending.value = false;
  }
};
</script>

<template>
  <section id="contacto" class="border-t border-black/30 pt-24 pb-40 relative">
    <!-- Toast de notificación - AHORA EN LA PARTE INFERIOR -->
    <div class="fixed bottom-5 right-5 z-50 animate-in" v-if="toast.show">
      <div :class="[
        'flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl min-w-[300px] max-w-md border-l-4',
        toast.type === 'success' 
          ? 'bg-green-500/10 border-green-500 text-green-400' 
          : 'bg-red-500/10 border-red-500 text-red-400'
      ]">
        <i :class="[
          'text-2xl',
          toast.type === 'success' ? 'ri-checkbox-circle-fill' : 'ri-error-warning-fill'
        ]"></i>
        
        <div class="flex-1">
          <p class="font-semibold text-sm">
            {{ toast.type === 'success' ? '¡Éxito!' : 'Error' }}
          </p>
          <p class="text-xs opacity-90">{{ toast.message }}</p>
        </div>
        
        <button @click="closeToast" class="opacity-70 hover:opacity-100 transition-opacity">
          <i class="ri-close-line text-xl"></i>
        </button>
      </div>
    </div>

    <div class="text-center mb-16">
      <p class="text-accent uppercase tracking-widest text-sm mb-4">Contacto</p>
      <h2 class="text-5xl title-main">¿Listo para dar vida a tu proyecto?</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto px-4">
      <!-- Tarjeta de información profesional -->
      <div class="lg:col-span-2">
        <div class="inbio-card h-full">
          <div class="rounded-2xl overflow-hidden mb-8 bg-[#1c1e22] aspect-video flex items-center justify-center border border-white/5">
            <i class="ri-customer-service-2-line text-7xl text-white/5"></i>
          </div>
          <h3 class="text-3xl title-main mb-4 text-white">Vicente Machina</h3>
          <p class="text-accent text-sm mb-6 uppercase tracking-widest">Ingeniero de Sistemas</p>
          
          <p class="text-white/80 text-sm italic mb-6 border-l-2 border-accent pl-4">
            "Transformo ideas en soluciones digitales funcionales"
          </p>
          
          <p class="text-[#878e99] leading-relaxed mb-8">
            Con experiencia en desarrollo full-stack y arquitectura de software, 
            puedo llevar tu proyecto desde el concepto hasta la implementación.
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
          
          <p class="text-xs text-gray-500 mb-4 flex items-center gap-2">
            <i class="ri-time-line"></i> Respuesta en menos de 24 horas
          </p>
          
          <div class="flex gap-4">
            <a href="https://github.com/machinavicente" target="_blank" rel="noopener noreferrer" class="inbio-btn w-12 h-12 text-lg">
              <i class="ri-github-fill"></i>
            </a>
            <a href="https://instagram.com/machinav.dev" target="_blank" rel="noopener noreferrer" class="inbio-btn w-12 h-12 text-lg">
              <i class="ri-instagram-line"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Formulario de contacto -->
      <div class="lg:col-span-3">
        <div class="inbio-card">
          <div class="mb-8 text-center">
            <p class="text-gray-400 text-sm">
              Cuéntame sobre tu idea. <span class="text-accent">Sin compromiso</span>, solo conversemos.
            </p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-3">
                <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">¿Cómo te llamas?</label>
                <input 
                  type="text" 
                  v-model="formData.user_name"
                  placeholder="Ej: Carlos Mendoza" 
                  class="inbio-input" 
                  required 
                />
              </div>
              <div class="flex flex-col gap-3">
                <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Teléfono</label>
                <input 
                  type="tel" 
                  v-model="formData.user_phone"
                  placeholder="+58 412 1234567" 
                  class="inbio-input" 
                />
              </div>
            </div>
            
            <div class="flex flex-col gap-3">
              <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">Correo electrónico</label>
              <input 
                type="email" 
                v-model="formData.user_email"
                placeholder="carlos@tuempresa.com" 
                class="inbio-input" 
                required 
              />
            </div>
            
            <div class="flex flex-col gap-3">
              <label class="text-[12px] uppercase tracking-widest text-gray-400 font-semibold ml-1">¿En qué puedo ayudarte?</label>
              <textarea 
                rows="6" 
                v-model="formData.message"
                placeholder="Describe brevemente tu proyecto o idea..." 
                class="inbio-input resize-none"
                required
              ></textarea>
            </div>
            
            <p class="text-xs text-gray-500 text-center">
              <i class="ri-lock-line"></i> Tus datos están seguros. No comparto información con terceros.
            </p>
            
            <button 
              type="submit" 
              :disabled="isSending"
              class="w-full py-4 inbio-btn-nav text-accent font-bold uppercase tracking-widest flex items-center justify-center gap-3 group transition-all duration-300"
              :class="{ 'opacity-70 cursor-not-allowed': isSending }"
            >
              <span v-if="!isSending">Enviar mensaje</span>
              <span v-else>Enviando...</span>
              <i 
                class="ri-send-plane-fill transition-all duration-300"
                :class="{
                  'group-hover:translate-x-2 group-hover:-translate-y-1': !isSending,
                  'animate-pulse': isSending
                }"
              ></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes slideInFromBottom {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideOutToBottom {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
}

.animate-in {
  animation: slideInFromBottom 0.3s ease-out;
}

/* Opcional: si quieres animación al salir */
.animate-out {
  animation: slideOutToBottom 0.3s ease-out forwards;
}
</style>