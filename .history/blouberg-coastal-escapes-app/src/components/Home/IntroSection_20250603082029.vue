<template>
  <section
    ref="introSection"
    class="intro-section relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- ▶️ Removed gradient overlay -->

    <!-- Top Content -->
    <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- … your existing content … -->
    </div>

    <!-- Features Section -->
    <div class="relative z-10 mt-16 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8 text-center">
      <!-- … your feature items … -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'

const introSection = ref(null)
// … keep your IntersectionObserver logic if you still want scroll animation …
</script>

<style scoped>
.intro-section {
  /* keep or remove animation styles as you prefer */
}
</style>




<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'

const introSection = ref(null)

function onIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-show')
    } else {
      entry.target.classList.remove('animate-show')
    }
  })
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(onIntersection, { threshold: 0.3 })
  if (introSection.value) {
    observer.observe(introSection.value)
  }
})

onBeforeUnmount(() => {
  if (observer && introSection.value) {
    observer.unobserve(introSection.value)
  }
})
</script>


<style scoped>

.intro-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  will-change: opacity, transform;
}

.intro-section.animate-show {
  opacity: 1;
  transform: translateY(0);
}



/* Gradient overlay already in template */
</style>
