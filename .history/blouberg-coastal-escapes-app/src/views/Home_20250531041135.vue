<template>
  <div class="relative w-full overflow-hidden">
    <!-- 1. Fixed video background -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="fixed inset-0 w-full h-full object-cover -z-10"
    >
      <source
        src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4"
        type="video/mp4"
      />
    </video>

    <!-- 2. Hero section (full screen, centered) -->
    <section class="relative z-10 h-screen flex items-center justify-center">
      <HeroSection />
    </section>

    <!-- 3. Intro section (shares same video) -->
    <section class="relative z-10 h-screen flex items-center justify-center">
      <IntroSection />
    </section>

    <!-- 4. Other sections below -->
    <div class="relative z-10">
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
