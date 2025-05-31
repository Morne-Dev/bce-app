<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="@/assets/videos/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay to Enhance Text Readability -->
    <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

    <!-- Main Content -->
    <div class="relative z-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/Home/HeroSection.vue'
import AboutSection from '@/components/Home/AboutSection.vue'
import ServicesSection from '@/components/Home/ServicesSection.vue'
import PackagesSection from '@/components/Home/PackagesSection.vue'
import TestimonialsSection from '@/components/Home/TestimonialsSection.vue'
import ContactSection from '@/components/Home/ContactSection.vue'
</script>
