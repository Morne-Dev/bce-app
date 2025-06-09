<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- Packages Grid with Circular Highlights & Stagger -->
      <div class="grid gap-12 md:grid-cols-2 mb-20">
        <!-- Complete Care Package Card -->
        <div class="relative p-4">
          <!-- Circular backdrop -->
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500 z-10">
            <h3 class="text-3xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>
            <p class="text-neutral-700 font-medium leading-relaxed">
              Ideal for property owners who want us to handle everything—from bookings and inquiries to basic maintenance—while focusing on essential services.
            </p>
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">What’s Included</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Booking & Inquiries Management</li>
              <li>Guest Welcome & Key Handover</li>
              <li>Property Inspection & Regular Maintenance Checks</li>
              <li>Basic Amenities & Stocking</li>
              <li>Basic Repairs & Support</li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F33]">
              <p class="text-[#144041] font-semibold">Commission: 20% of booking fee</p>
            </div>
            <div>
              <transition name="fade">
                <div v-if="expandedA" class="pt-4 space-y-2 border-t border-neutral-200">
                  <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                  <ul class="text-neutral-700 space-y-1">
                    <li>Special Occasion Setup (from R600)</li>
                    <li>Mid-Stay Cleaning (from R300)</li>
                    <li>Laundry Service</li>
                  </ul>
                </div>
              </transition>
              <button @click="expandedA = !expandedA" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                {{ expandedA ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
              </button>
            </div>
            <button class="mt-6 w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        <!-- Premium Care Package Card (staggered) -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-8 -right-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500 z-10">
            <h3 class="text-3xl font-semibold text-[#1D4E4F]">Premium Care Package</h3>
            <p class="text-neutral-700 font-medium leading-relaxed">
              Fully managed, seamless experience—from bookings and inquiries to VIP guest services, luxury amenities, and minor maintenance.
            </p>
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">What’s Included</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Full Booking & Inquiry Management</li>
              <li>Guest Welcome & VIP Check-in</li>
              <li>Professional Cleaning After Check-out</li>
              <li>Laundry Service</li>
              <li>High-End Amenities & Welcome Pack</li>
              <li>Basic & Minor Maintenance</li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F33]">
              <p class="text-[#144041] font-semibold">Flat Fee: From R1200/mo + 25% commission</p>
            </div>
            <div>
              <transition name="fade">
                <div v-if="expandedB" class="pt-4 space-y-2 border-t border-neutral-200">
                  <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                  <ul class="text-neutral-700 space-y-1">
                    <li>Special Occasion Setup (from R600)</li>
                    <li>Laundry Service</li>
                    <li>Mid-Stay Cleaning (from R300)</li>
                  </ul>
                </div>
              </transition>
              <button @click="expandedB = !expandedB" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                {{ expandedB ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
              </button>
            </div>
            <button class="mt-6 w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <!-- Services Grid with Stagger -->
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Cleaning Services Card -->
        <div class="relative p-4">
          <div class="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500 z-10">
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">Cleaning Services</h4>
            <p class="text-neutral-700 font-medium leading-relaxed">
              Thorough, professional cleaning for your property between stays or on-demand sessions.
            </p>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li><strong>Standard Cleaning:</strong> From R460 per session</li>
              <li><strong>Hot Tub Cleaning:</strong> From R150 (deep clean & sanitization)</li>
              <li><strong>Add-Ons:</strong> Fridge Defrost, Essentials Restock, Personalized Setup</li>
            </ul>
            <button class="mt-6 w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Book Cleaning
            </button>
          </div>
        </div>
        <!-- Maintenance Services Card (staggered) -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-6 hover:shadow-2xl transition-shadow duration-500 z-10">
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">Maintenance Services</h4>
            <p class="text-neutral-700 font-medium leading-relaxed">
              Keep your property running smoothly with basic repairs, urgent fixes, and ongoing maintenance packages.
            </p>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li><strong>Basic Maintenance:</strong> From R350 per call-out</li>
              <li><strong>Emergency Maintenance:</strong> From R600 (after-hours response)</li>
              <li><strong>Monthly Package:</strong> From R1000/mo (priority service + regular check-ups)</li>
            </ul>
            <button class="mt-6 w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300">
              Book Maintenance
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const expandedA = ref(false);
const expandedB = ref(false);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
