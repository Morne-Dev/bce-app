<template>
    <div class="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto transition-all duration-300 hover:shadow-xl">
      <!-- Rating Stars -->
      <div class="flex justify-center mb-6">
        <svg v-for="i in 5" :key="i" class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </div>
      
      <!-- Quote -->
      <div class="relative mb-8">
        <svg class="absolute -top-6 -left-2 w-16 h-16 text-blue-100" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
        
        <p class="text-gray-700 italic text-lg md:text-xl relative z-10">
          {{ testimonial.quote }}
        </p>
        
        <svg class="absolute -bottom-6 -right-2 w-16 h-16 text-blue-100 transform rotate-180" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>
      
      <!-- Author Info -->
      <div class="text-center">
        <div class="font-bold text-xl text-gray-800">{{ testimonial.name }}</div>
        <div class="text-blue-600 font-medium">{{ testimonial.location }}</div>
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