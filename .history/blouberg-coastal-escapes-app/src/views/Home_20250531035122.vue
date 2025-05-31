<template>
  <div class="relative w-full" style="height: 100vh; overflow: auto;">
    <!-- Background video -->
    <div class="fixed top-0 left-0 w-full h-full z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        style="width: 100%; height: 100%; object-fit: cover;"
      >
        <source
          src='@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4'
          type='video/mp4'
        />
      </video>
    </div>

    <!-- Hero section - directly centered without extra wrapper -->
    <HeroSection />

    <!-- Other content sections below hero -->
    <div class="relative z-10" style="margin-top: 100vh;">
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import PackagesSection from '@/components/home/PackagesSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FooterSection from '@/components/home/FooterSection.vue'
</script>