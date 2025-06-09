<template>
  <section class="relative py-20 px-6 overflow-hidden">
    <!-- Background video -->
    <div class="absolute top-0 left-0 w-full h-full z-0">
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
    </div>

    <!-- Overlay content -->
    <div class="relative z-10 max-w-7xl mx-auto text-center text-white">
      <!-- Title and subtitle box -->
      <div class="backdrop-blur-sm bg-white/20 p-6 rounded-2xl inline-block mb-16">
        <h2 class="text-4xl font-semibold mb-2 text-gray-900">Our Services</h2>
        <p class="text-gray-800 max-w-2xl mx-auto">
          Explore our professional property management services for your Blouberg holiday accommodation,
          featuring seamless guest communications, meticulous cleaning, and reliable maintenance to enhance
          your guests’ experience.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
        <ServiceCard
          image="@\assets\images\blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png.jpg"
          title="Holiday Property Management"
          description="Experience seamless rental operations with our holiday property management services, designed to handle guest communications, housekeeping, and property upkeep, ensuring your guests enjoy a flawless stay."
        />
        <ServiceCard
          image="/img/cleaning.jpg"
          title="Cleaning Services"
          description="Maintain a pristine environment with our specialized cleaning services, tailored to meet the unique needs of your property and ensure a spotless presentation for every guest."
        />
        <ServiceCard
          image="/img/maintenance.jpg"
          title="Maintenance Services"
          description="Ensure the longevity and optimal performance of your property through our comprehensive maintenance solutions, addressing repairs and preventive care to provide a safe and comfortable experience for occupants."
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import holdiayImg from '../../assets/images/blouberg-airbnb-holiday-property-management-Holiday-Property-Management.png.jpg'
</script>
