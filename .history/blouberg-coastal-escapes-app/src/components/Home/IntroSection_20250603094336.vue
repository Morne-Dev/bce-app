<template>
  <section
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24 overflow-hidden"
    style="background-image: url('/assets/images/beach-bg.jpg');"
    ref="introSection"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-0"></div>

    <!-- Content... -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- image + text -->
    </div>
    <div class="relative z-10 mt-16 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-center">
      <!-- feature cards -->
    </div>

    <!-- ▶️ Corrected Wave Separator -->
    <div
      class="absolute bottom-0 left-0 w-full overflow-hidden"
      style="height: 100px;"
    >
      <svg
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        class="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'

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
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-item.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
