<template>
  <section class="relative py-5 px-6 bg-gray-50" style="background-color: #F2ECE9;">
    <div class="relative max-w-7xl mx-auto">

      <!-- Testimonial Slider -->
      <div class="relative overflow-hidden">
        <!-- Slider Container -->
        <div 
          ref="slider"
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(testimonial, index) in testimonials" 
            :key="index"
            class="flex-shrink-0 w-full px-4"
          >
            <TestimonialCard :testimonial="testimonial" />
          </div>
        </div>
        
        <!-- Navigation Arrows -->
        <button 
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <!-- Pagination Dots -->
      <div class="flex justify-center mt-5 space-x-2">
        <button 
          v-for="(dot, index) in testimonials" 
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 rounded-full transition-all"
          :class="{
            'bg-blue-600 w-6': currentIndex === index,
            'bg-gray-300': currentIndex !== index
          }"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TestimonialCard from '@/components/home/TestimonialCard.vue';

const testimonials = [
  {
    name: "Amalia James",
    location: "SA",
    quote: "Quiet, spacious, neat as a pin. Friendly welcome. The hosts went above and beyond.",
    rating: 5
  },
  {
    name: "Debbie Jones",
    location: "CH",
    quote: "The location was perfect for me. The apartment was clean, well-organised and well-equipped. I was personally welcomed by the host and really pleased to find everything needed thoughtfully left for me",
    rating: 5
  },
  {
    name: "Teresa Hopkins",
    location: "US Virgin Islands",
    quote: "What an amazing place to stay at, Riette is the most amazing host ever. She has done so much for us.",
    rating: 5
  },
  {
    name: "Blayne Hobs",
    location: "UK",
    quote: "The Host welcomed us very friendly and professional on arrival, even though we were late. The place is very clean and safe. The Host suggested restaurants and we were delighted when we experienced them. Definitely value for money. We will be back!",
    rating: 5
  }
];

const currentIndex = ref(0);
const slider = ref(null);
let autoSlideInterval;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto-advance slides
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 6000);
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
});
</script>