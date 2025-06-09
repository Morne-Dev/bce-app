<template>
  <section
    class="relative bg-cover bg-center bg-no-repeat text-gray-800"
    style="background-image: url('/your-background-image.jpg')"
  >
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Left Image -->
      <div class="flex justify-center items-center">
        <img
          src="/your-left-image.jpg"
          alt="Interior"
          class="rounded-xl w-full max-w-md shadow-xl"
        />
      </div>

      <!-- Right Text Content -->
      <div class="text-white">
        <h1 class="text-3xl md:text-4xl font-serif mb-4">
          Professional Holiday Property Management in Cape Town’s Coastal Hub Bloubergstrand,
        </h1>
        <h2 class="text-xl mb-6">
          Expert Maintenance, Cleaning and Guest Coordination
        </h2>
        <p class="mb-4">
          Owning a property is a valuable investment, but managing it can be challenging without the right support.
        </p>
        <p class="mb-4 font-semibold">
          At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
        </p>
        <p class="mb-4">
          From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all, so your property stays in top condition year-round.
        </p>

        <!-- Features Section -->
        <div
          class="mt-10 flex flex-col gap-8 md:flex-row md:justify-between"
        >
          <div class="text-center max-w-xs mx-auto">
            <div class="text-3xl">✔️</div>
            <h3 class="italic font-semibold mt-2">Established</h3>
            <p class="mt-2 text-sm">
              As Blouberg locals, we have in-depth understanding of the holiday market...
            </p>
          </div>

          <div class="text-center max-w-xs mx-auto">
            <div class="text-3xl">👍</div>
            <h3 class="italic font-semibold mt-2">Reviews</h3>
            <p class="mt-2 text-sm">
              Consistently rated above industry standard, our high review score shows our...
            </p>
          </div>

          <div class="text-center max-w-xs mx-auto">
            <div class="text-3xl">📍</div>
            <h3 class="italic font-semibold mt-2">Local</h3>
            <p class="mt-2 text-sm">
              Based in Blouberg, we’re proud locals with unmatched expertise in property...
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
