<template>
    <div class="bg-white rounded-xl p-8 max-w-3xl mx-auto shadow-md">
      
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