<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Background video (unchanged) -->
    <div
      class="absolute inset-0 z-0 bg-black"
      style="z-index: 0;"
    >
      <video
        autoplay muted loop playsinline preload="auto"
        class="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src='@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4'
          type='video/mp4'
        />
      </video>
    </div>

    <!-- Hero wrapper now handles centering -->
    <div class="relative z-10 h-screen flex items-center justify-center">
      <HeroSection />
    </div>

    <!-- Other sections below -->
    <div class="relative z-10 pt-[100vh]">
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
