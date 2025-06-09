<!-- components/ServiceCard.vue -->
<template>
    <div class="backdrop-blur-sm bg-white/30 rounded-3xl p-6 shadow-md text-center">
      <div class="flex justify-center -mt-16 mb-4">
        <img :src="image" alt="" class="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg" />
      </div>
      <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
      <div class="w-12 mx-auto h-1 bg-gray-700 mb-3"></div>
      <p class="text-sm text-gray-800">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    image: String,
    title: String,
    description: String,
  })
  </script>
  