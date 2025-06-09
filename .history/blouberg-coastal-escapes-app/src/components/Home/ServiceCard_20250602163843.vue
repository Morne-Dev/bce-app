<template>
  <div
    class="relative group rounded-3xl p-8 transition-all duration-300"
    @mousemove="handleMouseMove"
    @mouseleave="resetTilt"
    :style="tiltStyle"
  >
    <!-- Frosted glass + tint + soft shadow -->
    <div
      class="bg-white/30 bg-cyan-50/20 backdrop-blur-lg rounded-3xl p-6
             border border-white/40 shadow-lg shadow-cyan-200/30
             group-hover:shadow-xl group-hover:shadow-cyan-300/30
             transition-shadow duration-300"
    >
      <div class="flex justify-center mb-6">
        <img
          :src="image"
          alt=""
          class="w-20 h-20 object-cover rounded-full border-2 border-white shadow-sm"
        />
      </div>
      <h3 class="text-xl font-semibold text-gray-800 mb-1">{{ title }}</h3>
      <div class="w-12 h-1 bg-cyan-400 mx-auto mb-4 rounded-full"></div>
      <p class="text-gray-700 text-sm leading-relaxed">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  image: String,
  title: String,
  description: String
});

const tiltX = ref(0);
const tiltY = ref(0);
const tiltStyle = computed(() => ({
  transform: `perspective(600px) rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`
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
/* Floating subtle pulse animation */
@keyframes pulse {
  0%,100% { opacity: .3; }
  50% { opacity: .5; }
}
.animate-pulse {
  animation: pulse 4s ease-in-out infinite;
}
.animate-pulse.delay-200 {
  animation-delay: 2s;
}
</style>
