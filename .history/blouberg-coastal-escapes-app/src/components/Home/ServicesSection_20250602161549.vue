<template>
  <section class="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
    <!-- Top Wave SVG -->
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" class="block w-full h-16">
        <path d="M0,30 C360,90 1080,-30 1440,30 L1440,60 L0,60 Z"
              class="fill-current text-white"/>
      </svg>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto text-center px-6">
      <h2 class="text-5xl font-extrabold text-gray-800 mb-4">
        Our Services
      </h2>
      <div class="h-1 w-24 bg-indigo-500 mx-auto mb-12 animate-pulse"></div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          icon="briefcase"
          title="Property Management"
          description="We handle bookings, check-ins, and guest support—so you can relax."
        />
        <ServiceCard
          icon="sparkles"
          title="Cleaning Excellence"
          description="Our teams use eco-friendly products for a spotless, guest-ready home."
        />
        <ServiceCard
          icon="wrench"
          title="24/7 Maintenance"
          description="Fast repairs and preventive care to keep your property in top shape."
        />
      </div>
    </div>

    <!-- Bottom Wave SVG -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg viewBox="0 0 1440 60" class="block w-full h-16">
        <path d="M0,30 C360,90 1080,-30 1440,30 L1440,60 L0,60 Z"
              class="fill-current text-white"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue';
</script>
