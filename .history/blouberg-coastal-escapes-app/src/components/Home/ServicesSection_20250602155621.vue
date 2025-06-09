<template>
  <section class="relative py-24 px-6 overflow-hidden text-white">
    <!-- Background video with overlay -->
    <div class="absolute inset-0 z-0">
      <video autoplay muted loop playsinline class="w-full h-full object-cover">
        <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold mb-4 text-white">Our Services</h2>
        <p class="text-white/80 text-lg max-w-2xl mx-auto">
          From guest check-ins to pristine cleaning and reliable maintenance, we offer complete management for your Blouberg holiday home.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <ServiceCard
          :image="holidayImg"
          title="Holiday Property Management"
          description="We handle everything: guests, bookings, check-ins, cleaning, and care — so you don’t have to."
        />
        <ServiceCard
          :image="cleaningImg"
          title="Cleaning Services"
          description="Professional cleaning teams that meet Airbnb’s highest guest expectations every time."
        />
        <ServiceCard
          :image="maintenanceImg"
          title="Maintenance Services"
          description="We fix it fast. Reliable repair and maintenance services to protect your investment."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';

import holidayImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png';
import cleaningImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Cleaning-Services.png';
import maintenanceImg from '@/assets/images/blouberg-airbnb-holiday-property-management-Maintenance-Services.png';
</script>
