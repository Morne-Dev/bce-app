<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24 md:flex md:items-center md:justify-between"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Left image -->
    <div class="relative z-10 w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
      <img
        src="..\assets\images\Blouberg-coastal-escapes_600x1066_fill_edited.jpg"
        alt="Interior"
        class="max-w-full h-auto rounded-md shadow-lg"
      />
    </div>

    <!-- Right content -->
    <div class="relative z-10 w-full md:w-1/2 text-white max-w-2xl mx-auto text-center md:text-left">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-black leading-tight">
        Professional Holiday Property Management in<br />
        Cape Town’s Coastal Hub Bloubergstrand,
      </h1>
      <p class="mt-4 text-lg text-gray-800 font-medium">
        Expert Maintenance, Cleaning and Guest Coordination
      </p>
      <p class="mt-6 text-md text-gray-700">
        Owning a property is a valuable investment, but managing it can be challenging without the right support.
      </p>
      <p class="mt-4 text-md text-gray-700">
        At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
      </p>
      <p class="mt-4 text-md text-gray-700">
        From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all,
        so your property stays in top condition year-round.
      </p>

      <!-- Features -->
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <div class="text-4xl text-gray-700 mb-2">✔️</div>
          <h3 class="font-semibold italic text-gray-800">Established</h3>
          <p class="text-sm text-gray-600 mt-2">
            As Blouberg locals, we have an in-depth understanding of the holiday market in the area.
            Our firsthand knowledge allows us to provide tailored holiday property management solutions,
            ensuring your investment is well-maintained and optimized for success.
          </p>
        </div>
        <div>
          <div class="text-4xl text-purple-800 mb-2">👍</div>
          <h3 class="font-semibold italic text-gray-800">Reviews</h3>
          <p class="text-sm text-gray-600 mt-2">
            Consistently rated above industry standard, our high review score shows our commitment to guest experience.
            This dedication ensures exceptional satisfaction, fostering repeat visits and positive referrals.
          </p>
        </div>
        <div>
          <div class="text-4xl text-purple-800 mb-2">📍</div>
          <h3 class="font-semibold italic text-gray-800">Local</h3>
          <p class="text-sm text-gray-600 mt-2">
            Based in Blouberg, we’re proud locals with unmatched expertise in property management services.
            We blend community insights with personalized service.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Replace image URLs with local assets or public URLs in your project
</script>

<style scoped>
/* You can add custom fonts or additional styling here if needed */
</style>
