<template>
  <section class="relative py-24 px-6 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
    <!-- Background video with dark overlay (optional) -->
    <div class="absolute inset-0 z-0">
      <!-- Uncomment if using video -->
      <!--
      <video autoplay muted loop playsinline class="w-full h-full object-cover">
        <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-ripples-background-video.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-black/50"></div>
      -->
    </div>

    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="mb-16">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-4">Our Services</h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Seamless management for your holiday property — from check-in to cleanliness to repairs.
        </p>
      </div>

      <!-- Services Cards -->
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
