<template>
  <section
    v-motion="section"
    class="relative min-h-screen w-full bg-cover bg-center px-6 py-20 sm:py-24"
    style="background-image: url('/assets/images/beach-bg.jpg');"
  >
    <!-- Semi-dark overlay -->
    <div v-motion="overlay" class="absolute inset-0 bg-black/30"></div>

    <!-- Image + Text -->
    <div
      v-motion="content"
      class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
    >
      <img :src="interiorImage" alt="Interior" class="w-full md:w-1/2 rounded-md shadow-lg" />
      <div class="w-full md:w-1/2 space-y-4 text-white">
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-serif">Professional Holiday Property Management</h1>
        <p class="text-lg text-gray-200">Expert Maintenance, Cleaning & Guest Coordination</p>
        <div v-motion="listParent" class="space-y-3">
          <div v-for="(block,i) in blocks" :key="i" v-motion="listChild" class="text-gray-300">
            {{ block }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import interiorImage from '@/assets/images/Blouberg-coastal-escapes_600x1066_fill_edited.jpg'
import { useSectionMotion } from '@/composables/useSectionMotion'

const blocks = [
  '20+ years of experience in holiday rentals.',
  'Maximize income with dynamic pricing.',
  'End-to-end guest coordination & support.'
]

const { section, overlay, content, listParent, listChild } = useSectionMotion({
  threshold: 0.2
})
</script>
