<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden">
    <!-- Background Shapes -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- 2x2 Grid Layout -->
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Complete Care Card -->
        <div class="relative p-4">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white/80 backdrop-blur-md border border-[#1D4E4F33] rounded-3xl shadow-xl p-8 space-y-8 hover:shadow-2xl hover:scale-[1.02] transition duration-500">
            <!-- Title -->
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>

            <!-- Description -->
            <p class="text-neutral-700 font-medium">
              Full-service management for your holiday rental. Let us take care of everything—bookings, guests, maintenance & more.
            </p>

            <!-- Included Features -->
            <div>
              <h4 class="font-semibold text-[#1D4E4F] text-lg">What’s Included</h4>
              <ul class="space-y-2">
                <li v-for="(item, i) in features" :key="i" class="flex items-start gap-2 text-[#144041] text-base font-semibold">
                  <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow" :style="{ animationDelay: `${i * 100}ms` }" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Pricing Box -->
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F22]">
              <h4 class="text-lg font-semibold text-[#1D4E4F] mb-2">Pricing</h4>
              <p class="text-[#144041] font-semibold text-sm">
                <strong>Commission:</strong> 20% of booking fee
              </p>
              <p class="text-sm text-[#144041aa]">We only earn when you earn—aligned incentives, better results.</p>
            </div>

            <!-- Optional Add-ons -->
            <transition name="fade">
              <div v-if="expanded" class="pt-4 space-y-4 border-t border-neutral-200">
                <h4 class="text-lg font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                <ul class="text-sm text-neutral-700 font-medium space-y-2">
                  <li>🎁 <strong>Special Occasion Setup:</strong> Wine, treats & décor <em>(from R600)</em></li>
                  <li>🧹 <strong>Mid-Stay Cleaning:</strong> For longer bookings <em>(from R300)</em></li>
                  <li>👕 <strong>Laundry Services:</strong> Guest laundry on request</li>
                </ul>
              </div>
            </transition>

            <!-- Buttons -->
            <div class="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button @click="expanded = !expanded" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                {{ expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
              </button>
              <button class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <!-- Add other cards here for 2x2 layout -->
        <div class="relative p-4 text-center border-2 border-dashed border-[#ccc] rounded-3xl opacity-50">
          <p>Add more service cards here...</p>
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
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
