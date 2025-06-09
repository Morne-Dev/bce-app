<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f3fafa] to-[#eaf3f3] overflow-hidden">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      
      <!-- Left Column: Content -->
      <div class="space-y-8 z-10 relative">
        <!-- Title -->
        <div>
          <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F] leading-tight">
            Complete Care Package
          </h2>
          <p class="mt-4 text-lg text-neutral-700 max-w-md">
            Perfect for property owners who want full-service holiday rental management—booking, cleaning, maintenance, and more.
          </p>
        </div>

        <!-- Feature Card -->
        <div class="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-8 space-y-6 relative">
          
          <!-- Description -->
          <p class="text-neutral-700">
            Ideal for owners who want us to handle everything—from bookings and guest management to basic maintenance—while providing a consistently exceptional guest experience.
          </p>

          <!-- Included Features -->
          <div>
            <h3 class="text-xl font-semibold text-[#1D4E4F] mb-3">What’s Included</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-3">
                <span class="text-[#1D4E4F]">✅</span> Booking & Inquiries Management
              </li>
              <li class="flex items-center gap-3">
                <span class="text-[#1D4E4F]">✅</span> Guest Welcome & Key Handover
              </li>
              <li class="flex items-center gap-3">
                <span class="text-[#1D4E4F]">✅</span> Property Inspection & Maintenance
              </li>
              <li class="flex items-center gap-3">
                <span class="text-[#1D4E4F]">✅</span> Basic Amenities & Stocking
              </li>
              <li class="flex items-center gap-3">
                <span class="text-[#1D4E4F]">✅</span> Basic Repairs & Support
              </li>
            </ul>
          </div>

          <!-- Pricing -->
          <div>
            <h3 class="text-xl font-semibold text-[#1D4E4F] mb-2">Pricing</h3>
            <p class="text-neutral-700 leading-relaxed">
              <strong>Commission:</strong> 20% of the booking fee<br />
              <small class="text-sm text-neutral-500">
                This commission keeps us focused on getting you the best bookings and maintaining the highest standards.
              </small>
            </p>
          </div>

          <!-- Why Choose This -->
          <div class="bg-[#f5fdfd] border border-dashed border-[#B2DCDC] p-4 rounded-lg">
            <h4 class="font-semibold mb-1 text-[#1D4E4F]">Why Choose This?</h4>
            <p class="text-sm text-neutral-600">
              Everything handled for you. All guests treated like VIPs. Stress-free ownership with better reviews and more repeat bookings.
            </p>
          </div>

          <!-- Optional Add-ons -->
          <div>
            <transition name="fade">
              <div v-if="expanded" class="pt-4 space-y-4 border-t border-neutral-200">
                <h3 class="text-lg font-semibold text-[#1D4E4F]">Optional Add-Ons</h3>
                <ul class="text-neutral-700 space-y-3">
                  <li><strong>🎁 Special Occasion Setup:</strong> Flowers, wine, treats <em>(from R600)</em></li>
                  <li><strong>🧹 Mid-Stay Cleaning:</strong> Extra cleaning for longer bookings <em>(from R300)</em></li>
                  <li><strong>👕 Laundry Services:</strong> Guest laundry on request</li>
                </ul>
              </div>
            </transition>

            <div class="pt-4 text-center">
              <button @click="expanded = !expanded" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
                {{ expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Image -->
      <div class="relative rounded-xl overflow-hidden shadow-2xl rotate-[-1.5deg]">
        <img
          src="@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg"
          alt="Modern rental interior"
          class="rounded-xl w-full h-auto object-cover"
        />
        <!-- Optional subtle overlay or branding can be added here -->
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
