<template>
  <div class="relative group perspective">
    <!-- Gradient border wrapper -->
    <div
      class="p-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 transform-gpu transition-all duration-500
             group-hover:scale-105"
    >
      <!-- Inner card -->
      <div
        class="bg-white rounded-lg p-6 h-full flex flex-col items-center text-center shadow-lg
               group-hover:shadow-2xl transition-shadow duration-500"
        :style="tiltStyle"
        @mousemove="handleMouseMove"
        @mouseleave="resetTilt"
      >
        <!-- Inline SVG Icon -->
        <div class="mb-4">
          <!-- Briefcase Icon -->
          <svg
            v-if="icon === 'briefcase'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16 7V4a2 2 0 00-2-2H10a2 2 0 00-2 2v3M3 7h18v13H3V7z" />
          </svg>

          <!-- Sparkles Icon -->
          <svg
            v-else-if="icon === 'sparkles'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M5 3v2m0 14v2m14-16v2m0 14v2M9 9l2 2m0-2l-2 2m4 4l2 2m0-2l-2 2" />
          </svg>

          <!-- Wrench Icon -->
          <svg
            v-else-if="icon === 'wrench'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.232 5.232l3.536 3.536M9 11l3 3m-6 6l3-3m3 3l3-3M4 4l16 16" />
            <!-- Replace with a proper wrench path if you have one -->
          </svg>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
        <!-- Divider -->
        <div class="w-12 h-1 bg-purple-500 mb-4 rounded-full"></div>
        <!-- Description -->
        <p class="text-gray-600 text-sm leading-relaxed">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

// Tilt state
const tiltX = ref(0);
const tiltY = ref(0);
const tiltStyle = computed(() => ({
  transform: `rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`
}));

function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  tiltX.value = (-y / (rect.height / 2)) * 5;
  tiltY.value = (x / (rect.width / 2)) * 5;
}

function resetTilt() {
  tiltX.value = 0;
  tiltY.value = 0;
}
</script>

<style scoped>
.perspective { perspective: 600px; }
</style>
