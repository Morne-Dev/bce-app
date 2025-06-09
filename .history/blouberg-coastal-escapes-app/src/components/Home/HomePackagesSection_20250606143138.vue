<template>
  <section class="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-white via-[#f0fafa] to-[#eaf3f3] overflow-hidden">
    <!-- Decorative blobs -->
    <div class="absolute -top-32 -left-24 w-80 h-80 bg-[#6BD4D4]/30 rounded-full blur-3xl z-0"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#1D4E4F]/20 rounded-full blur-3xl z-0"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start z-10">
      <div
        v-for="(card, index) in cards"
        :key="'package-' + index"
        :class="{ 'md:mt-8': index % 2 === 1 }"
      >
        <HomePackageCard
          :card="card"
          :expanded="expanded[index]"
          @toggle-expand="toggleExpand(index)"
        />
      </div>

      <div
        v-for="(service, index) in services"
        :key="'service-' + index"
        :class="{ 'md:mt-8': (cards.length + index) % 2 === 1 }"
      >
        <HomeServicescard :card="service" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import HomePackageCard from './HomePackageCard.vue'
import HomeServicescard from './HomeServicesard.vue' // match the filename exactly

const cards = [ /* ... */ ]
const services = [ /* ... */ ]

const expanded = reactive(Array(cards.length).fill(false))
function toggleExpand(i) { expanded[i] = !expanded[i] }
</script>
