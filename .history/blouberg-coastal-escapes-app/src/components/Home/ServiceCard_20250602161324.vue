<template>
  <div
    class="relative group bg-white rounded-xl overflow-hidden perspective"
    style="transform-style: preserve-3d;"
  >
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
          <!-- Property Management = Briefcase -->
          <svg
            v-if="icon === 'briefcase'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-indigo-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6 2a2 2 0 00-2 2v2h12V4a2 2 0 00-2-2H6z"/>
            <path
              fill-rule="evenodd"
              d="M18 8H2v6a2 2 0 002 2h12a2 2 0 002-2V8zm-3 3a1 1 0 10-2 0 1 1 0 002 0z"
              clip-rule="evenodd"
            />
          </svg>

          <!-- Cleaning Excellence = Sparkles -->
          <svg
            v-else-if="icon === 'sparkles'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-indigo-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 5a1 1 0 011-1h.528a1 1 0 01.951.69l.316 1.09a1 1 0 00.588.588l1.09.316A1 1 0 017 7H5a1 1 0 01-1-1V5z"/>
            <path d="M13 2a1 1 0 011-1h.528a1 1 0 01.951.69l.316 1.09a1 1 0 00.588.588l1.09.316A1 1 0 0117 4h-2a1 1 0 01-1-1V2z"/>
            <path d="M11 13a1 1 0 011 1v1.528a1 1 0 01-.69.951l-1.09.316a1 1 0 00-.588.588l-.316 1.09A1 1 0 019 18H7a1 1 0 01-1-1v-2a1 1 0 011-1h2z"/>
          </svg>

          <!-- 24/7 Maintenance = Wrench -->
          <svg
            v-else-if="icon === 'wrench'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-12 h-12 text-indigo-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10.325 4.317a.25.25 0 01.354-.354l.394.394a1.75 1.75 0 012.475 2.475l-.394.394a.25.25 0 01-.354-.354l.394-.394a1.25 1.25 0 00-1.768-1.767l-.394.394z"
            />
            <path
              d="M3.172 16.242c.2.2.512.2.707 0l1.414-1.414a8.753 8.753 0 01.879-2.151l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243a8.753 8.753 0 01-2.151.879L3.172 16.242z"
            />
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

// Tilt effect state
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
