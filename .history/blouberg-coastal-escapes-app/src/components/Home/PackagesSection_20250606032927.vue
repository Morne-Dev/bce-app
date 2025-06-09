<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10">
      <PackageCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :expanded="expanded[index]"
        @toggle-expand="toggleExpand(index)"
      />
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import PackageCard from './PackageCard.vue'

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
