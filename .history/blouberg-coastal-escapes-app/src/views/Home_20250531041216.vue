<template>
  <div class="relative w-full overflow-visible">
    <!-- Fixed video background -->
    <div class="fixed inset-0 -z-10">
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <!-- Page content wrapper -->
    <div class="relative z-10">
      <!-- Hero (full screen, centered) -->
      <section class="h-screen flex items-center justify-center">
        <HeroSection />
      </section>

      <!-- Intro (full screen, same bg) -->
      <section class="h-screen flex items-center justify-center">
        <IntroSection />
      </section>

      <!-- Remaining sections -->
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import HeroSection        from '@/components/home/HeroSection.vue'
import IntroSection       from '@/components/home/IntroSection.vue'
import AboutSection       from '@/components/home/AboutSection.vue'
import ServicesSection    from '@/components/home/ServicesSection.vue'
import PackagesSection    from '@/components/home/PackagesSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import FooterSection      from '@/components/home/FooterSection.vue'
</script>
