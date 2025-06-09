<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <!-- Background Shapes -->
    <div class="absolute -top-20 -left-20 w-64 h-64 bg-[#6BD4D4]/20 rounded-full filter blur-3xl"></div>
    <div class="absolute bottom-0 right-0 w-72 h-72 bg-[#1D4E4F]/25 rounded-full filter blur-2xl"></div>

    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- 2x2 Staggered Grid -->
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Complete Care -->
        <div class="relative p-4">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>
            <p class="text-neutral-700 font-medium">Handle everything—from bookings to basic maintenance—seamlessly.</p>
            <h4 class="font-semibold text-[#1D4E4F]">What’s Included</h4>
            <ul class="space-y-2 list-none text-[#144041]">
              <li class="flex items-center gap-2 text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Booking & Inquiries Management
              </li>
              <li class="flex items-center gap-2 text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow delay-75" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Guest Welcome & Key Handover
              </li>
              <li class="flex items-center gap-2 text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow delay-150" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Property Inspection & Maintenance
              </li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F33]">
              <p class="text-[#144041] font-semibold">Commission: 20%</p>
            </div>
            <div>
              <transition name="fade">
                <div v-if="expandedA" class="pt-4 space-y-4 border-t border-neutral-200">
                  <h4 class="text-lg font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                  <ul class="space-y-2 text-neutral-700">
                    <li>Special Occasion Setup (from R600)</li>
                    <li>Mid-Stay Cleaning (from R300)</li>
                    <li>Laundry Service</li>
                  </ul>
                </div>
              </transition>
              <button @click="expandedA = !expandedA" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                {{ expandedA ? 'Hide Add-Ons' : 'Read More Add-Ons' }}
              </button>
            </div>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <!-- Premium Care (staggered) -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-8 -right-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Premium Care Package</h3>
            <p class="text-neutral-700 font-medium">Fully managed, VIP services, luxury amenities, and maintenance.</p>
            <h4 class="font-semibold text-[#1D4E4F]">What’s Included</h4>
            <ul class="space-y-2 list-none text-[#144041]">
              <li class="flex items-center gap-2 text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Full Booking & Inquiry Management
              </li>
              <li class="flex items-center gap-2 text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow delay-75" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                VIP Check-in & Guest Services
              </li>
              <li class="flex items-center gap-2 text-lg font-semibold">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow delay-150" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Professional Cleaning & Laundry
              </li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F33]">
              <p class="text-[#144041] font-semibold">Flat Fee: R1200/mo + 25%</p>
            </div>
            <div>
              <transition name="fade">
                <div v-if="expandedB" class="pt-4 space-y-4 border-t border-neutral-200">
                  <h4 class="text-lg font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                  <ul class="space-y-2 text-neutral-700">
                    <li>Special Occasion Setup (from R600)</li>
                    <li>Mid-Stay Cleaning (from R300)</li>
                    <li>Laundry Service</li>
                  </ul>
                </div>
              </transition>
              <button @click="expandedB = !expandedB" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                {{ expandedB ? 'Hide Add-Ons' : 'Read More Add-Ons' }}
              </button>
            </div>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        <!-- Cleaning Services -->
        <div class="relative p-4">
          <div class="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h4 class="text-xl font-semibold text-[#1D4E4F]">Cleaning Services</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Standard Cleaning: R460/session</li>
              <li>Hot Tub Cleaning: R150</li>
              <li>Add-Ons: Defrost, Restock, Setup</li>
            </ul>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Book Cleaning
            </button>
          </div>
        </div>

        <!-- Maintenance Services (staggered) -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-lg border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-2xl hover:scale-105 transform transition duration-500">
            <h4 class="text-xl font-semibold text-[#1D4E4F]">Maintenance Services</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Basic Maintenance: R350/call</li>
              <li>Emergency Fixes: R600</li>
              <li>Monthly Package: R1000/mo</li>
            </ul>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
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
@keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-5%);}}
.animate-bounce-slow {animation:bounce-slow 3s ease-in-out infinite;}
.fade-enter-active, .fade-leave-active {transition: opacity 0.5s ease;}
.fade-enter-from, .fade-leave-to {opacity:0;}
</style>
