<template>
  <div class="relative w-full h-screen overflow-hidden">

    <!-- 1) Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="fixed inset-0 w-full h-full object-cover z-0"
    >
      <source
        src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4"
        type="video/mp4"
      />
    </video>

    <!-- 2) Hero Section -->
    <section class="relative z-10 h-screen w-full flex items-center justify-center">
      <!-- overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <!-- content -->
      <HeroSection />
    </section>

    <!-- 3) Intro Section -->
    <section class="relative z-10 h-screen w-full flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      <IntroSection />
    </section>

    <!-- 4) Rest of page -->
    <AboutSection />
    <ServicesSection />
    <PackagesSection />
    <TestimonialsSection />
    <FooterSection />
  </div>
</template>

<script setup>
import HeroSection    from '@/components/HeroSection.vue'
import IntroSection   from '@/components/IntroSection.vue'
import AboutSection   from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import PackagesSection from '@/components/PackagesSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import FooterSection  from '@/components/FooterSection.vue'
</script>
