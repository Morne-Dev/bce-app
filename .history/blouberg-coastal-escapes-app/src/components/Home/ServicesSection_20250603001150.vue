<template>
  <section v-motion="section" class="relative py-24 px-6 overflow-hidden">
    <!-- Video + white overlay -->
    <div class="absolute inset-0">
      <video autoplay muted loop playsinline class="w-full h-full object-cover">
        <!-- <source src="@/assets/videos/…ripples-background-video.mp4" type="video/mp4" /> -->
      </video>
      <div v-motion="overlay" class="absolute inset-0 bg-white/80"></div>
    </div>

    <!-- Header & Cards -->
    <div v-motion="content" class="relative z-10 max-w-6xl mx-auto text-center space-y-8">
      <div>
        <h2 class="text-4xl font-extrabold text-gray-800">Our Services</h2>
        <p class="text-gray-600">Seamless management for your holiday property.</p>
      </div>
      <div v-motion="listParent" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <ServiceCard
          v-for="(svc,i) in services" :key="i"
          v-motion="listChild"
          :image="svc.image"
          :title="svc.title"
          :description="svc.description"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
// import holidayImg from '@/assets/images/…-Holiday-Property-Management.png'
// import cleaningImg from '@/assets/images/…-Cleaning-Services.png'
// import maintenanceImg from '@/assets/images/…-Maintenance-Services.png'
import { useSectionMotion } from '@/composables/useSectionMotion'

const services = [
  { image: holidayImg,   title: 'Holiday Property Management', description: 'We handle bookings, check-ins, and care.' },
  { image: cleaningImg,  title: 'Cleaning Services',            description: 'Spotless turnover with our expert teams.' },
  { image: maintenanceImg,title: 'Maintenance Services',         description: 'Fast repairs & preventive checks.' },
]

const { section, overlay, content, listParent, listChild } = useSectionMotion({
  threshold: 0.15
})
</script>
