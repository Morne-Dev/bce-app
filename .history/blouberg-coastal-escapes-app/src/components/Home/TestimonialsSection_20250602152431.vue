<template>
  <section class="relative py-20 px-6 bg-gradient-to-b from-white to-gray-100">
    <div class="max-w-5xl mx-auto text-center mb-12">
      <h2 class="text-4xl font-bold text-gray-800 mb-4">What Our Guests Say</h2>
      <p class="text-gray-500 text-lg">Real experiences from happy travelers</p>
    </div>

    <!-- Slider Container -->
    <div class="relative overflow-hidden">
      <div 
        ref="slider"
        class="flex transition-transform duration-700 ease-in-out"
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
      <button @click="prevSlide" class="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50">
        <!-- Left Arrow Icon -->
      </button>
      <button @click="nextSlide" class="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50">
        <!-- Right Arrow Icon -->
      </button>
    </div>

    <!-- Pagination Dots -->
    <div class="flex justify-center mt-6 space-x-2">
      <button 
        v-for="(dot, index) in testimonials" 
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full"
        :class="{
          'bg-blue-600 w-6': currentIndex === index,
          'bg-gray-300': currentIndex !== index
        }"
      ></button>
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