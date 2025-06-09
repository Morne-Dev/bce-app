<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden">
    <!-- Background Shapes -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto">
      <!-- Title -->
      <div class="mb-16 text-center">
        <h2 class="text-4xl sm:text-5xl font-bold font-serif text-[#1D4E4F]">
          Our Service Offerings
        </h2>
      </div>

      <!-- 2x2 Grid Layout -->
      <div class="grid gap-12 md:grid-cols-2">

        <!-- Complete Care Package Card -->
        <ServiceCard
          title="Complete Care Package"
          :features="[
            'Booking & Inquiries Management',
            'Guest Welcome & Key Handover',
            'Property Inspection & Regular Maintenance Checks',
            'Basic Amenities',
            'Basic Maintenance'
          ]"
          pricingTitle="Pricing"
          pricingDetails="Commission: 20% of the booking fee"
          pricingNote="We only earn when you earn—aligned incentives, better results."
          :addons="[
            { text: 'Special Occasion Setup: Wine, treats & décor (from R600)', emoji: '🎁' },
            { text: 'Mid-Stay Cleaning: For longer bookings (from R300)', emoji: '🧹' },
            { text: 'Laundry Services: Guest laundry on request', emoji: '👕' }
          ]"
          buttonText="Enquire Now"
          description="This Complete Care Package is ideal for property owners who want to delegate the operational tasks involved in managing the property, while still retaining control over the bookings and setting prices. It also gives guests a seamless and welcoming experience, making it more likely that they’ll leave positive reviews and come back for future stays!"
        />

        <!-- Premium Care Package Card -->
        <ServiceCard
          title="Premium Care Package"
          :features="[
            'Full Booking & Inquiry Management',
            'Guest Welcome & VIP Check-in',
            'Professional Cleaning After Check-out',
            'Laundry Service',
            'High-End Amenities',
            'Basic & Minor Maintenance',
            'Property Inspection & Regular Maintenance Checks',
            'Guest Experience Welcome Pack'
          ]"
          pricingTitle="Pricing"
          pricingDetails="Flat Fee: From R1200 per month + Commission: 25% of the booking fee"
          pricingNote="Covers full booking management, guest services, cleaning, laundry, stocking of premium amenities, and minor maintenance."
          :addons="[
            { text: 'Special Occasion Packages: Flowers, wine & special touches (from R600)', emoji: '🎁' },
            { text: 'Laundry Service: Guests may request laundry services', emoji: '👕' },
            { text: 'Mid-Stay Cleaning: For longer guest stays (from R300)', emoji: '🧹' }
          ]"
          buttonText="Sign Up Now"
          description="The Premium Care Package offers a completely hands-off experience for property owners, with all aspects of property management handled, plus enhanced services for a higher standard of guest satisfaction. This package will make the property more attractive to high-end guests, ensure excellent guest reviews, and increase overall profitability through premium offerings."
        />

        <!-- Cleaning Services Card -->
        <ServiceCard
          title="Cleaning Services"
          :features="[
            'Standard Cleaning of common areas (living, dining, kitchen, patio)',
            'We supply all cleaning materials and equipment',
            'Optional Add-Ons: Fridge defrosting, essential restocking, guest setup, hot tub cleaning'
          ]"
          pricingTitle="Pricing"
          pricingDetails="Standard Cleaning: From R460 per session"
          pricingNote="Ideal for vacation rentals with frequent guest turnover. Hassle-free and professional."
          :addons="[
            { text: 'Hot Tub Cleaning Service: Drain, refill, surface clean & sanitize (from R150)', emoji: '🛁' }
          ]"
          buttonText="Book Cleaning"
          description="We provide thorough and professional cleaning services, ideal for preparing your property for guests or maintaining cleanliness between stays. Choose one-time or regular schedules to keep your property pristine."
        />

        <!-- Maintenance Services Card -->
        <ServiceCard
          title="Maintenance Services"
          :features="[
            'Basic Maintenance: Minor plumbing, electrical, appliance repairs',
            'Emergency Maintenance: Quick-response for urgent issues',
            'Maintenance Package: Regular check-ups and priority service'
          ]"
          pricingTitle="Pricing"
          pricingDetails="Basic Maintenance: From R350 per call-out | Emergency: From R600 | Package: From R1000 per month"
          pricingNote="Keep your property running smoothly and guests safe with professional maintenance."
          buttonText="Contact Maintenance"
          description="Perfect for property owners who want to keep their homes in top condition without worry. Covers small repairs, urgent fixes, and helps prevent wear and tear."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)

const features = [
  'Booking & Inquiries Management',
  'Guest Welcome & Key Handover',
  'Property Inspection & Maintenance',
  'Basic Amenities & Stocking',
  'Basic Repairs & Support'
]

// Component for reuse
const ServiceCard = {
  props: [
    'title', 'features', 'pricingTitle', 'pricingDetails', 'pricingNote', 'addons', 'buttonText', 'description'
  ],
  data() {
    return { expanded: false }
  },
  template: `
    <div class="relative p-4">
      <div class="absolute -top-8 -left-8 w-40 h-40 rounded-full border-2 border-[#6BD4D4]/30"></div>
      <div class="bg-white/80 backdrop-blur-md border border-[#1D4E4F33] rounded-3xl shadow-xl p-8 space-y-8 hover:shadow-2xl hover:scale-[1.02] transition duration-500">
        <h3 class="text-2xl font-semibold text-[#1D4E4F]">{{ title }}</h3>
        <p class="text-neutral-700 font-medium">{{ description }}</p>

        <div>
          <h4 class="font-semibold text-[#1D4E4F] text-lg">What’s Included</h4>
          <ul class="space-y-2">
            <li v-for="(item, i) in features" :key="i" class="flex items-start gap-2 text-[#144041] text-base font-semibold">
              <svg class="w-5 h-5 text-[#1D4E4F] animate-bounce-slow" :style="{ animationDelay: \`\${i * 100}ms\` }" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-4 border border-[#1D4E4F22]">
          <h4 class="text-lg font-semibold text-[#1D4E4F] mb-2">{{ pricingTitle }}</h4>
          <p class="text-[#144041] font-semibold text-sm">{{ pricingDetails }}</p>
          <p class="text-sm text-[#144041aa]">{{ pricingNote }}</p>
        </div>

        <transition name="fade">
          <div v-if="expanded" class="pt-4 space-y-4 border-t border-neutral-200">
            <h4 class="text-lg font-semibold text-[#1D4E4F]" v-if="addons && addons.length">Optional Add-Ons</h4>
            <ul class="text-sm text-neutral-700 font-medium space-y-2" v-if="addons && addons.length">
              <li v-for="(addOn, idx) in addons" :key="idx">
                {{ addOn.emoji }} <strong>{{ addOn.text }}</strong>
              </li>
            </ul>
          </div>
        </transition>

        <div class="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button @click="expanded = !expanded" class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition">
            {{ expanded ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
          </button>
          <button class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition active:scale-95">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  `
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.animate-bounce-slow {
  animation: bounce 1.5s infinite;
}
</style>
