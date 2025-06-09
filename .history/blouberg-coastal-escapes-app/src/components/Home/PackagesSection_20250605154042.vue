<template>
  <section class="bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] py-24 px-6 sm:px-10">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <!-- Text Content -->
      <div class="space-y-8" v-intersect="onIntersect">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold font-serif text-[#2C6E6F]">Complete Care Package</h2>
          <p class="mt-4 text-lg text-neutral-600">
            Perfect for property owners who want full-service holiday rental management—booking, cleaning, maintenance, and more.
          </p>
        </div>

        <!-- Package Summary -->
        <div class="bg-white/80 backdrop-blur-xl shadow-xl rounded-xl border border-neutral-200 p-6 space-y-6 animate-fade-up">
          <p>
            This package is ideal for property owners who want us to handle everything from bookings and inquiries
            to basic maintenance while still focusing on essential services such as guest welcome, cleaning, and stocking amenities.
          </p>

          <!-- Included Features -->
          <div>
            <h3 class="text-xl font-semibold text-[#2C6E6F] mb-2">What’s Included:</h3>
            <ul class="space-y-2 pl-4 list-none">
              <li class="flex items-start gap-2"><span class="text-[#4E9B9B]">✔️</span> Booking & Inquiries Management</li>
              <li class="flex items-start gap-2"><span class="text-[#4E9B9B]">✔️</span> Guest Welcome & Key Handover</li>
              <li class="flex items-start gap-2"><span class="text-[#4E9B9B]">✔️</span> Property Inspection & Maintenance Checks</li>
              <li class="flex items-start gap-2"><span class="text-[#4E9B9B]">✔️</span> Basic Amenities</li>
              <li class="flex items-start gap-2"><span class="text-[#4E9B9B]">✔️</span> Basic Maintenance</li>
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

          <!-- Toggleable Add-ons -->
          <transition name="fade">
            <div v-if="expanded" class="space-y-6 mt-4">
              <h3 class="text-xl font-semibold text-[#2C6E6F] mb-2">Optional Add-Ons:</h3>
              <ul class="space-y-3 list-disc list-inside text-neutral-700">
                <li><strong>Special Occasion Packages:</strong><br /> Flowers, wine, decor, etc. <em>From R600</em></li>
                <li><strong>Mid-Stay Cleaning:</strong><br /> Ideal for longer stays. <em>From R300</em></li>
                <li><strong>Laundry Service:</strong><br /> Guest-requested personal laundry service.</li>
              </ul>
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

      <!-- Right Side Image -->
      <div class="relative">
        <img
          src="/assets/images/care-package-luxury.jpg"
          alt="Luxury interior Blouberg property"
          class="w-full rounded-xl shadow-2xl object-cover animate-fade-in"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)

// Optional scroll-based animation logic (simple version)
const onIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-up-visible')
    }
  })
}
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

.animate-fade-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}
.animate-fade-up-visible {
  opacity: 1;
  transform: translateY(0);
}

.animate-fade-in {
  animation: fadeIn 1.2s ease forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.02);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
