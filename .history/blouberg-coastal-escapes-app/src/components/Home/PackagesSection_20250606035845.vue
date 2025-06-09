<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="bg-white/80 backdrop-blur-md border border-[#1D4E4F33] rounded-3xl shadow-xl p-10 space-y-8 transition-all hover:shadow-2xl hover:scale-105 duration-500 relative"
      >
        <h3 class="text-3xl font-serif font-bold text-[#1D4E4F] relative leading-tight">
          {{ card.title }}
          <span
            class="absolute left-0 bottom-1 w-full h-2 bg-gradient-to-r from-[#6BD4D4] to-transparent rounded-full blur-sm opacity-50 -z-10"
          ></span>
        </h3>

        <p class="text-neutral-700 text-base font-medium leading-relaxed">
          {{ card.description }}
        </p>

        <div>
          <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-4">What’s Included</h4>
          <ul class="space-y-4">
            <li
              v-for="(feature, i) in card.features"
              :key="i"
              class="flex items-center gap-4 text-[#144041] text-lg font-semibold"
            >
              <svg
                class="w-6 h-6 text-[#1D4E4F] animate-bounce-slow"
                :style="{ animationDelay: `${i * 100}ms` }"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div
          class="bg-gradient-to-r from-[#6BD4D4]/20 to-[#1D4E4F]/10 rounded-xl p-6 border border-[#1D4E4F22]"
        >
          <h4 class="text-2xl font-semibold text-[#1D4E4F] mb-3">Pricing</h4>
          <p class="text-[#144041] text-lg font-semibold">
            <strong>Commission:</strong> {{ card.pricing.commission }}
          </p>
          <p class="text-sm text-[#144041aa] mt-1">{{ card.pricing.note }}</p>
        </div>

        <transition name="fade">
          <div v-if="expanded[index]" class="pt-6 space-y-6 border-t border-neutral-200">
            <h4 class="text-xl font-semibold text-[#1D4E4F]">Optional Add-Ons</h4>
            <ul class="space-y-4 text-neutral-700 font-medium">
              <li v-for="(addon, i) in card.addons" :key="i">{{ addon }}</li>
            </ul>
          </div>
        </transition>

        <div class="pt-8 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <button
            @click="toggleExpand(index)"
            class="text-[#1D4E4F] underline font-medium hover:text-[#144041] transition"
          >
            {{ expanded[index] ? 'Hide Add-Ons' : 'Read More About Add-Ons' }}
          </button>

          <button
            class="bg-gradient-to-r from-[#6BD4D4] to-[#1D4E4F] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition active:scale-95"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const cards = [
  {
    title: 'Complete Care Package',
    description: 'Full-service management for your holiday rental. Let us take care of everything—bookings, guests, maintenance & more.',
    features: [
      'Booking & Inquiries Management',
      'Guest Welcome & Key Handover',
      'Property Inspection & Maintenance',
      'Basic Amenities & Stocking',
      'Basic Repairs & Support'
    ],
    pricing: {
      commission: '20% of booking fee',
      note: 'We only earn when you earn—aligned incentives, better results.'
    },
    addons: [
      '🎁 Special Occasion Setup: Wine, treats & décor (from R600)',
      '🧹 Mid-Stay Cleaning: For longer bookings (from R300)',
      '👕 Laundry Services: Guest laundry on request'
    ]
  },
  {
    title: 'Premium Guest Experience',
    description: 'Enhance guest satisfaction with personalized touches and professional services.',
    features: [
      'Welcome Gifts & Info Pack',
      '24/7 Guest Support',
      'Local Experience Recommendations'
    ],
    pricing: {
      commission: '15% of booking fee',
      note: 'Boost reviews and repeat bookings.'
    },
    addons: [
      '🌸 Floral Arrangements',
      '🍽️ Gourmet Welcome Basket',
      '🚗 Airport Pickup Service'
    ]
  },
  {
    title: 'Maintenance & Repairs',
    description: 'Keep your property in top shape with our proactive maintenance services.',
    features: [
      'Routine Property Inspections',
      'Timely Repairs & Upgrades',
      'Emergency Response Team'
    ],
    pricing: {
      commission: 'Flat monthly fee',
      note: 'Peace of mind for property owners.'
    },
    addons: [
      '🔧 Appliance Servicing',
      '🧰 Handyman On Call',
      '💡 Electrical & Plumbing Checks'
    ]
  },
  {
    title: 'Cleaning & Housekeeping',
    description: 'Professional cleaning to ensure every guest enjoys a spotless stay.',
    features: [
      'Deep Cleaning Between Bookings',
      'Laundry & Linen Management',
      'Special Requests Handling'
    ],
    pricing: {
      commission: 'Per booking fee',
      note: 'Maintain high standards with ease.'
    },
    addons: [
      '🧽 Eco-Friendly Cleaning Products',
      '🛏️ Premium Linen Options',
      '🕒 Flexible Scheduling'
    ]
  }
]

const expanded = reactive(Array(cards.length).fill(false))

function toggleExpand(index) {
  expanded[index] = !expanded[index]
}
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
