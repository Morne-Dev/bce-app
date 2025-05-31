<template>
  <div>

    <!-- Video background wrapper for HeroSection and IntroSection -->
    <div class="relative min-h-screen overflow-hidden">

      <!-- Background video -->
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4" type="video/mp4" />
      </video>

      <!-- HeroSection with overlay opacity 50% -->
      <div class="relative z-20 min-h-screen">
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <HeroSection />
      </div>

      <!-- IntroSection with overlay opacity 30% -->
      <div class="relative z-20 min-h-screen">
        <div class="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
        <IntroSection />
      </div>

    </div>

    <!-- Other sections without video background -->
    <AboutSection />
    <ServicesSection />
    <PackagesSection />
    <TestimonialsSection />
    <FooterSection />
    
  </div>
</template>
