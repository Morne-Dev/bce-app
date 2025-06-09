<template>
  <section
    ref="introSection"
    class="relative min-h-screen w-full pt-60 sm:py-24"
    style="background-image: linear-gradient(rgba(10,25,40,0.7), rgba(10,25,40,0.3)), url('/assets/images/beach-bg.jpg'); background-size: cover; background-position: center;"
  >
    <!-- Top Gradient Vignette Overlay -->
    <div
      class="absolute inset-0 pointer-events-none"
      style="
        background: radial-gradient(
          ellipse at center,
          rgba(10, 25, 40, 0.7) 0%,
          rgba(10, 25, 40, 0.9) 70%,
          rgba(10, 25, 40, 1) 100%
        );
        z-index: 0;
      "
    ></div>

    <!-- Top Content -->
    <div
      class="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-16 px-6 sm:px-8"
      style="min-height: 70vh;"
    >
      <!-- Left image -->
      <div
        class="w-full md:w-1/2 flex justify-center mb-12 md:mb-0 pt-6 animate-item"
        style="transition-delay: 0.1s;"
      >
        <img
          :src="interiorImage"
          alt="Modern vacation rental interior in Blouberg"
          class="max-w-full h-auto rounded-lg border-2 border-[#d4af37] shadow-[0_15px_30px_rgba(212,175,55,0.25)]"
          style="transform: none;"
        />
      </div>

      <!-- Right content -->
      <div
        class="w-full md:w-1/2 max-w-xl mx-auto text-center md:text-left space-y-8"
        style="color: #f0e6d2;"
      >
        <h1
          class="text-4xl sm:text-5xl font-serif font-semibold leading-tight animate-item"
          style="
            transition-delay: 0.2s;
            letter-spacing: 0.05em;
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
          "
        >
          <span>Professional Holiday Property Management</span><br />
          in Cape Town’s Coastal Hub Bloubergstrand
        </h1>

        <p
          class="text-xl font-medium animate-item"
          style="transition-delay: 0.3s; color: #d4af37; text-shadow: 0 1px 3px rgba(0,0,0,0.4);"
        >
          Expert Maintenance, Cleaning and Guest Coordination
        </p>

        <div
          class="space-y-5 animate-item"
          style="
            transition-delay: 0.4s;
            color: #e6d9b8;
            font-size: 1.125rem;
            line-height: 1.6;
            text-shadow: 0 1px 2px rgba(0,0,0,0.3);
          "
        >
          <p>
            Owning a property is a valuable investment, but managing it can be challenging without the right support.
          </p>
          <p>
            At Blouberg Coastal Escapes, we offer expert holiday property management with 20+ years of experience.
          </p>
          <p>
            From maximizing rental income to ensuring seamless maintenance, cleaning, and guest coordination—we handle it all.
          </p>
        </div>

        <!-- CTA Button -->
        <div class="pt-6 animate-item" style="transition-delay: 0.5s;">
          <a
            href="#contact"
            class="inline-block px-8 py-4 rounded-md shadow-lg transition duration-300 ease-in-out"
            style="
              background-color: #1b263b;
              color: #d4af37;
              box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
            "
            @mouseover="e => (e.currentTarget.style.boxShadow = '0 0 15px rgba(212, 175, 55, 0.9)')"
            @mouseout="e => (e.currentTarget.style.boxShadow = '0 0 10px rgba(212, 175, 55, 0.6)')"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div
      class="relative z-10 mt-24 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-20 sm:gap-16 text-center"
      style="color: #e6d9b8;"
    >
      <div
        class="animate-item flex flex-col items-center"
        style="transition-delay: 0.1s;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Established icon"
          class="h-12 w-12 text-[#d4af37] transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiDomain" />
        </svg>
        <h3 class="mt-5 text-xl font-semibold" style="color: #f0e6d2;">
          Established
        </h3>
        <p class="mt-3 text-base max-w-xs">
          As Blouberg locals, we have in-depth knowledge of the holiday rental market. We tailor property management solutions that ensure your investment is profitable and stress-free.
        </p>
      </div>

      <div
        class="animate-item flex flex-col items-center"
        style="transition-delay: 0.2s;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Reviews icon"
          class="h-12 w-12 text-[#d4af37] transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiStarCircle" />
        </svg>
        <h3 class="mt-5 text-xl font-semibold" style="color: #f0e6d2;">
          Reviews
        </h3>
        <p class="mt-3 text-base max-w-xs">
          We’re consistently rated above the industry standard, thanks to our guest-focused approach. High reviews mean more bookings, repeat guests, and better returns for your property.
        </p>
      </div>

      <div
        class="animate-item flex flex-col items-center"
        style="transition-delay: 0.3s;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Local icon"
          class="h-12 w-12 text-[#d4af37] transition-transform duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path :d="mdiMapMarkerRadius" />
        </svg>
        <h3 class="mt-5 text-xl font-semibold" style="color: #f0e6d2;">
          Local
        </h3>
        <p class="mt-3 text-base max-w-xs">
          We’re local to Blouberg and deeply involved in the community. That insight helps us offer personalized, reliable service for both homeowners and guests.
        </p>
      </div>
    </div>

    <!-- Bottom Fade to White -->
    <div
      class="absolute inset-x-0 bottom-0 h-[95vh]"
      style="background: linear-gradient(to top, white, rgba(255,255,255,0.93), transparent); z-index: 0;"
    ></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { mdiDomain, mdiStarCircle, mdiMapMarkerRadius } from '@mdi/js'

const introSection = ref(null)
let observer

function handleIntersect(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
      observer.unobserve(entry.target)
    }
  })
}

onMounted(() => {
  const options = { threshold: 0.2 }
  observer = new IntersectionObserver(handleIntersect, options)
  introSection.value
    .querySelectorAll('.animate-item')
    .forEach(el => {
      observer.observe(el)
    })
})

onBeforeUnmount(() => {
  observer.disconnect()
})
</script>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
/* Smooth scale hover for buttons */
a.inline-block:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
