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

      <!-- 2x2 Grid of Cards -->
      <div class="grid gap-12 md:grid-cols-2">
        <!-- Complete Care Package -->
        <div class="relative p-4">
          <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Complete Care Package</h3>
            <p class="text-neutral-700 font-medium">Handle everything—from bookings to basic maintenance—seamlessly.</p>
            <h4 class="font-semibold text-[#1D4E4F]">What’s Included</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Booking & Inquiries Management
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow delay-75" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Guest Welcome & Key Handover
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow delay-150" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                Property Inspection & Maintenance
              </li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F33]">
              <p class="text-[#144041] font-semibold">Commission: 20%</p>
            </div>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Read More & Get Started
            </button>
          </div>
        </div>

        <!-- Premium Care Package -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-8 -right-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h3 class="text-2xl font-semibold text-[#1D4E4F]">Premium Care Package</h3>
            <p class="text-neutral-700 font-medium">Fully managed, VIP check-in, luxury amenities, and maintenance.</p>
            <h4 class="font-semibold text-[#1D4E4F]">What’s Included</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Full Booking & Inquiry Management</li>
              <li>VIP Check-in & Guest Services</li>
              <li>Professional Cleaning & Laundry</li>
            </ul>
            <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F33]">
              <p class="text-[#144041] font-semibold">Flat Fee: R1200/mo + 25%</p>
            </div>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Read More & Get Started
            </button>
          </div>
        </div>

        <!-- Cleaning Services -->
        <div class="relative p-4">
          <div class="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h4 class="text-xl font-semibold text-[#1D4E4F]">Cleaning Services</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Standard Cleaning: From R460/session</li>
              <li>Hot Tub Cleaning: From R150</li>
              <li>Add-Ons: Defrost, Restock, Setup</li>
            </ul>
            <button class="w-full bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold py-2 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Book Cleaning
            </button>
          </div>
        </div>

        <!-- Maintenance Services -->
        <div class="relative p-4 md:mt-8">
          <div class="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-[#6BD4D4]/30"></div>
          <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_rgba(29,78,79,0.15)] border border-[#1D4E4F33] p-8 space-y-6 hover:shadow-[0_30px_50px_rgba(29,78,79,0.25)] transition-shadow duration-500">
            <h4 class="text-xl font-semibold text-[#1D4E4F]">Maintenance Services</h4>
            <ul class="space-y-2 list-disc list-inside text-[#144041]">
              <li>Basic Maintenance: From R350/call</li>
              <li>Emergency Fixes: From R600</li>
              <li>Monthly Package: From R1000/mo</li>
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
// No interactivity needed for static grid
</script>

<style scoped>
@keyframes bounce-slow {0%,100%{transform:translateY(0);}50%{transform:translateY(-5%);}}
.animate-bounce-slow {animation:bounce-slow 3s ease-in-out infinite;}
</style>
