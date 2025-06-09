<template>
  <div class="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl text-center transition-all hover:scale-105 duration-300">
    <!-- Service Icon -->
    <div class="flex justify-center mb-6">
      <img
        :src="image"
        alt=""
        class="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg"
      />
    </div>

    <!-- Title -->
    <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
    <div class="w-12 h-1 bg-blue-300 mx-auto mb-4 rounded-full"></div>

    <!-- Description -->
    <p class="text-white/80 text-sm leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String,
});
</script>
