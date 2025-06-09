<template>
  <section class="bg-white py-24 px-6 sm:px-10 max-w-5xl mx-auto text-neutral-800">
    <div class="text-center mb-12">
      <h2 class="text-3xl sm:text-4xl font-bold font-serif text-[#2C6E6F]">Complete Care Package</h2>
      <p class="mt-4 text-lg text-neutral-600">
        Perfect for property owners who want full-service holiday rental management—booking, cleaning, maintenance, and more.
      </p>
    </div>

    <!-- Card Container -->
    <div class="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden">
      <!-- Package Summary -->
      <div class="p-6 space-y-6">
        <p>
          This package is ideal for property owners who want us to handle everything from bookings and inquiries
          to basic maintenance while still focusing on essential services such as guest welcome, cleaning, and stocking amenities.
        </p>

        <!-- Included Features -->
        <div>
          <h3 class="text-xl font-semibold text-[#2C6E6F] mb-2">What’s Included:</h3>
          <ul class="space-y-2 pl-4 list-none">
            <li class="flex items-start gap-2">
              <span class="text-[#4E9B9B]">✔️</span> Booking & Inquiries Management
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4E9B9B]">✔️</span> Guest Welcome & Key Handover
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4E9B9B]">✔️</span> Property Inspection & Regular Maintenance Checks
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4E9B9B]">✔️</span> Basic Amenities
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#4E9B9B]">✔️</span> Basic Maintenance
            </li>
          </ul>
        </div>

        <!-- Pricing -->
        <div>
          <h3 class="text-xl font-semibold text-[#2C6E6F] mb-2">Pricing:</h3>
          <p>
            <strong>Commission:</strong> 20% of the booking fee<br />
            (You will still pay a commission on each booking to incentivise Blouberg Coastal Escapes to drive bookings and provide high-quality service.)
          </p>
        </div>

        <!-- Why Use This Package -->
        <div class="bg-neutral-50 border border-dashed border-[#4E9B9B] p-4 rounded-lg">
          <h4 class="font-semibold mb-2 text-[#2C6E6F]">Why Choose This Package?</h4>
          <p>
            Ideal for owners who want to delegate all operational tasks while still controlling pricing and availability.
            Ensures guests get a professional, warm, and consistent experience—leading to better reviews and repeat stays.
          </p>
        </div>

        <!-- Tease More Add-ons -->
        <div v-if="!expanded" class="text-sm italic text-neutral-500 mt-2">
          Includes optional add-ons like mid-stay cleaning and special event extras...
        </div>

        <!-- Toggleable Content -->
        <transition name="fade">
          <div v-if="expanded" class="space-y-6 mt-4">

            <div>
              <h3 class="text-xl font-semibold text-[#2C6E6F] mb-2">Optional Add-Ons:</h3>
              <ul class="space-y-3 list-disc list-inside text-neutral-700">
                <li>
                  <strong>Special Occasion Packages:</strong><br />
                  For guests celebrating special events (e.g., anniversaries, birthdays), we can provide flowers, wine, and other special touches.<br />
                  <em>Price: From R600</em>
                </li>
                <li>
                  <strong>Mid-Stay Cleaning:</strong><br />
                  A mid-stay cleaning service for longer guest stays.<br />
                  <em>Price: From R300 per cleaning</em>
                </li>
                <li>
                  <strong>Laundry Service:</strong><br />
                  Guests may request laundry services for personal clothing.
                </li>
              </ul>
            </div>

          </div>
        </transition>

        <!-- Toggle Button -->
        <div class="text-center mt-4">
          <button
            @click="expanded = !expanded"
            class="text-[#2C6E6F] hover:text-[#245C5D] font-medium underline transition"
          >
            {{ expanded ? 'Show Less' : 'Read More About Add-Ons' }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const expanded = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}
</style>
