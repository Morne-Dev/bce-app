<!-- Home.vue -->
<template>
  <div class="relative w-full overflow-hidden">

    <!-- Video Background -->
    <div class="absolute top-0 left-0 w-full h-full z-0">
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <!-- Hero Section -->
    <div class="relative z-10">
      <HeroSection />
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  </div>
</template>
