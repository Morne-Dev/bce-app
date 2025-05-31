<template>
  <div>

    <!-- Video background wrapper for HeroSection and IntroSection -->
    <div class="relative w-full h-screen overflow-hidden">

      <!-- Background video -->
      <video
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4" type="video/mp4" />
      </video>



      <div class="relative h-screen z-20">
        <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>  <!-- Overlay -->
        <div class="relative z-20">
          <HeroSection />
        </div>
      </div>

      <div class="relative h-screen z-20">
        <div class="absolute inset-0 bg-black bg-opacity-30 z-10"></div>  <!-- Overlay -->
        <div class="relative z-20">
          <IntroSection />
        </div>
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
