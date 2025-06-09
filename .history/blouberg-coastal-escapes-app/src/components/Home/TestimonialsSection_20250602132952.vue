<!-- components/TestimonialsSection.vue -->
<template>
  <section class="relative py-20 px-6 bg-gray-50">
    <div class="relative max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-800 mb-4 tracking-tight">Guest Testimonials</h2>
        <p class="text-xl text-gray-600 mt-6">
          Hear from property owners who trust us with their investments
        </p>
      </div>

      <!-- Testimonial Cards (Example slider logic or loop) -->
      <div class="space-y-12">
        <TestimonialCard
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import TestimonialCard from './TestimonialCard.vue'

const testimonials = [
  {
    quote: "This platform completely transformed how I manage my rental property. It's efficient, simple, and reliable.",
    name: "Sarah Peterson",
    location: "Austin, TX"
  },
  {
    quote: "Amazing experience! I feel confident knowing my investment is in good hands.",
    name: "James Carter",
    location: "Denver, CO"
  },
  {
    quote: "Professional service from day one. Highly recommend to other property owners.",
    name: "Emily Zhao",
    location: "San Diego, CA"
  }
]
</script>
