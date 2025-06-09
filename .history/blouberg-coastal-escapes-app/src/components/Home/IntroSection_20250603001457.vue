<template>
  <section
    ref="container"
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <div v-motion="overlay" class="absolute inset-0 bg-black/30"></div>
    <div
      v-motion="content"
      class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
    >
      <img
        :src="interiorImage"
        alt="Interior"
        class="w-full md:w-1/2 rounded-md shadow-lg"
      />
      <div class="w-full md:w-1/2 space-y-4 text-white">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif">
          Professional Holiday Property Management
        </h1>
        <p class="text-lg text-gray-200">
          Expert Maintenance, Cleaning & Guest Coordination
        </p>
        <div v-motion="listParent" class="space-y-3">
          <div
            v-for="(block, i) in blocks"
            :key="i"
            v-motion="listChild"
            class="text-gray-300"
          >
            {{ block }}
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { useMotion, useInView } from '@vueuse/motion'

const container = ref(null)
const blocks = [
  '20+ years of experience in holiday rentals.',
  'Maximize income with dynamic pricing.',
  'End-to-end guest coordination & support.'
]

// overlay fade out
const { motion: overlay } = useMotion({
  initial: { opacity: 1 },
  variants: { visible: { opacity: 0, transition: { duration: 1 } } }
})
// content fade + slide
const { motion: content } = useMotion({
  initial: { opacity: 0, y: 20 },
  variants: { visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } } }
})
// list stagger
const { motion: listParent } = useMotion({
  variants: { visible: { transition: { stagger: 0.2 } } }
})
const { motion: listChild } = useMotion({
  initial: { opacity: 0, x: -10 },
  variants: { visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
})

// trigger on scroll into view
const inView = useInView(container, { threshold: 0.2 })
watch(inView, visible => {
  if (visible) {
    overlay.apply('visible')
    content.apply('visible')
    listParent.apply('visible')
  }
})
</script>
