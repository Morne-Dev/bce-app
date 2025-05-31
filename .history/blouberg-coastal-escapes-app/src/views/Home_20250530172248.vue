<template>
  <div class="relative w-full min-h-screen overflow-hidden">

    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="fixed top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- HeroSection with 50% overlay -->
    <section class="relative z-10 h-screen w-full">
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div class="relative z-20">
        <HeroSection />
      </div>
    </section>

    <!-- IntroSection with 30% overlay -->
    <section class="relative z-10 h-screen w-full">
      <div class="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      <div class="relative z-20">
        <IntroSection />
      </div>
    </section>

    <!-- Other Sections Without Video -->
    <section class="relative z-30">
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <FooterSection />
    </section>
    
  </div>
</template>
