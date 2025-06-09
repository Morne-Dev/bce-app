<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#e1f3f3] overflow-hidden">
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 z-10">
      <PackageCard v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
  </section>
</template>

<script setup>
import PackageCard from '@/components/Home/PackageCard.vue'

const cards = [
  // (keep your existing array of card objects here)
]
</script>
