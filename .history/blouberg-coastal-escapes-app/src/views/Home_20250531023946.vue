<template>
  <!-- Root container with forced dimensions -->
  <div class="relative h-screen w-full overflow-auto">
    <!-- Video background container -->
    <div class="fixed inset-0 z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <!-- Content container -->
    <div class="relative z-10 h-full">
      <!-- Hero section - positioned at top of container -->
      <div class="absolute top-0 left-0 w-full h-full">
        <HeroSection />
      </div>
      
      <!-- Other sections - placed below hero -->
      <div class="pt-[100vh]"> <!-- Push content below hero viewport -->
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <PackagesSection />
        <TestimonialsSection />
        <FooterSection />
      </div>
    </div>
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
