<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Packages
        </h2>
      </div>
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Complete Care Package Card -->
        <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-8 hover:shadow-2xl transition-shadow duration-500">
          <h3 class="text-3xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>
          <p class="text-neutral-700 font-medium">
            Ideal for property owners who want us to handle everything—from bookings and inquiries to basic maintenance—while focusing on essential services.
          </p>
          <div>
            <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-4">What’s Included</h4>
            <ul class="space-y-3 list-disc list-inside text-[#144041]">
              <li>Booking & Inquiries Management</li>
              <li>Guest Welcome & Key Handover</li>
              <li>Property Inspection & Regular Maintenance Checks</li>
              <li>Basic Amenities & Stocking</li>
              <li>Basic Repairs & Support</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33]">
            <p class="text-[#144041] font-semibold text-lg">
              Commission: 20% of booking fee
            </p>
          </div>
          <div>
            <transition name="fade">
              <div v-if="expandedA" class="pt-4 space-y-4 border-t border-neutral-200">
                <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                <ul class="space-y-2 text-neutral-700">
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

        <!-- Premium Care Package Card -->
        <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-10 space-y-8 hover:shadow-2xl transition-shadow duration-500">
          <h3 class="text-3xl font-semibold text-[#1D4E4F]">Premium Care Package</h3>
          <p class="text-neutral-700 font-medium">
            Fully managed, seamless experience—from bookings and inquiries to VIP guest services, luxury amenities, and minor maintenance.
          </p>
          <div>
            <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-4">What’s Included</h4>
            <ul class="space-y-3 list-disc list-inside text-[#144041]">
              <li>Full Booking & Inquiry Management</li>
              <li>Guest Welcome & VIP Check-in</li>
              <li>Professional Cleaning After Check-out</li>
              <li>Laundry Service</li>
              <li>High-End Amenities & Welcome Pack</li>
              <li>Basic & Minor Maintenance</li>
            </ul>
          </div>
          <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33]">
            <p class="text-[#144041] font-semibold text-lg">
              Flat Fee: From R1200/mo + 25% commission
            </p>
          </div>
          <div>
            <transition name="fade">
              <div v-if="expandedB" class="pt-4 space-y-4 border-t border-neutral-200">
                <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                <ul class="space-y-2 text-neutral-700">
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
const expandedA = ref(false);
const expandedB = ref(false);
</script>

<style scoped>
@keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-5%);}}
.animate-bounce-slow {animation:bounce-slow 3s ease-in-out infinite;}
.fade-enter-active, .fade-leave-active {transition:opacity 0.5s ease;}
.fade-enter-from, .fade-leave-to {opacity:0;}
</style>
