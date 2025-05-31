<template>
  <div class="relative w-full">
    <!-- Background Video -->
    <video
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      class="fixed top-0 left-0 w-screen h-screen object-cover z-0"
    >
      <source
        src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4"
        type="video/mp4"
      />
    </video>

    <!-- Main content -->
    <div class="relative z-10">
      <!-- Hero Section - SIMPLIFIED CONTAINER -->
      <section class="h-screen w-full relative">
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <HeroSection />
      </section>

      <!-- Other sections remain the same -->
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  </div>
</template>