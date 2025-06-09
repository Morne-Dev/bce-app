<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto grid md:grid-cols-[1.3fr_0.7fr] gap-24 items-center relative">
      <!-- Background floating shapes -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-[#6BD4D4]/20 rounded-full filter blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-72 h-72 bg-[#1D4E4F]/25 rounded-full filter blur-2xl"></div>

      <!-- Left Column: Content -->
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

          <!-- What’s Included List -->
          <div>
            <h3 class="text-2xl font-semibold text-[#1D4E4F] mb-5 tracking-tight">What’s Included</h3>
            <ul class="space-y-4 list-none" role="list">
              <li class="flex items-center gap-4 text-[#144041] font-semibold text-lg">
                <svg class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Booking &amp; Inquiries Management
              </li>
              <li class="flex items-center gap-4 text-[#144041] font-semibold text-lg">
                <svg class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-75" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Guest Welcome &amp; Key Handover
              </li>
              <li class="flex items-center gap-4 text-[#144041] font-semibold text-lg">
                <svg class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-150" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Property Inspection &amp; Maintenance
              </li>
              <li class="flex items-center gap-4 text-[#144041] font-semibold text-lg">
                <svg class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-200" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Basic Amenities &amp; Stocking
              </li>
              <li class="flex items-center gap-4 text-[#144041] font-semibold text-lg">
                <svg class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow delay-300" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
                Basic Repairs &amp; Support
              </li>
            </ul>
          </div>

          <!-- Pricing -->
          <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33]">
            <h3 class="text-2xl font-semibold text-[#1D4E4F] mb-3 tracking-wide">Pricing</h3>
            <p class="text-[#144041] leading-relaxed font-semibold text-lg">
              <strong>Commission:</strong> 20% of booking fee
            </p>
            <small class="text-sm text-[#144041aa] tracking-wide font-normal">Keeps us focused on best bookings &amp; high standards.</small>
          </div>

          <!-- Optional Add-ons -->
          <div>
            <transition name="fade">
              <div v-if="expanded" class="pt-6 space-y-6 border-t border-neutral-200 max-w-md mx-auto">
                <h3 class="text-xl font-semibold text-[#1D4E4F] mb-4 tracking-wide">Optional Add-Ons</h3>
                <ul class="text-neutral-700 space-y-4 font-medium">
                  <li><strong>🎁 Special Occasion Setup:</strong> Flowers, wine, treats <em>(from R600)</em></li>
                  <li><strong>🧹 Mid-Stay Cleaning:</strong> Extra cleaning for longer bookings <em>(from R300)</em></li>
                  <li><strong>👕 Laundry Services:</strong> Guest laundry on request</li>
                </ul>
              </div>
            </transition>
            <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                @click="expanded = !expanded"
                class="relative inline-block text-[#1D4E4F] underline font-medium hover:text-[#144041] transition"
                :aria-label="expanded ? 'Hide add-ons' : 'Read more about add-ons'"
              >
                {{ expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
              </button>
              <button class="inline-block bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Single Hero Image -->
      <div class="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(29,78,79,0.25)] rotate-[-1.5deg] max-w-full mx-auto md:mx-0" aria-hidden="true">
        <div class="absolute inset-0 bg-gradient-to-tr from-[#6BD4D4] to-[#1D4E4F] opacity-20 rounded-3xl filter blur-xl -z-10"></div>
        <img
          src="@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg"
          alt="Vacation rental property with happy guests"
          class="rounded-3xl object-cover w-full h-[600px] md:h-[700px] lg:h-[800px] shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
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
