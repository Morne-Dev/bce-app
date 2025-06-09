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
        <!-- Complete Care Package -->
        <div class="relative p-4">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-12 space-y-10 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h3 class="text-3xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>
            <p class="text-neutral-700 font-semibold">Ideal for property owners who want full-service holiday rental management—booking, cleaning, maintenance, and more.</p>
            <!-- What’s Included -->
            <div>
              <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-5">What’s Included</h4>
              <ul class="space-y-4 list-none text-[#144041]">
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Booking &amp; Inquiries Management</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Guest Welcome &amp; Key Handover</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Property Inspection &amp; Maintenance</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Basic Amenities &amp; Stocking</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Basic Repairs &amp; Support</li>
              </ul>
            </div>
            <!-- Pricing -->
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33]">
              <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-3">Pricing</h4>
              <p class="text-neutral-700 font-semibold text-lg"><strong>Commission:</strong> 20% of the booking fee</p>
              <small class="text-sm text-neutral-500">This commission keeps us focused on getting you the best bookings and maintaining the highest standards.</small>
            </div>
            <!-- Add-Ons & CTA -->
            <div>
              <transition name="fade">
                <div v-if="expandedA" class="pt-6 space-y-6 border-t border-neutral-200">
                  <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                  <ul class="space-y-3 text-neutral-700">
                    <li>🎁 Special Occasion Setup (from R600)</li>
                    <li>🧹 Mid-Stay Cleaning (from R300)</li>
                    <li>👕 Laundry Service</li>
                  </ul>
                </div>
              </transition>
              <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button @click="expandedA = !expandedA" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                  {{ expandedA ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
                </button>
                <button class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Premium Care Package -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-8 -right-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-12 space-y-10 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h3 class="text-3xl font-semibold text-[#1D4E4F]">Premium Care Package</h3>
            <p class="text-neutral-700 font-semibold">Designed for those wanting a fully managed, seamless experience with VIP services and luxury amenities.</p>
            <!-- What’s Included -->
            <div>
              <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-5">What’s Included</h4>
              <ul class="space-y-4 list-none text-[#144041]">
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Full Booking &amp; Inquiry Management</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> VIP Check-in &amp; Guest Services</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Professional Cleaning &amp; Laundry</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> High-End Amenities &amp; Welcome Pack</li>
                <li class="flex items-center gap-4 text-lg font-semibold"><span class="text-[#6BD4D4]">✅</span> Basic &amp; Minor Maintenance</li>
              </ul>
            </div>
            <!-- Pricing -->
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F33]">
              <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-3">Pricing</h4>
              <p class="text-neutral-700 font-semibold text-lg"><strong>Flat Fee:</strong> From R1200/mo + 25% commission</p>
            </div>
            <!-- Add-Ons & CTA -->
            <div>
              <transition name="fade">
                <div v-if="expandedB" class="pt-6 space-y-6 border-t border-neutral-200">
                  <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
                  <ul class="space-y-3 text-neutral-700">
                    <li>🎁 Special Occasion Setup (from R600)</li>
                    <li>🧹 Mid-Stay Cleaning (from R300)</li>
                    <li>👕 Laundry Service</li>
                  </ul>
                </div>
              </transition>
              <div class="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button @click="expandedB = !expandedB" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">{{ expandedB ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}</button>
                <button class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Cleaning Services -->
        <div class="relative p-4">
          <div class="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-12 space-y-10 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">Cleaning Services</h4>
            <p class="text-neutral-700 font-semibold">Professional cleaning options for pristine properties.</p>
            <ul class="space-y-4 list-none text-[#144041]">
              <li>Standard Cleaning (from R460/session)</li>
              <li>Hot Tub Cleaning (from R150)</li>
              <li>Add-Ons: Defrosting, Restocking, Personalized Setup</li>
            </ul>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300">
              Book Cleaning
            </button>
          </div>
        </div>

        <!-- Maintenance Services (staggered) -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-12 space-y-10 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h4 class="text-2xl font-semibold text-[#1D4E4F]">Maintenance Services</h4>
            <p class="text-neutral-700 font-semibold">Comprehensive maintenance to keep properties in top condition.</p>
            <ul class="space-y-4 list-none text-[#144041]">
              <li>Basic Maintenance (from R350/call)</li>
              <li>Emergency Fixes (from R600)</li>
              <li>Monthly Package (from R1000/mo)</li>
            </ul>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition duration-300">
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
