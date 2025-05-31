<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Background video using inline style -->
    <div
      class="absolute top-0 left-0 w-full h-full z-0"
      style="
        background: black;
        z-index: 0;
      "
    >
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        style="
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
        "
      >
        <source
          src='@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4'
          type='video/mp4'
        />
      </video>
    </div>

    <!-- Hero content on top of video -->
    <div class="relative z-10 h-screen">
      <HeroSection />
    </div>

    <!-- Other content sections below hero -->
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
