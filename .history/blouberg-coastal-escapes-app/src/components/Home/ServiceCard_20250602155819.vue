<template>
  <div class="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
    <div class="flex justify-center mb-6">
      <img
        :src="image"
        alt=""
        class="w-20 h-20 object-cover rounded-full border-4 border-blue-200 shadow-md"
      />
    </div>
    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
    <div class="w-12 h-1 bg-blue-500 mx-auto mb-4 rounded-full"></div>
    <p class="text-gray-700 text-sm leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>
