<template>
  <div class="relative w-full min-h-screen overflow-x-hidden">
    <!-- Background video layer -->
    <div
      class="fixed top-0 left-0 w-full h-full z-0"
      style="background: black; z-index: 0;"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
      >
        <source
          src='@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4'
          type='video/mp4'
        />
      </video>
    </div>

    <div class="relative z-10">
      <HeroSection />
      <IntroSection />
      <OurServicesSection />
      <TestimonialsSection />
      <HomePackagesSection />
      <AboutSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/home/HeroSection.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import OurServicesSection from '@/components/home/HomeServicesSection.vue'
import PackagesSection from '@/components/home/PackagesSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FooterSection from '@/components/home/FooterSection.vue'
</script>
