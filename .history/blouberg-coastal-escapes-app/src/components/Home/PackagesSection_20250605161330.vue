<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_0.7fr] gap-24 items-start relative">
      <!-- Background floating shapes -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-[#6BD4D4]/20 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-[#1D4E4F]/25 rounded-full filter blur-2xl"></div>

      <!-- Left Column: Content + Icons grid -->
      <div class="space-y-12 z-20 relative">
        <!-- Title -->
        <div>
          <h2 class="text-5xl sm:text-6xl font-bold font-serif text-[#1D4E4F] leading-tight relative inline-block">
            Complete Care Package
            <span aria-hidden="true" class="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#6BD4D4] via-[#1D4E4F]/30 to-[#6BD4D4] rounded-full blur-[6px] opacity-50 -z-10"></span>
          </h2>
          <p class="mt-6 text-lg text-neutral-700 max-w-lg font-medium tracking-wide">
            Perfect for property owners who want full-service holiday rental management—booking, cleaning, maintenance, and more.
          </p>
        </div>

        <!-- Feature Card -->
        <div class="md:-ml-8 bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-12 space-y-10 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500" role="region" aria-label="Complete Care Package Details">
          <p class="text-neutral-700 font-semibold tracking-wide leading-relaxed">
            Ideal for owners who want us to handle everything—from bookings and guest management to basic maintenance—while providing a consistently exceptional guest experience.
          </p>

          <!-- Icons Grid reflecting actual features -->
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div class="flex flex-col items-center text-center">
              <svg class="w-10 h-10 text-[#1D4E4F] mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              <span class="font-semibold text-[#144041]">Booking & Inquiries Management</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <svg class="w-10 h-10 text-[#1D4E4F] mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h8M8 12h8M8 17h8"/></svg>
              <span class="font-semibold text-[#144041]">Guest Welcome & Key Handover</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <svg class="w-10 h-10 text-[#1D4E4F] mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 17v-6h6v6M9 9V7a3 3 0 016 0v2"/></svg>
              <span class="font-semibold text-[#144041]">Property Inspection & Maintenance</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <svg class="w-10 h-10 text-[#1D4E4F] mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.4 15a7.97 7.97 0 00.6-3 7.97 7.97 0 00-.6-3M4.6 9a7.97 7.97 0 00-.6 3 7.97 7.97 0 00.6 3"/></svg>
              <span class="font-semibold text-[#144041]">Basic Amenities & Stocking</span>
            </div>
            <div class="flex flex-col items-center text-center sm:col-span-2">
              <svg class="w-10 h-10 text-[#1D4E4F] mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
              <span class="font-semibold text-[#144041]">Basic Repairs & Support</span>
            </div>
          </div>

          <!-- Pricing & CTA -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33] flex-1">
              <h3 class="text-2xl font-semibold text-[#1D4E4F] mb-2">Pricing</h3>
              <p class="text-[#144041] leading-relaxed font-semibold">
                <strong>Commission:</strong> 20% of booking fee
              </p>
              <small class="text-sm text-[#144041aa]">Keeps us focused on best bookings & high standards.</small>
            </div>
            <button class="inline-block bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <!-- Right Column: Image Mosaic -->
      <div class="grid grid-cols-2 grid-rows-2 gap-6 md:-mr-8 z-10">
        <img src="@/assets/images/Blouberg1.jpg" alt="Interior view 1" class="rounded-3xl object-cover w-full h-[280px] shadow-lg" loading="lazy" />
        <img src="@/assets/images/Blouberg2.jpg" alt="Interior view 2" class="rounded-3xl object-cover w-full h-[280px] shadow-lg" loading="lazy" />
        <img src="@/assets/images/Blouberg3.jpg" alt="Interior view 3" class="rounded-3xl object-cover w-full h-[280px] shadow-lg" loading="lazy" />
        <img src="@/assets/images/Blouberg4.jpg" alt="Exterior view" class="rounded-3xl object-cover w-full h-[280px] shadow-lg" loading="lazy" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const expanded = ref(false);
</script>

<style scoped>
@keyframes bounce-slow { 0%,100%{transform:translateY(0);}50%{transform:translateY(-5%);} }
.animate-bounce-slow { animation:bounce-slow 3s ease-in-out infinite; }
@keyframes pulse-slow {0%,100%{opacity:1;box-shadow:0 0 15px #b2dcdc88;}50%{opacity:0.8;box-shadow:0 0 25px #b2dcdcbb;}}
.animate-pulse-slow { animation:pulse-slow 5s ease-in-out infinite; }
.fade-enter-active,.fade-leave-active{transition:opacity .5s ease;}
.fade-enter-from,.fade-leave-to{opacity:0;}
</style>
