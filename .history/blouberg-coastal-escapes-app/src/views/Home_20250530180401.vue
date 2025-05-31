<template>
<div class="relative w-full">

<!-- Background Video - Make it fixed to viewport -->
<video
  autoplay
  muted
  loop
  playsinline
  preload="auto"
  class="fixed inset-0 w-full h-full object-cover"
  style="z-index: -0;"
>
  <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4" type="video/mp4" />
</video>


<!-- Hero Section -->
<section class="relative z-10 h-screen w-full flex items-center justify-center">
  <!-- Keep overlay -->
  <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  <HeroSection />
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
import HeroSection    from '@/components/home/HeroSection.vue'
import IntroSection   from '@/components/home/IntroSection.vue'
import AboutSection   from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import PackagesSection from '@/components/home/PackagesSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FooterSection  from '@/components/home/FooterSection.vue'
</script>
