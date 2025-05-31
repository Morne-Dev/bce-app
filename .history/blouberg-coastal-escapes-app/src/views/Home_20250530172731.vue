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
    </video>

    <!-- Hero Section with overlay -->
    <section class="relative z-10 h-screen w-full flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div class="relative z-20 w-full">
        <HeroSection />
      </div>
    </section>

    <!-- Intro Section with overlay -->
    <section class="relative z-10 h-screen w-full flex items-center justify-center">
      <div class="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      <div class="relative z-20 w-full">
        <IntroSection />
      </div>
    </section>

    <!-- Rest of the page -->
    <section class="relative z-30">
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <FooterSection />
    </section>

  </div>
</template>
