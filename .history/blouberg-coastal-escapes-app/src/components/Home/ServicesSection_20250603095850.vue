<template>
  <section class="relative py-24 px-6 overflow-hidden">
    <!-- Background video + white overlay with wave mask -->
    <div class="absolute inset-0 z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4"
          type="video/mp4"
        />
      </video>
      <!-- ✨ Wave masked white overlay -->
      <div class="absolute inset-0 wave-mask"></div>
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
          :image="holidayImg"
          title="Holiday Property Management"
          description="We handle everything: guests, bookings, check-ins, cleaning, and care—so you don’t have to."
        />
        <ServiceCard
          :image="cleaningImg"
          title="Cleaning Services"
          description="Professional teams follow a detailed checklist to leave every corner spotless."
        />
        <ServiceCard
          :image="maintenanceImg"
          title="Maintenance Services"
          description="Fast repairs and preventive checks to keep your property safe and guest-ready."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png'
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png'
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png'
</script>

<style scoped>
.wave-mask {
  background-color: rgba(255, 255, 255, 0.8);
  mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='100'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='white' stop-opacity='0'/><stop offset='100%' stop-color='white' stop-opacity='1'/></linearGradient></defs><path d='M0,100 C300,0 900,0 1200,100 L1200,0 L0,0 Z' fill='url(%23g)'/></svg>");
  mask-repeat: no-repeat;
  mask-position: top;
  mask-size: 100% 100px;

  -webkit-mask-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='100'><defs><linearGradient id='g' x1='0' y1='0' x2='0' y2='1'><stop offset='0%' stop-color='white' stop-opacity='0'/><stop offset='100%' stop-color='white' stop-opacity='1'/></linearGradient></defs><path d='M0,100 C300,0 900,0 1200,100 L1200,0 L0,0 Z' fill='url(%23g)'/></svg>");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: top;
  -webkit-mask-size: 100% 100px;
}
</style>
