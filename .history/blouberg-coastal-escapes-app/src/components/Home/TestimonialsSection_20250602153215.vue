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
