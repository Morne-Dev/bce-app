<template>
  <section class="bg-white py-20 px-6 sm:px-10 max-w-5xl mx-auto text-neutral-800">
    <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-center font-serif">
      Complete Care Package
    </h2>

    <div class="space-y-4 leading-relaxed">

      <p>
        This package is ideal for property owners who want us to handle everything from bookings and inquiries
        to basic maintenance while still focusing on essential services such as guest welcome, cleaning, and stocking amenities.
      </p>

      <h3 class="font-semibold text-lg mt-6">Complete Care Package Includes:</h3>
      <ul class="list-disc list-inside space-y-1">
        <li>Booking & Inquiries Management</li>
        <li>Guest Welcome & Key Handover</li>
        <li>Property Inspection & Regular Maintenance Checks:</li>
        <li>Basic Amenities</li>
        <li>Basic Maintenance</li>
      </ul>

      <h3 class="font-semibold text-lg mt-6">Pricing for Complete Care Package:</h3>
      <p>
        <strong>Commission:</strong> 20% of the booking fee<br />
        (you will still pay a commission on each booking to incentivise Blouberg Coastal Escapes to drive bookings and provide high-quality service).
      </p>

      <!-- Read More Toggle -->
      <transition name="fade">
        <div v-if="expanded" class="space-y-4 mt-4">
          <h3 class="font-semibold text-lg">Optional Add-Ons:</h3>
          <ul class="list-disc list-inside space-y-2">
            <li>
              <strong>1. Special Occasion Packages:</strong><br />
              For guests celebrating special events (e.g., anniversaries, birthdays), we can provide flowers, wine, and other special touches.<br />
              <em>Price: From R600</em>
            </li>
            <li>
              <strong>2. Mid-Stay Cleaning:</strong><br />
              A mid-stay cleaning service for longer guest stays.<br />
              <em>Price: From R300 per cleaning</em>
            </li>
            <li>
              <strong>3. Laundry Service:</strong><br />
              Guests may request laundry services for personal clothing.
            </li>
          </ul>

          <p>
            This Complete Care Package is ideal for property owners who want to delegate the operational tasks involved
            in managing the property, while still retaining control over the bookings and setting prices.
            It also gives guests a seamless and welcoming experience, making it more likely that they’ll leave
            positive reviews and come back for future stays!
          </p>
        </div>
      </transition>

      <!-- Toggle Button -->
      <div class="mt-6 text-center">
        <button
          @click="expanded = !expanded"
          class="text-[#2C6E6F] hover:text-[#245C5D] font-medium underline transition"
        >
          {{ expanded ? 'Show Less' : 'Read More' }}
        </button>
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
