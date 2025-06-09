<template>
    <div class="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-md">
      <!-- Rating Stars -->
      <div class="flex justify-center mb-8 space-x-1">
        <svg 
          v-for="i in 5" 
          :key="i" 
          class="w-8 h-8 text-amber-500 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </div>
      
      <!-- Quote -->
      <p class="text-gray-700 text-xl italic text-center mb-10 leading-relaxed px-4">
        {{ testimonial.quote }}
      </p>
      
      <!-- Author Info -->
      <div class="text-center">
        <div class="font-bold text-2xl text-gray-800 tracking-tight">
          {{ testimonial.name }}
        </div>
        <div class="text-gray-500 font-normal mt-1">
          {{ testimonial.location }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    testimonial: {
      type: Object,
      required: true
    }
  });
  </script>