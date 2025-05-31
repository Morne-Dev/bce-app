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
      <source src="@/assets/videos/blouberg-airbnb-holiday-property-management-background-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay for text readability -->
    <div class="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

    <!-- Main Content -->
    <div class="relative z-20">
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>
