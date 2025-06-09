<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="relative max-w-7xl mx-auto z-10 space-y-24">
      <!-- Hero Title Section -->
      <div class="text-center space-y-6">
        <h2 class="text-5xl sm:text-6xl font-serif font-bold text-[#1D4E4F] relative inline-block leading-tight">
          Complete Care Package
          <span class="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#6BD4D4] to-transparent rounded-full blur-sm opacity-50 -z-10"></span>
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-neutral-700 font-medium tracking-wide">
          Full-service management for your holiday rental. Let us take care of everything—bookings, guests, maintenance & more.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Feature Card -->
        <div class="relative p-2">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">What’s Included</h3>
            <ul class="space-y-4">
              <li v-for="(item, i) in features" :key="i" class="flex items-start gap-3 text-[#144041] text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow" :style="{ animationDelay: `${i * 100}ms` }"
                  fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Pricing Card -->
        <div class="relative p-2">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Pricing</h3>
            <p class="text-[#144041] text-lg font-semibold">
              <strong>Commission:</strong> 20% of booking fee
            </p>
            <p class="text-sm text-[#144041aa]">
              We only earn when you earn—aligned incentives, better results.
            </p>
          </div>
        </div>

        <!-- Add-ons Card -->
        <div class="relative p-2 col-span-full md:col-span-1">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h3>
            <transition name="fade">
              <div v-if="expanded" class="space-y-4">
                <ul class="space-y-3 text-neutral-700 font-medium">
                  <li>🎁 <strong>Special Occasion Setup:</strong> Wine, treats & décor <em>(from R600)</em></li>
                  <li>🧹 <strong>Mid-Stay Cleaning:</strong> For longer bookings <em>(from R300)</em></li>
                  <li>👕 <strong>Laundry Services:</strong> Guest laundry on request</li>
                </ul>
              </div>
            </transition>
            <button @click="expanded = !expanded"
              class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
              {{ expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
            </button>
          </div>
        </div>

        <!-- CTA Button Card -->
        <div class="relative p-2 col-span-full md:col-span-1 flex justify-center items-center">
          <button
            class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:shadow-xl transition active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const features = [
  'Booking & Inquiries Management',
  'Guest Welcome & Key Handover',
  'Property Inspection & Maintenance',
  'Basic Amenities & Stocking',
  'Basic Repairs & Support'
]
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
