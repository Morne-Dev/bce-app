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
        <!-- Icon -->
        <svg
          v-if="iconSvg"
          v-html="iconSvg"
          class="w-12 h-12 text-indigo-500 mb-4 transform transition-transform duration-500 group-hover:rotate-12"
        />
        <!-- Title -->
        <h3 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BriefcaseIcon, SparklesIcon, WrenchIcon } from '@heroicons/vue/outline';

const props = defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const tiltX = ref(0);
const tiltY = ref(0);

// Map icon name to SVG
const icons = {
  briefcase: BriefcaseIcon,
  sparkles: SparklesIcon,
  wrench: WrenchIcon
};

const iconSvg = icons[props.icon]
  ? icons[props.icon]({ class: '' })
  : null;

// Calculate inline style for tilt effect
const tiltStyle = computed(() => ({
  transform: `rotateX(${tiltX.value}deg) rotateY(${tiltY.value}deg)`
}));

function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  tiltX.value = (-y / (rect.height / 2)) * 5;  // max 5°
  tiltY.value = (x / (rect.width / 2)) * 5;
}

function resetTilt() {
  tiltX.value = 0;
  tiltY.value = 0;
}
</script>

<style scoped>
/* 3D tilt container */
.perspective { perspective: 600px; }
</style>
