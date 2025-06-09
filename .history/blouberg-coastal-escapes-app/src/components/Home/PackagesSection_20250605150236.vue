<template>
  <section class="py-24 bg-white text-neutral-800 px-6 sm:px-8 max-w-4xl mx-auto">
    <h2 class="text-3xl sm:text-4xl font-serif font-bold mb-10 text-center text-[#2C6E6F]">
      Complete Care Package
    </h2>

    <p class="text-lg mb-6 text-center">
      Ideal for owners who want hassle-free, professional management while keeping control of pricing and availability.
    </p>

    <!-- Visible Summary -->
    <ul class="list-disc pl-5 space-y-2 mb-6">
      <li>Booking & Inquiries Management</li>
      <li>Guest Welcome & Key Handover</li>
      <li>Property Inspection & Maintenance Checks</li>
      <li>Basic Amenities & Cleaning</li>
      <li>Basic Maintenance</li>
    </ul>

    <!-- Commission -->
    <div class="mb-4">
      <p class="font-semibold">Commission:</p>
      <p class="ml-2">20% of booking fee</p>
      <p class="text-sm text-neutral-600 ml-2">
        (This incentivizes us to maximize your occupancy and guest experience.)
      </p>
    </div>

    <!-- Toggle Button -->
    <button
      class="text-[#2C6E6F] underline text-sm font-medium"
      @click="showDetails = !showDetails"
    >
      {{ showDetails ? 'Read Less ▲' : 'Read More ▼' }}
    </button>

    <!-- Collapsible Content -->
    <transition name="fade">
      <div v-if="showDetails" class="mt-6 space-y-4">
        <!-- Optional Add-ons -->
        <div>
          <h3 class="font-semibold text-lg">Optional Add-Ons:</h3>
          <ul class="list-disc pl-5 mt-2 space-y-2">
            <li>
              <span class="font-medium">Special Occasion Packages:</span>
              Flowers, wine, etc. for birthdays/anniversaries. <br />
              <span class="text-sm text-neutral-600">From R600</span>
            </li>
            <li>
              <span class="font-medium">Mid-Stay Cleaning:</span>
              Ideal for longer stays. <br />
              <span class="text-sm text-neutral-600">From R300 per cleaning</span>
            </li>
            <li>
              <span class="font-medium">Laundry Service:</span>
              Personal clothing laundry on request.
            </li>
          </ul>
        </div>

        <!-- Owner Benefits -->
        <div>
          <h3 class="font-semibold text-lg">Why Choose This Package?</h3>
          <p>
            You delegate all day-to-day operations to us while retaining control over pricing and bookings.
            Your guests enjoy a professional, welcoming stay—boosting the chances of positive reviews and repeat visits.
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showDetails = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
  transform: scaleY(0.95);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  max-height: 1000px;
  transform: scaleY(1);
}
</style>
