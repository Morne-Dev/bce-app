<template>
  <v-motion
    tag="section"
    class="relative py-24 px-6 overflow-hidden"
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 1 } }"
  >
    <!-- Background video + overlay -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay muted loop playsinline preload="auto"
        class="w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4"
          type="video/mp4"
        />
      </video>
      <div class="absolute inset-0 bg-white/80"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Seamless management for your holiday property — from check-in to cleanliness to repairs.
        </p>
      </div>

      <!-- Service Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <ServiceCard
          v-for="(card, i) in cards"
          :key="i"
          :image="card.image"
          :title="card.title"
          :description="card.description"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: i * 0.3, duration: 0.6 } }"
        />
      </div>
    </div>
  </v-motion>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png'
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png'
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png'

const cards = [
  {
    image: holidayImg,
    title: "Holiday Property Management",
    description: "We handle everything: guests, bookings, check-ins, cleaning, and care—so you don’t have to."
  },
  {
    image: cleaningImg,
    title: "Cleaning Services",
    description: "Professional teams follow a detailed checklist to leave every corner spotless."
  },
  {
    image: maintenanceImg,
    title: "Maintenance Services",
    description: "Fast repairs and preventive checks to keep your property safe and guest-ready."
  },
]
</script>
